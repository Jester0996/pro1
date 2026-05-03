import {
  EMAIL_PATTERN,
  INN_PATTERN,
  KPP_PATTERN,
  OGRN_PATTERN,
  PASSWORD_MIN_LENGTH,
  PASSWORD_NUMBER_PATTERN,
  PASSWORD_SPECIAL_PATTERN,
  PASSWORD_UPPERCASE_PATTERN,
  PHONE_PATTERN,
} from '@/variables/globalVariables';

export interface PasswordValidationModel {
  length: boolean;
  uppercase: boolean;
  number: boolean;
  special: boolean;
}

export const validatePassword = (password: string): PasswordValidationModel => ({
  length: password.length >= PASSWORD_MIN_LENGTH,
  uppercase: PASSWORD_UPPERCASE_PATTERN.test(password),
  number: PASSWORD_NUMBER_PATTERN.test(password),
  special: PASSWORD_SPECIAL_PATTERN.test(password),
});

export const validateEmail = (email: string): boolean => EMAIL_PATTERN.test(email);

export const validatePhone = (phone: string): boolean => PHONE_PATTERN.test(phone);

export const validateInn = (inn: string): boolean => INN_PATTERN.test(inn);

export const validateKpp = (kpp: string): boolean => KPP_PATTERN.test(kpp);

export const validateOgrn = (ogrn: string): boolean => OGRN_PATTERN.test(ogrn);
