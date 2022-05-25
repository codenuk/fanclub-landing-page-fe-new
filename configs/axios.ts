import axiosBase, { AxiosRequestHeaders } from "axios";
import { getAccessToken, resetToken } from "../services/cookie.service";

const endpoint = process.env["NEXT_PUBLIC_API_ENDPOINT"];

const NOT_AUTH_ENDPOINT = ["/auth/login"];

const axiosInstance = axiosBase.create({
  baseURL: endpoint,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    const isRequireToken = config?.url
      ? !NOT_AUTH_ENDPOINT.includes(config.url)
      : false;

    const authenHeaders: Partial<AxiosRequestHeaders> =
      token && isRequireToken
        ? {
            Authorization: `Bearer ${token}`,
          }
        : {};

    config.headers = {
      ...config.headers,
      ...authenHeaders,
    } as any;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const excludeErrorCheckPath = ["/auth/login"];

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    let errorResponse;
    if (error.response) {
      if (
        error.response.status === 401 &&
        !excludeErrorCheckPath.includes(error.config.url)
      ) {
        // TODO: add refresh token case

        resetToken();
        window.location.href = "/";
      }
      errorResponse = {
        status: error.response.status,
        data: error.response.data,
      };
    } else if (error.request) {
      errorResponse = { status: 500, data: "Server is out of reach" };
    } else {
      errorResponse = { status: 500, data: "axiosInstance error" };
    }

    return Promise.reject(errorResponse);
  }
);

export { axiosInstance };
