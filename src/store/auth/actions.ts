import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { loginUserApi, registerUserApi } from '@/api/auth';
import {
  getStoredAuthSession,
  setStoredAuthSession,
} from '@/utils/authSessionStorage';

import type {
  AuthResponseModel,
  AuthSessionModel,
  LoginCredentialsModel,
  RegisterCredentialsModel,
} from '@/api/authModel';
import type { AuthRejectModel } from './model';

const getApiErrorMessage = (error: unknown, fallbackMessage: string): string => {
  if (axios.isAxiosError(error)) {
    const responseData = error.response?.data as { message?: string } | undefined;

    return responseData?.message || error.message || fallbackMessage;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return fallbackMessage;
};

const isRequiredAuthFieldEmpty = (values: Record<string, string>): boolean =>
  Object.values(values).some((value) => value.trim().length === 0);

export const checkInitialSession = createAsyncThunk<AuthSessionModel>(
  'auth/checkInitialSession',
  async () => getStoredAuthSession()
);

export const loginUser = createAsyncThunk<
  AuthResponseModel,
  LoginCredentialsModel,
  { rejectValue: AuthRejectModel }
>('auth/loginUser', async (credentials, { rejectWithValue }) => {
  if (isRequiredAuthFieldEmpty(credentials)) {
    return rejectWithValue({
      type: 'validationError',
      message: 'Заполните email и пароль',
    });
  }

  try {
    const response = await loginUserApi(credentials);

    setStoredAuthSession(response);

    return response;
  } catch (error) {
    return rejectWithValue({
      type: 'authError',
      message: getApiErrorMessage(error, 'Ошибка входа'),
    });
  }
});

export const registerUser = createAsyncThunk<
  AuthResponseModel,
  RegisterCredentialsModel,
  { rejectValue: AuthRejectModel }
>('auth/registerUser', async (credentials, { rejectWithValue }) => {
  if (isRequiredAuthFieldEmpty(credentials)) {
    return rejectWithValue({
      type: 'validationError',
      message: 'Заполните имя, email и пароль',
    });
  }

  try {
    const response = await registerUserApi(credentials);

    setStoredAuthSession(response);

    return response;
  } catch (error) {
    return rejectWithValue({
      type: 'authError',
      message: getApiErrorMessage(error, 'Ошибка регистрации'),
    });
  }
});
