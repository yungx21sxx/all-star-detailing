import type { ComputedRef } from 'vue';

export const useAdmin = (): ComputedRef<boolean> => {
  const authUser = useAuthUser();

  return computed(() => {
    if (!authUser.value) return false;
    return authUser.value.role === 'ADMIN';
  });
};
