export interface AuthResponseModel {
  id: number;
  login: string;
  token: string;
  name?: string;
}

export interface LoginCredentialsModel {
  login: string;
  password: string;
}

export interface RegisterCredentialsModel {
  name: string;
  login: string;
  password: string;
}

export type AuthSessionModel = AuthResponseModel | null;
