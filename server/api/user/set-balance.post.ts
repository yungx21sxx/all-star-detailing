import {UserAuthResponse} from "~/types/response";
import {H3Error} from "h3";
import {SetBalanceDTO} from "~/types/dto";
import userService from "~/server/service/user.service";
import {IUser} from "~/types/client";
import {User} from "@prisma/client";

export default defineEventHandler(async (event): Promise<User | H3Error> => {
	const {userId, newBalance} = await readBody<SetBalanceDTO>(event);
	const user = await userService.getUserById(userId);

	if (!user) {
		return createError({
			statusCode: 401,
			message: `Пользватель с ID: ${userId} - не найден`,
		})
	}

	try {
		const updatedUser = await userService.updateUserBalance(userId, newBalance)
		return updatedUser
	} catch (e) {
		console.log(e)
		return createError({
			statusCode: 401,
			message: `Ошибка изменения данных`,
		})
	}

})