export interface createOtpDTO {
	phoneRow: string,
}

export interface UserLoginDTO {
	phone: string,
	phoneRow: string,
	otp: number,
}

export interface UserCreateDTO {
	phone: string,
	phoneRow: string,
	balance: number
}

export interface AdminLoginDTO {
	login: string,
	password: string,
}

export interface SetBalanceDTO {
	userId: number,
	newBalance: number,
}

export interface PortfolioItemUpdateDTO {
	id: number,
	description: string,
	name: string
}

export interface PortfolioAppendDTO {
	name: string,
	description: string,
	photos: string[],
	img: string
}