import { axiosInstance } from "../configs/axios";

export interface RegisterSendOTPParams {
  email: string;
  promoCodeReferral?: string;
}

export function registerSendOTP({
  email,
  promoCodeReferral,
}: RegisterSendOTPParams): Promise<any> {
  const _email = email.toLowerCase();
  return axiosInstance.post("/auth/register/send_otp", {
    email: _email,
    promoCodeReferral,
  });
}

export interface RegisterVerifyOTPParams {
  email: string;
  password: string;
  name: string;
  surname: string;
  // phoneNumber: string;
  otpCode: string;
}

export function registerVerifyOTP(data: RegisterVerifyOTPParams): Promise<any> {
  const _email = data.email.toLowerCase();
  data.email = _email;
  return axiosInstance.post("/auth/register/verify_otp", data);
}

export interface ForgotPasswordSendOTPParams {
  email: string;
  // phoneNumber?: string;
}

export function forgotPasswordSendOTP({
  email,
  // phoneNumber,
}: ForgotPasswordSendOTPParams): Promise<any> {
  const _email = email.toLowerCase();
  return axiosInstance.post("/auth/forgot_password/send_otp", {
    email: _email,
    // phoneNumber,
  });
}

export interface ForgotPasswordVerifyOTPParams {
  email: string;
  otpCode: string;
}

export function forgotPasswordVerifyOTP(
  data: ForgotPasswordVerifyOTPParams
): Promise<any> {
  const _email = data.email.toLowerCase();
  data.email = _email;
  return axiosInstance.post("/auth/forgot_password/verify_otp", data);
}

export interface LoginParams {
  email: string;
  password: string;
}

export function login({ email, password }: LoginParams): Promise<any> {
  const _email = email.toLowerCase();
  return axiosInstance.post("/auth/login", {
    email: _email,
    password,
    typeApplication: "FANCLUB",
  });
}

export interface ForgotPasswordChangePasswordParams {
  email: string;
  password: string;
  passwordConfirm: string;
}

export function forgotPasswordChangePassword(
  data: ForgotPasswordChangePasswordParams
): Promise<any> {
  const _email = data.email.toLowerCase();
  data.email = _email;
  return axiosInstance.post("/auth/forgot_password/change_password", data);
}

export function refreshToken(refreshToken: string): Promise<any> {
  return axiosInstance.post("/auth/refresh_token", {
    refreshToken: `${refreshToken}`,
  });
}

export function validateEmail(
  email: string,
  promoCodeReferral: string
): Promise<any> {
  return axiosInstance.post("/auth/register/check_info_create_new_account", {
    email,
    promoCodeReferral,
  });
}
