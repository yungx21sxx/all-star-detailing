import {H3Error, H3Event} from "h3";
import type {AdminLoginDTO} from "~/types/dto";
import adminService from "~/server/service/admin.service";
import {Admin} from ".prisma/client";
import {UserAuthResponse} from "~/types/response";

export default defineEventHandler(async (event: H3Event): Promise<UserAuthResponse | H3Error> => {
	const body = await readBody<AdminLoginDTO>(event);

	const { login, password} = body;
	const admin: Admin | null = await adminService.getAdminByLogin(login);
	if (!admin) {
		return createError({
			statusCode: 401,
			message: "Неверный логин или пароль!",
		});
	}
	const verified = await verify(password, admin.passwordHash);
	if (!verified) {
		return createError({
			statusCode: 401,
			message: "Неверный логин или пароль!",
		});
	}
	const config = useRuntimeConfig();

	const session = serialize({ userId: admin.id, role: 'ADMIN'});
	const signedSession = sign(session, config.cookieSecret);

	setCookie(event, config.cookieName, signedSession, {
		httpOnly: true,
		path: "/",
		sameSite: "strict",
		secure: process.env.NODE_ENV === "production",
		expires: new Date(Date.now() + config.cookieRememberMeExpires)
	});

	return {
		userId: admin.id,
		role: 'ADMIN'
	}
})