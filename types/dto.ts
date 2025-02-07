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

export interface PortfolioPhotoConnectDTO {
	urlMin: string;
	photoId: number;
	position: number;
}

export interface PortfolioAppendDTO {
	name: string,
	description: string,
	date: Date,
	photos: PortfolioPhotoConnectDTO[],
}

export interface PortfolioItemUpdateDTO extends PortfolioAppendDTO { id: number };