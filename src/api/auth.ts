import axios from 'axios';

import { API_BASE_URL } from '@/variables/globalVariables';

import type {
  AuthResponseModel,
  LoginCredentialsModel,
  RegisterCredentialsModel,
} from './authModel';

const apiClient = axios.create({ baseURL: API_BASE_URL });

export const loginUserApi = async (
  credentials: LoginCredentialsModel
): Promise<AuthResponseModel> => {
  const { data } = await apiClient.post('/auth/authentication/login', credentials);

  return data;
};

export const registerUserApi = async (
  credentials: RegisterCredentialsModel
): Promise<AuthResponseModel> => {
  const { data } = await apiClient.post('/auth/authentication/signup', credentials);

  return data;
};
