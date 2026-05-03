import { createSlice } from "@reduxjs/toolkit";

import { checkInitialSession, loginUser, registerUser } from "./actions";
import { mapAuthResponseToUserModel } from "./model";

import type { AuthRejectModel, AuthStateModel } from "./model";

const initialState: AuthStateModel = {
  user: null,
  isLoading: false,
  authError: null,
  validationError: null,
  isInitialSessionPending: true,
};

const setRejectedError = (
  state: AuthStateModel,
  payload: AuthRejectModel | undefined,
  fallbackMessage: string,
) => {
  if (!payload) {
    state.authError = fallbackMessage;
    return;
  }

  state[payload.type] = payload.message;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.authError = null;
      state.validationError = null;
    },
    clearAuthError: (state) => {
      state.authError = null;
    },
    clearValidationError: (state) => {
      state.validationError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkInitialSession.pending, (state) => {
        state.isInitialSessionPending = true;
      })
      .addCase(checkInitialSession.fulfilled, (state, action) => {
        state.user = action.payload
          ? mapAuthResponseToUserModel(action.payload)
          : null;
        state.isInitialSessionPending = false;
      })
      .addCase(checkInitialSession.rejected, (state) => {
        state.user = null;
        state.isInitialSessionPending = false;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.authError = null;
        state.validationError = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = mapAuthResponseToUserModel(action.payload);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        setRejectedError(state, action.payload, "Ошибка входа");
      })
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.authError = null;
        state.validationError = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = mapAuthResponseToUserModel(action.payload);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        setRejectedError(state, action.payload, "Ошибка регистрации");
      });
  },
});

export const { clearAuthError, clearValidationError, logout } =
  authSlice.actions;

export default authSlice.reducer;
