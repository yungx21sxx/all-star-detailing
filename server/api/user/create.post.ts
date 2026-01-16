import { H3Event } from 'h3';
import { UserCreateDTO } from '~/types/dto';
import userService from '#server/service/user.service';
import { User } from '@prisma/client';

export default defineEventHandler(async (event: H3Event) => {
  const { phone, phoneRow, balance } = await readBody<UserCreateDTO>(event);

  const createdUser: User = await userService.createUser({ phone, phoneRow });
  return userService.updateUserBalance(createdUser.id, balance);
});
