import {H3Error, H3Event} from "h3";
import userService from "~/server/service/user.service";
import smsService from "~/server/service/sms.service";
import {SmsCode} from "@prisma/client";
import type {createOtpDTO} from "~/types/dto";
import type {CreateOtpResponse} from "~/types/response";


export default defineEventHandler(async (event: H3Event): Promise<CreateOtpResponse | H3Error> => {
    try {
        const { phoneRow } = await readBody<createOtpDTO>(event);
        const smsCode: SmsCode | null = await smsService.createOtp(phoneRow);
        console.log('smsCode', smsCode)
        return {
            phoneRow,
        }
    } catch (e) {
        return createError({
            statusCode: 404,
            statusMessage: 'Ошибка отправки!'
        })
    }
})