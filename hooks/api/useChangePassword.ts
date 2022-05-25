import { useMutation } from "@apollo/client";
import { useCallback } from "react";
import { CHANGE_PASSWORD } from "../../queries/user-profile.queries";

export interface ChangePasswordParams {
  passwordOld: string;
  passwordNew: string;
  passwordConfirm: string;
}

function useChangePassword(onSuccess?: () => void) {
  const [mutate, { data, loading, error }] = useMutation(CHANGE_PASSWORD, {
    onCompleted: () => {
      onSuccess?.();
    },
  });
  
  const changePassword = useCallback(
    ({ passwordOld, passwordNew, passwordConfirm }: ChangePasswordParams) => {
      mutate({
        variables: {
          input: {
            passwordOld,
            passwordNew,
            passwordConfirm,
          },
        },
      });
    },
    [mutate]
  );

  return {
    changePassword,
    data,
    loading,
    error,
  };
}

export default useChangePassword;
