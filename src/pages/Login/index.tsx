import { FormEvent, useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { routes } from "@/routes";
import { loginUser } from "@/store/auth/actions";
import {
  selectAuthError,
  selectIsAuth,
  selectIsLoading,
  selectUser,
  selectValidationError,
} from "@/store/auth/selectors";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

import "./style.scss";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const user = useAppSelector(selectUser);
  const isAuth = useAppSelector(selectIsAuth);
  const isLoading = useAppSelector(selectIsLoading);
  const authError = useAppSelector(selectAuthError);
  const validationError = useAppSelector(selectValidationError);

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isAuth) {
      navigate(routes().home);
    }
  }, [isAuth, navigate]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(
      loginUser({
        login: email,
        password,
      }),
    );
  };

  const error = validationError || authError;

  return (
    <div className="auth-layout">
      <div className="auth-card-wrapper">
        <form className="auth-card" onSubmit={onSubmit}>
          <h1>Авторизация</h1>

          {error && <div className="error-message">Ошибка: {error}</div>}

          {isAuth && (
            <div className="success-message">
              <p>Добро пожаловать, {user?.login}!</p>
            </div>
          )}

          <input
            name="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <div className="password-field">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Пароль"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword((currentValue) => !currentValue)}
              aria-label={showPassword ? "Скрыть пароль" : "Показать пароль"}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button type="submit" className="primary" disabled={isLoading}>
            {isLoading ? "Входим..." : "Войти"}
          </button>

          <p className="switch">
            Нет аккаунта? <Link to={routes().register}>Создать аккаунт</Link>
          </p>
        </form>

        <div className="auth-image" />
      </div>
    </div>
  );
};

export default Login;
