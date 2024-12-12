import {UserAuthResponse, UserResponse} from "~/types/response";
import {H3Error} from "h3";
import {IUser} from "~/types/client";
import userService from "~/server/service/user.service";
import {User} from "@prisma/client";

export default defineEventHandler(async (event): Promise<Promise<UserResponse> | H3Error> => {
	const userId: number = parseInt(event.context.params.id);
	const userFromDB = await userService.getUserById(userId);

	if (!userFromDB) {
		return createError({
			statusCode: 401,
			message: 'Пользователь не найден!'
		})
	}

	return userFromDB
})