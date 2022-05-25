import { useMutation } from "react-query";
import {
  forgotPasswordChangePassword,
  ForgotPasswordChangePasswordParams,
} from "../../services/auth.service";

function useForgotPasswordChangePassword() {
  const {
    mutateAsync: changePassword,
    isLoading: loading,
    error,
  } = useMutation(
    ({
      email,
      password,
      passwordConfirm,
    }: ForgotPasswordChangePasswordParams) =>
      forgotPasswordChangePassword({ email, password, passwordConfirm })
  );
  return {
    changePassword,
    loading,
    error: error as any,
  };
}

export default useForgotPasswordChangePassword;
