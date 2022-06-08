import { useMutation } from "react-query";
import {
  registerSendOTP,
  RegisterSendOTPParams,
} from "../../services/auth.service";

function useRegisterSendOTP(onSuccess?: (result: any) => void) {
  const {
    mutateAsync: sendOTP,
    isLoading: loading,
    error,
    data,
  } = useMutation(({ email, promoCodeReferral, tokenCaptcha }: RegisterSendOTPParams) =>
    registerSendOTP({ email, promoCodeReferral, tokenCaptcha })
  );
  return {
    sendOTP,
    loading,
    data,
    error: error as any,
  };
}

export default useRegisterSendOTP;
