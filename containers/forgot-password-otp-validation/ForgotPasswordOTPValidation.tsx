import React, { useState, useCallback } from "react";
import { ValidateOTP } from "..";
import { useForgotPasswordSendOTP, useForgotPasswordVerifyOTP, } from "../../hooks";

type ForgotPasswordOTPValidationProps = {
  forgotPasswordState: any;
  onBack?: () => void;
  onSubmit?: (value: any) => void;
};

const ForgotPasswordOTPValidation: React.FC<
  ForgotPasswordOTPValidationProps
> = ({ forgotPasswordState, onSubmit, onBack }) => {
  const { sendOTP, loading: isResendingOTP } = useForgotPasswordSendOTP();
  const { verifyOTP, loading, data } = useForgotPasswordVerifyOTP((result) => {
    if (result?.res_code === "00") onSubmit?.(forgotPasswordState);
  });

  const handleResendOTP = useCallback(async () => {
    try {
      await sendOTP({
        email: forgotPasswordState.email,
      });
    } catch (error) {
      console.log(error)
    }
  }, [forgotPasswordState?.email]);

  const handleSubmitOTP = useCallback(
    async (otp: string) => {
      const verifyParams = {
        email: forgotPasswordState?.email,
        otpCode: otp,
      };
      await verifyOTP(verifyParams);
    },
    [forgotPasswordState, verifyOTP]
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

ForgotPasswordOTPValidation.defaultProps = {};

export default ForgotPasswordOTPValidation;
