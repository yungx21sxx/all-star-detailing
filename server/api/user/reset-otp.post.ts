import {H3Error, H3Event} from "h3";
import {CreateOtpResponse} from "~/types/response";
import {createOtpDTO} from "~/types/dto";
import {SmsCode} from "@prisma/client";
import smsService from "~/server/service/sms.service";

export default defineEventHandler(async (event: H3Event) => {
	const { phoneRow } = await readBody<createOtpDTO>(event);
	const otp = smsService.resetOtp(phoneRow);
	if (!otp) {
		return createError({
			statusCode: 404,
			statusMessage: ''
		});
	}

	return otp;
})