import { useMutation } from "react-query";
import {
  forgotPasswordVerifyOTP,
  ForgotPasswordVerifyOTPParams,
} from "../../services/auth.service";

function useForgotPasswordVerifyOTP(
  onSuccess?: (result: any) => void,
  onError?: (error: any) => void
) {
  const {
    mutateAsync: verifyOTP,
    isLoading: loading,
    error,
    data,
  } = useMutation(
    (params: ForgotPasswordVerifyOTPParams) => forgotPasswordVerifyOTP(params),
    {
      onSuccess: (result) => {
        onSuccess?.(result);
      },
      onError: (error: any) => {
        onError?.(error);
      },
    }
  );
  return {
    data,
    verifyOTP,
    loading,
    error: error as any,
  };
}

export default useForgotPasswordVerifyOTP;
