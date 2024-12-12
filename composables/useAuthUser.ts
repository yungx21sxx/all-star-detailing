import type {UserAuthResponse} from "~/types/response";

export const useAuthUser = () => {
    return useState<UserAuthResponse | null>("user", () => null);
};
