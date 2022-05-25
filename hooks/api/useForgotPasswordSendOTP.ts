import { useMutation } from "react-query";
import {
  forgotPasswordSendOTP,
  ForgotPasswordSendOTPParams,
} from "../../services/auth.service";

function useForgotPasswordSendOTP() {
  const {
    mutateAsync: sendOTP,
    isLoading: loading,
    error,
  } = useMutation(({ email
    // , phoneNumber
   }: ForgotPasswordSendOTPParams) =>
    forgotPasswordSendOTP({ email, 
      // phoneNumber
     })
  );
  return {
    sendOTP,
    loading,
    error: error as any,
  };
}

export default useForgotPasswordSendOTP;
