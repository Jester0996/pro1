import { configureStore } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import authReducer from "@/store/auth";

import Login from "./index";

import type { AuthStateModel } from "@/store/auth/model";

const createMockStore = (initialState?: Partial<AuthStateModel>) =>
  configureStore({
    reducer: { auth: authReducer },
    preloadedState: {
      auth: {
        user: null,
        isLoading: false,
        authError: null,
        validationError: null,
        isInitialSessionPending: false,
        ...initialState,
      },
    },
  });

describe("Login Page", () => {
  it("должен отображать форму входа", () => {
    const store = createMockStore();

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Пароль")).toBeInTheDocument();
    expect(screen.getByText("Войти")).toBeInTheDocument();
  });

  it("должен показывать ошибку авторизации", () => {
    const store = createMockStore({ authError: "Неверный пароль" });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText("Ошибка: Неверный пароль")).toBeInTheDocument();
  });
});
