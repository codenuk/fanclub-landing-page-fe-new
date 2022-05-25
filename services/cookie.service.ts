import Cookies from "js-cookie";

const TOKEN_KEY = "____nft-token";
const ACCESS_TOKEN_KEY = `${TOKEN_KEY}_access`;
const REFRESH_TOKEN_KEY = `${TOKEN_KEY}_refresh`;

export const setToken = (token: string): void => {
  Cookies.set(TOKEN_KEY, token);
};

export const setAccessToken = (token: string): void => {
  Cookies.set(ACCESS_TOKEN_KEY, token);
};

export const setRefreshToken = (token: string): void => {
  Cookies.set(REFRESH_TOKEN_KEY, token);
};

export const getAccessToken = (): string | undefined => {
  return Cookies.get(ACCESS_TOKEN_KEY);
};

export const getRefreshToken = (): string | undefined => {
  return Cookies.get(REFRESH_TOKEN_KEY);
};

export const resetToken = (): void => {
  Cookies.remove(ACCESS_TOKEN_KEY);
  Cookies.remove(REFRESH_TOKEN_KEY);
};
