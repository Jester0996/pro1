export const API_BASE_URL =
  import.meta.env.VITE_CORE_URL || "https://test.0cd.dtpool.ru/api";

export const PASSWORD_MIN_LENGTH = 8;

export const PASSWORD_UPPERCASE_PATTERN = /[A-Z]/;
export const PASSWORD_NUMBER_PATTERN = /\d/;
export const PASSWORD_SPECIAL_PATTERN = /[!@#$%^&*]/;

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PHONE_PATTERN = /^\+7\s?\(\d{3}\)\s?\d{3}-\d{2}-\d{2}$/;
export const INN_PATTERN = /^\d{10}$|^\d{12}$/;
export const KPP_PATTERN = /^\d{9}$/;
export const OGRN_PATTERN = /^\d{13}$|^\d{15}$/;
