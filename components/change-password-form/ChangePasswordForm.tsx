import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useMemo } from "react";
import { PasswordField } from "..";
import { ForgotPasswordChangePasswordSchema } from "../../form-validators";
import { useFormikUtils } from "../../hooks";
import { PasswordRequirement } from "../password-requirement";
import {
  ChangePasswordActionWrapper,
  ChangePasswordFormWrapper,
} from "./changePasswordForm.styles";

export interface ChangePasswordFormData {
  password?: string;
  passwordConfirm: string;
  passwordNew?: string;
  passwordOld?: string;
}

type ChangePasswordFormProps = {
  isForgotPassword?: boolean;
  onSubmit?: (value: ChangePasswordFormData) => void;
  onCancel?: () => void;
};

const ChangePasswordForm: React.FC<ChangePasswordFormProps> = ({
  isForgotPassword,
  onSubmit,
  onCancel,
}) => {
  const { handleSubmit, handleChange, values, errors, getFieldMeta } =
    useFormik({
      initialValues: isForgotPassword
        ? {
            password: "",
            passwordConfirm: "",
          }
        : {
            passwordOld: "",
            passwordNew: "",
            passwordConfirm: "",
          },
      validateOnChange: false,
      validationSchema: ForgotPasswordChangePasswordSchema({
        isForgotPassword,
      }),
      onSubmit: (value: ChangePasswordFormData) => {
        if (passwordMatches) {
          onSubmit?.(value);
        }
      },
    });

  const { textFieldProps } = useFormikUtils({
    values,
    handleChange,
    errors,
  });

  const { touched: isConfirmTouched } = getFieldMeta("passwordConfirm");

  const passwordMatches = useMemo(
    () =>
      isForgotPassword
        ? values.password === values.passwordConfirm
        : values.passwordNew === values.passwordConfirm,
    [
      isForgotPassword,
      values.password,
      values.passwordConfirm,
      values.passwordNew,
    ]
  );

  return (
    <ChangePasswordFormWrapper onSubmit={handleSubmit}>
      {!isForgotPassword && (
        <PasswordField fullWidth {...textFieldProps("passwordOld")} />
      )}
      <PasswordField
        label="New Password"
        {...textFieldProps(isForgotPassword ? "password" : "passwordNew")}
        helperText=""
      />
      <PasswordRequirement password={(isForgotPassword ? values.password : values.passwordNew) || ''} />
      <PasswordField
        label="Re-Password"
        {...textFieldProps("passwordConfirm")}
        error={
          (!passwordMatches && isConfirmTouched) ||
          textFieldProps("passwordConfirm").error
        }
        helperText={
          !passwordMatches && isConfirmTouched
            ? "Confirm password is not matches"
            : textFieldProps("passwordConfirm").helperText
        }
      />
      <ChangePasswordActionWrapper>
        <Button type="submit" size="large">
          Change Password
        </Button>
        <Button size="large" variant="text" onClick={onCancel}>
          Cancel
        </Button>
      </ChangePasswordActionWrapper>
    </ChangePasswordFormWrapper>
  );
};

ChangePasswordForm.defaultProps = {
  isForgotPassword: false,
  onSubmit() {},
  onCancel() {},
};

export default ChangePasswordForm;
