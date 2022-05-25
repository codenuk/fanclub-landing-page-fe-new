import { Alert, Button, CircularProgress, Typography } from "@mui/material";
import React, { useCallback, useMemo, useState } from "react";
import { ContentWrapper, OtpInput } from "../../components";
import {
  contentWrapperStyles,
  OTPInputWrapper,
  ValidateOTPWrapper,
} from "./validateOtp.styles";

type ValidateOTPProps = {
  loading?: boolean;
  resending?: boolean;
  errorMessage?: string;
  onResendOTP?: () => void;
  onBack?: () => void;
  onSubmit?: (value: any) => void;
};

const ValidateOTP: React.FC<ValidateOTPProps> = ({
  loading,
  resending,
  errorMessage,
  onResendOTP,
  onBack,
  onSubmit,
}) => {
  const [otp, setOTP] = useState("");

  const handleOTPChange = useCallback((value: string) => {
    setOTP(value);
  }, []);

  const isValidOTP = useMemo(() => otp?.length === 6, [otp?.length]);

  const handleSubmit = useCallback(() => {
    onSubmit?.(otp);
  }, [onSubmit, otp]);

  return (
    <ValidateOTPWrapper>
      <ContentWrapper sx={contentWrapperStyles}>
        <Typography variant="h4">Confirm OTP via Email</Typography>
        <Typography variant="caption">OTP (6 Digit)</Typography>
        <OTPInputWrapper>
          {loading ? (
            <CircularProgress />
          ) : (
            <OtpInput defaultValue={otp} onChange={handleOTPChange} />
          )}
        </OTPInputWrapper>

        <Button
          sx={{
            width: {
              xs: "100%",
              lg: "200px",
            },
          }}
          disabled={!isValidOTP || loading}
          onClick={handleSubmit}
        >
          Confirm
        </Button>
        {resending ? (
          <CircularProgress size={24} />
        ) : (
          <Button
            sx={{ color: (theme) => theme.palette.info.main }}
            variant="text"
            onClick={onResendOTP}
          >
            Resend OTP to email
          </Button>
        )}
        <Button
          sx={{
            width: {
              xs: "100%",
              lg: "200px",
            },
          }}
          color="inherit"
          variant="contained"
          onClick={onBack}
        >
          Back
        </Button>
        {errorMessage && (
          <Alert sx={{ marginTop: 4 }} severity="error">
            {errorMessage}
          </Alert>
        )}
      </ContentWrapper>
    </ValidateOTPWrapper>
  );
};

ValidateOTP.defaultProps = {
  onSubmit() {},
};

export default ValidateOTP;
