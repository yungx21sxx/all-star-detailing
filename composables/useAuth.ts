import { useAuthUser } from "./useAuthUser";
import type {AdminLoginDTO, UserLoginDTO} from "~/types/dto";
import type {UserAuthResponse, UserResponse} from "~/types/response";

export const useAuth = () => {
    const authUser = useAuthUser();

    const setUser = (user: UserAuthResponse | null) => {
        authUser.value = user;
    };

    const getUserById = async (userId: number): Promise<UserResponse> => {
        try {
            const user = await $fetch(`/api/user/${userId}`)
            return user;
        } catch (e) {
            throw new Error(e.message)
        }
    }

    const setCookie = (cookie: any) => {
        cookie.value = cookie;
    };

    const login = async (
        dto: UserLoginDTO | AdminLoginDTO,
        role: 'ADMIN' | 'USER'
    ): Promise<UserAuthResponse | null> => {
        const user = await $fetch(
            role === 'ADMIN' ? '/api/admin/login' : '/api/user/login',
            {
                method: "POST",
                body: dto,
            });
        setUser(user);
        return authUser.value;
    };

    const logout = async () => {
        const data = await $fetch("/api/auth/logout", {
            method: "get",
        });
        setUser(null);
    };

    const me = async () => {
        if (!authUser.value) {
            try {
                const data = await $fetch("/api/auth/me", {
                    headers: useRequestHeaders(["cookie"]) as HeadersInit,
                });
                setUser(data);
            } catch (error) {
                setUser(null);
            }
        }

        return authUser;
    };

    return {
        login,
        logout,
        me,
        getUserById,
        setUser
    };
};
