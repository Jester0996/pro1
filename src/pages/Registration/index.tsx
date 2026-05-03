import { FormEvent, useState } from "react";
import { CircularProgress } from "@mui/material";
import { Check, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

import { routes } from "@/routes";
import { registerUser } from "@/store/auth/actions";
import {
  selectAuthError,
  selectIsAuth,
  selectIsLoading,
  selectUser,
  selectValidationError,
} from "@/store/auth/selectors";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { validatePassword } from "@/utils/validations";

import "./style.scss";

interface RuleProps {
  ok: boolean;
  text: string;
}

const Rule = ({ ok, text }: RuleProps) => (
  <div className={`rule ${ok ? "ok" : ""}`}>
    <Check size={14} />
    {text}
  </div>
);

const Registration = () => {
  const dispatch = useAppDispatch();

  const isAuth = useAppSelector(selectIsAuth);
  const user = useAppSelector(selectUser);
  const isLoading = useAppSelector(selectIsLoading);
  const authError = useAppSelector(selectAuthError);
  const validationError = useAppSelector(selectValidationError);

  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validation = validatePassword(password);
  const error = validationError || authError;

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(
      registerUser({
        name,
        login: email,
        password,
      }),
    );
  };

  return (
    <div className="auth-layout">
      <div className="auth-card-wrapper">
        <form className="auth-card" onSubmit={onSubmit}>
          {isLoading && <CircularProgress />}

          <h1>Регистрация</h1>

          {error && <div className="error-message">Ошибка: {error}</div>}

          {isAuth && (
            <div className="success-message">
              <p>Авторизован!</p>
              <p>
                Логин: <strong>{user?.login}</strong>
              </p>
              <p>ID: {user?.id}</p>
            </div>
          )}

          <input
            name="name"
            placeholder="Имя"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

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

          <div className="rules">
            <Rule ok={validation.length} text="Не менее 8 символов" />
            <Rule ok={validation.uppercase} text="Минимум 1 заглавная буква" />
            <Rule ok={validation.number} text="Минимум 1 цифра" />
            <Rule ok={validation.special} text="Минимум 1 спец символ" />
          </div>

          <p className="terms">
            Регистрируясь, вы соглашаетесь с нашими <span>Условиями</span> и{" "}
            <span>Политикой конфиденциальности</span>
          </p>

          <button type="submit" className="primary" disabled={isLoading}>
            {isLoading ? "Регистрация..." : "РЕГИСТРАЦИЯ"}
          </button>

          <p className="switch">
            Уже есть аккаунт? <Link to={routes().login}>Войти</Link>
          </p>
        </form>

        <div className="auth-image" />
      </div>
    </div>
  );
};

export default Registration;
