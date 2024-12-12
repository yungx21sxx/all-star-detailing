
import {prisma} from "~/server/service/prisma.service";
import {User} from "@prisma/client";

class UserService {
	async getUsers(): Promise<User[]> {
		return prisma.user.findMany();
	}

	async createUser(user: {phone: string, phoneRow: string}): Promise<User> {
		return prisma.user.create({
			data: {
				...user,
				balance: 1000
			}
		})
	}

	async updateUserBalance(id: number, newBalance: number): Promise<User> {
		return prisma.user.update({
			where: {
				id,
			},
			data: {
				balance: newBalance
			}
		})
	}

	async getUserByPhoneRow(phoneRow: string): Promise<User | null | undefined> {
		try {
			const user = await prisma.user.findUnique({
				where: {
					phoneRow,
				}
			});
			if (!user) {
				return null;
			}
			return user;
		} catch (e) {
			console.error(e)
		}
	}

	async getUserById(id: number): Promise<User | null | undefined>{
		try {
			const user: User | null = await prisma.user.findUnique({
				where: {
					id,
				}
			});
			if (!user) {
				return null;
			}
			return user;
		} catch (e) {
			console.error(e)
		}
	}
}

export default new UserService()
