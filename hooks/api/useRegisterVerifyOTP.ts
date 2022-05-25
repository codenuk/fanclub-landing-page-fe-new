import { useMutation } from "react-query";
import {
  registerVerifyOTP,
  RegisterVerifyOTPParams,
} from "../../services/auth.service";

function useRegisterVerifyOTP(
  onSuccess?: (result: any) => void,
  onError?: () => void
) {
  const {
    mutateAsync: verifyOTP,
    isLoading: loading,
    error,
    data,
  } = useMutation(
    (params: RegisterVerifyOTPParams) =>
      // TODO: password should be encrypt before passing to the api
      registerVerifyOTP(params),
    {
      onSuccess: (result) => {
        onSuccess?.(result);
      },
      onError: () => {
        onError?.();
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

export default useRegisterVerifyOTP;
