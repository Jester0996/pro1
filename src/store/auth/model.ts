import type { AuthResponseModel } from "@/api/authModel";

export interface UserModel {
  id: number;
  login: string;
  token: string;
  name?: string;
}

export type AuthRejectTypeModel = "authError" | "validationError";

export interface AuthRejectModel {
  type: AuthRejectTypeModel;
  message: string;
}

export interface AuthStateModel {
  user: UserModel | null;
  isLoading: boolean;
  authError: string | null;
  validationError: string | null;
  isInitialSessionPending: boolean;
}

export const mapAuthResponseToUserModel = (
  response: AuthResponseModel,
): UserModel => ({
  id: response.id,
  login: response.login,
  token: response.token,
  name: response.name,
});
