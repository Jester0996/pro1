import type { AuthSessionModel } from '@/api/authModel';

const AUTH_STORAGE_KEY = 'authUser';

export const getStoredAuthSession = (): AuthSessionModel => {
  const storedUser = localStorage.getItem(AUTH_STORAGE_KEY);

  if (!storedUser) {
    return null;
  }

  return JSON.parse(storedUser) as AuthSessionModel;
};

export const setStoredAuthSession = (session: AuthSessionModel): void => {
  if (!session) {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    return;
  }

  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));
};

export const clearStoredAuthSession = (): void => {
  localStorage.removeItem(AUTH_STORAGE_KEY);
};
