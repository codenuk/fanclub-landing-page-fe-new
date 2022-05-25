import React, { useCallback, useEffect, useRef, useState } from "react";
import { OTPInput, OTPInputWrapper } from "./otpInput.styles";

type OtpInputProps = {
  defaultValue?: string;
  onChange?: (value: string) => void;
};

const OtpInput: React.FC<OtpInputProps> = ({ defaultValue, onChange }) => {
  const [otp, setOtp] = useState<string>("");

  const handleOTPChange = useCallback((e: any) => {
    const value = e.target.value;
    if (value.length <= 6) {
      setOtp(value.replace(/([0-9]{6})(.*)/, "$1"));
    }
  }, []);

  useEffect(() => {
    onChange?.(otp);
  }, [onChange, otp]);

  return (
    <OTPInputWrapper>
      <OTPInput
        type="number"
        autoComplete="one-time-code"
        value={otp}
        onChange={handleOTPChange}
      />
    </OTPInputWrapper>
  );
};

OtpInput.defaultProps = {
  onChange() {},
};

export default OtpInput;
