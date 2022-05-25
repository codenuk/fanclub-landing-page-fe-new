import { useMutation } from "react-query";
import { login as loginFetch, LoginParams } from "../../services/auth.service";

import { client } from "../../configs/apollo";
import { GET_USER_INFO } from "../../queries/user-profile.queries";

function useLogin(onSuccess?: (data: any) => void) {
  const {
    mutateAsync: login,
    isLoading: loading,
    error,
    data,
  } = useMutation(
    ({ email, password }: LoginParams) => loginFetch({ email, password }),
    {
      onSuccess: (result) => {
        onSuccess?.(result);
        setTimeout(() => {
          client.refetchQueries({ include: [GET_USER_INFO] });
        }, 100);
      },
    }
  );
  return {
    login,
    data,
    loading,
    error: error as any,
  };
}

export default useLogin;
