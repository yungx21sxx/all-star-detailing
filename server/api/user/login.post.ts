import userService from '#server/service/user.service';
import { SmsCode, User } from '@prisma/client';
import smsService from '#server/service/sms.service';
import { password } from 'iron-webcrypto';
import { UserLoginDTO } from '~/types/dto';
import { UserAuthResponse } from '~/types/response';
import { H3Error } from 'h3';

export default defineEventHandler(async (event) => {
  const body = await readBody<UserLoginDTO>(event);
  console.log(body);
  const { phone, otp, phoneRow } = body;
  const user = await userService.getUserByPhoneRow(phoneRow);

  let createdUser: User;
  let isNewUser: boolean = false;

  const validatedOtp = await smsService.validateOtp(phoneRow, otp);

  if (!validatedOtp) {
    console.log('Не верно введен код или его срок действия истек.');
    throw createError({
      statusCode: 400,
      statusMessage: 'Не верно введен код или его срок действия истек.',
    });
  }

  if (!user) {
    createdUser = await userService.createUser({ phone, phoneRow });
    isNewUser = true;
  }

  const config = useRuntimeConfig();
  // @ts-ignore
  const userId: number = isNewUser ? createdUser.id : user.id;
  const session = serialize({
    userId: userId,
    role: 'USER',
  });
  const signedSession = sign(session, config.cookieSecret);

  setCookie(event, config.cookieName, signedSession, {
    httpOnly: true,
    path: '/',
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
    expires: new Date(Date.now() + config.cookieRememberMeExpires),
  });

  const userResponse = isNewUser ? createdUser : user;
  return {
    ...userResponse,
    role: 'USER',
  };
});
