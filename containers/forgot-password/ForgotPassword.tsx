import { Button, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { ContentWrapper, LoadingModal } from "../../components";
import { ForgotPasswordSchema } from "../../form-validators";
import { useForgotPasswordSendOTP, useFormikUtils } from "../../hooks";
import {
  contentWrapperStyles,
  ForgotPasswordWrapper,
  EmailField,
  ForgotPasswordFormWrapper,
} from "./forgotPassword.styles";

export interface ForgotPasswordFormData {
  email: string;
}

const initialFormValues = {
  email: "",
};

type ForgotPasswordProps = {
  onSubmit?: (value: ForgotPasswordFormData) => void;
};

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ onSubmit }) => {
  const router = useRouter();
  const { sendOTP, loading, error } = useForgotPasswordSendOTP();
  const { handleChange, handleSubmit, values, errors, setFieldError } = useFormik({
    initialValues: initialFormValues,
    validationSchema: ForgotPasswordSchema,
    onSubmit: async (value: ForgotPasswordFormData) => {
      const res = await sendOTP({
        email: value.email,
      });
      if (res.res_code === '00') return onSubmit?.(value);
      else {
        setFieldError("email", res.res_desc)
      }
    },
  });

  const { textFieldProps } = useFormikUtils({
    handleChange,
    values,
    errors,
  });

  const handleBack = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <ForgotPasswordWrapper>
      <LoadingModal open={loading} />
      <ContentWrapper sx={contentWrapperStyles}>
        <Typography variant="h4">ลืมรหัสผ่าน</Typography>
        <Typography variant="body1">
          ระบบจะทำการส่งรหัสผ่านใหม่ให้ทางอีเมล
        </Typography>
        <ForgotPasswordFormWrapper onSubmit={handleSubmit}>
          <EmailField
            fullWidth
            variant="filled"
            label="Email"
            placeholder="Email@mail.com"
            InputLabelProps={{ shrink: true }}
            {...textFieldProps("email")}
            error={!!error?.data?.message || textFieldProps("email").error}
            helperText={
              error?.data?.message || textFieldProps("email").helperText
            }
          />
          <Button type="submit" size="large">
            Send OTP to your email
          </Button>
        </ForgotPasswordFormWrapper>
        <Button variant="text" onClick={handleBack}>
          Back
        </Button>
      </ContentWrapper>
    </ForgotPasswordWrapper>
  );
};

ForgotPassword.defaultProps = {
  onSubmit() {},
};

export default ForgotPassword;
