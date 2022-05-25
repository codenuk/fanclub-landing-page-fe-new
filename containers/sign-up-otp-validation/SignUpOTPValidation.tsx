import React, { useCallback, useState } from "react";
import { ValidateOTP } from "..";
import { useRegisterVerifyOTP } from "../../hooks";
import { registerSendOTP } from "../../services";

type SignUpOTPValidationProps = {
  signUpState: any;
  onBack?: () => void;
  onSubmit?: (value: any) => void;
};

const SignUpOTPValidation: React.FC<SignUpOTPValidationProps> = ({
  signUpState,
  onSubmit,
  onBack,
}) => {
  const [isResendingOTP, setIsResendingOTP] = useState(false);
  const { verifyOTP, loading, data } = useRegisterVerifyOTP((result) => {
    if (result?.res_code === "00") {
      onSubmit?.({
        ...signUpState,
        tokenBalance: result?.tokenBalance,
      });
    }
  });

  const handleResendOTP = useCallback(async () => {
    try {
      setIsResendingOTP(true);
      await registerSendOTP({
        email: signUpState.email,
        promoCodeReferral: signUpState?.refCode,
      });
      setIsResendingOTP(false);
    } catch (error) {
      setIsResendingOTP(false);
    }
  }, [signUpState.email, signUpState?.refCode]);

  const handleSubmitOTP = useCallback(
    async (otp: string) => {
      const verifyParams = {
        email: signUpState.email,
        password: signUpState.password,
        name: signUpState.firstName,
        surname: signUpState.lastName,
        // phoneNumber: signUpState.phoneNumber,
        otpCode: otp,
        promoCodeReferral: signUpState?.refCode,
      };
      verifyOTP(verifyParams);
    },
    [signUpState, verifyOTP]
  );

  const errorMessage = data?.res_code !== "00" ? data?.res_desc : "";

  return (
    <ValidateOTP
      errorMessage={errorMessage}
      loading={loading}
      resending={isResendingOTP}
      onSubmit={handleSubmitOTP}
      onBack={onBack}
      onResendOTP={handleResendOTP}
    />
  );
};

SignUpOTPValidation.defaultProps = {};

export default SignUpOTPValidation;
