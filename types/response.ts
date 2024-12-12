export interface UserAuthResponse {
	userId: number,
	role: 'ADMIN' | 'USER'
}

export interface CreateOtpResponse {
	phoneRow: string
}

export interface UserResponse {
	id: number;
	phone: string;
	phoneRow: string;
	name: string | null;
	createdAt: Date;
	balance: number;
}