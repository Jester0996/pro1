import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Check } from "lucide-react";
import "./style.scss";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const validation = {
    length: form.password.length >= 8,
    uppercase: /[A-Z]/.test(form.password),
    number: /\d/.test(form.password),
    special: /[!@#$%^&*]/.test(form.password),
  };

  const isFormValid =
    Object.values(validation).every(Boolean) &&
    form.name &&
    form.email;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="auth-layout">
      <div className="auth-card-wrapper">
        {/* LEFT */}
        <form className="auth-card">
          <h1>Регистрация</h1>

          <input name="name" placeholder="Имя" onChange={handleChange} />
          <input name="email" placeholder="Email" onChange={handleChange} />

          <div className="password-field">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Пароль"
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
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

          <button disabled={!isFormValid} className="primary">
            РЕГИСТРАЦИЯ
          </button>

          <p className="switch">
            Уже есть аккаунт? <Link to="/login">Войти</Link>
          </p>
        </form>

        {/* RIGHT */}
        <div className="auth-image" />
      </div>
    </div>
  );
};

const Rule = ({ ok, text }: { ok: boolean; text: string }) => (
  <div className={`rule ${ok ? "ok" : ""}`}>
    <Check size={14} />
    {text}
  </div>
);

export default Registration;