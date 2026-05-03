import { createSelector } from "@reduxjs/toolkit";

import type { RootState } from "../index";

export const selectAuth = (state: RootState) => state.auth;

export const selectUser = (state: RootState) => state.auth.user;

export const selectIsAuth = createSelector(
  [selectUser],
  (user) => user !== null,
);

export const selectIsLoading = (state: RootState) => state.auth.isLoading;

export const selectAuthError = (state: RootState) => state.auth.authError;

export const selectValidationError = (state: RootState) =>
  state.auth.validationError;

export const selectIsInitialSessionPending = (state: RootState) =>
  state.auth.isInitialSessionPending;
