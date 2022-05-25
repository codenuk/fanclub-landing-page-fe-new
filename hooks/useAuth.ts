import { useCallback, useState } from "react";
import { useQuery } from "react-query";
import { queryClient } from "../configs/react-query";
import {
  getAccessToken,
  resetToken,
  setAccessToken,
  setRefreshToken,
} from "../services/cookie.service";

export const AUTH_QUERY_KEY = "AUTH_QUERY";

export interface AuthState {
  isAuth: boolean;
}

const initialState = {
  isAuth: false,
};

function useAuth() {
  const [isInit, setIsInit] = useState(false);
  const { data } = useQuery(
    AUTH_QUERY_KEY,
    () => {
      const token = getAccessToken();
      const isAuth = !!token;
      return Promise.resolve({ isAuth });
    },
    {
      onSuccess: () => {
        if (!isInit) {
          setIsInit(true);
        }
      },
      initialData: initialState,
    }
  );

  const setTokens = useCallback((accessToken: string, refreshToken: string) => {
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    queryClient.invalidateQueries([AUTH_QUERY_KEY]);
  }, []);

  const clearToken = useCallback(() => {
    resetToken();
    queryClient.invalidateQueries([AUTH_QUERY_KEY]);
  }, []);

  const logOut = useCallback(() => {
    resetToken();
    queryClient.setQueryData(AUTH_QUERY_KEY, {
      isAuth: false,
    });
  }, []);

  return { isAuth: data?.isAuth, isInit, setTokens, logOut, clearToken };
}

export default useAuth;
