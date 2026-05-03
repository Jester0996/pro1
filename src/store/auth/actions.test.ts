import { configureStore } from "@reduxjs/toolkit";

import { loginUserApi, registerUserApi } from "@/api/auth";

import { loginUser, registerUser } from "./actions";
import authReducer from "./index";

jest.mock("@/api/auth");

const mockLoginUserApi = loginUserApi as jest.MockedFunction<
  typeof loginUserApi
>;
const mockRegisterUserApi = registerUserApi as jest.MockedFunction<
  typeof registerUserApi
>;

const createTestStore = () =>
  configureStore({
    reducer: { auth: authReducer },
  });

describe("auth actions", () => {
  let store: ReturnType<typeof createTestStore>;

  beforeEach(() => {
    store = createTestStore();
    jest.clearAllMocks();
  });

  describe("loginUser", () => {
    const credentials = { login: "test@test.com", password: "123456" };
    const mockResponse = { id: 1, login: "test@test.com", token: "token123" };

    it("должен залогинить при правильных данных", async () => {
      mockLoginUserApi.mockResolvedValue(mockResponse);

      await store.dispatch(loginUser(credentials));

      const state = store.getState().auth;

      expect(state.user).toEqual(mockResponse);
      expect(state.isLoading).toBe(false);
      expect(state.authError).toBe(null);
      expect(state.validationError).toBe(null);
    });

    it("должен вернуть authError при неверных данных", async () => {
      mockLoginUserApi.mockRejectedValue(new Error("Неверный пароль"));

      await store.dispatch(loginUser(credentials));

      const state = store.getState().auth;

      expect(state.user).toBe(null);
      expect(state.isLoading).toBe(false);
      expect(state.authError).toBe("Неверный пароль");
    });

    it("должен вернуть validationError при пустых данных", async () => {
      await store.dispatch(loginUser({ login: "", password: "" }));

      const state = store.getState().auth;

      expect(state.user).toBe(null);
      expect(state.validationError).toBe("Заполните email и пароль");
    });
  });

  describe("registerUser", () => {
    const credentials = {
      name: "Test User",
      login: "test@test.com",
      password: "123456",
    };
    const mockResponse = {
      id: 1,
      login: "test@test.com",
      token: "token123",
      name: "Test User",
    };

    it("должен зарегистрировать при правильных данных", async () => {
      mockRegisterUserApi.mockResolvedValue(mockResponse);

      await store.dispatch(registerUser(credentials));

      const state = store.getState().auth;

      expect(state.user).toEqual(mockResponse);
      expect(state.isLoading).toBe(false);
      expect(state.authError).toBe(null);
    });

    it("должен вернуть authError при неудачной регистрации", async () => {
      mockRegisterUserApi.mockRejectedValue(new Error("Email уже существует"));

      await store.dispatch(registerUser(credentials));

      const state = store.getState().auth;

      expect(state.user).toBe(null);
      expect(state.authError).toBe("Email уже существует");
    });
  });
});
