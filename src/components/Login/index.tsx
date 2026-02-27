import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import "./style.scss";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const isValid = form.email && form.password;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="auth-layout">
      <div className="auth-card-wrapper">
        <form className="auth-card">
          <h1>Авторизация</h1>

          <input name="email" placeholder="Email" onChange={handleChange} />

          <div className="password-field">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Пароль"
              onChange={handleChange}
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <div className="forgot">
            <a href="#">Забыли пароль?</a>
          </div>

          <button disabled={!isValid} className="primary">
            Войти
          </button>

          <p className="switch">
            Нет аккаунта? <Link to="/register">Создать аккаунт</Link>
          </p>
        </form>

        <div className="auth-image" />
      </div>
    </div>
  );
};

export default Login;