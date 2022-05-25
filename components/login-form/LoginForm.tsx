import { VisibilityOff, Visibility } from "@mui/icons-material";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import NextLink from "next/link";
import React, { useCallback, useState } from "react";
import { LoginFormWrapper, ActionsSection } from "./loginForm.styles";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useFormik } from "formik";
import { LogInFormSchema } from "../../form-validators";
import { useFormikUtils } from "../../hooks";

export interface LogInFormData {
  email: string;
  password: string;
}

const initialFormValues = {
  email: "",
  password: "",
};

type LoginFormProps = {
  errorMessage?: string;
  onSubmit?: (value: LogInFormData) => void;
};

const LoginForm: React.FC<LoginFormProps> = ({ errorMessage, onSubmit }) => {
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: initialFormValues,
    validationSchema: LogInFormSchema,
    onSubmit: (value: LogInFormData) => {
      onSubmit?.(value);
    },
  });

  const { textFieldProps } = useFormikUtils({
    handleChange,
    values,
    errors,
  });

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleToggleShowPassword = useCallback(() => {
    setIsShowPassword((prev) => !prev);
  }, []);

  return (
    <LoginFormWrapper onSubmit={handleSubmit}>
      <TextField
        placeholder="Email@email.com"
        InputLabelProps={{ shrink: true }}
        InputProps={{ endAdornment: <MailOutlineIcon color="action" /> }}
        label="Email"
        variant="filled"
        fullWidth
        {...textFieldProps("email")}
      />
      <TextField
        sx={{ marginTop: 2 }}
        InputLabelProps={{ shrink: true }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleToggleShowPassword}
                edge="end"
              >
                {isShowPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        label="Password"
        type={isShowPassword ? "text" : "password"}
        placeholder="Enter your password"
        variant="filled"
        fullWidth
        {...textFieldProps("password")}
        error={textFieldProps("password")?.error || !!errorMessage}
        helperText={textFieldProps("password").helperText || errorMessage}
      />
      <ActionsSection>
        <Button variant="text">
          <NextLink href="/forgot-password">ลืมรหัสผ่าน ?</NextLink>
        </Button>
      </ActionsSection>
      <Button
        color="primary"
        type="submit"
        sx={{
          width: {
            xs: "100%",
            lg: "120px",
          },
        }}
        size="large"
      >
        Login
      </Button>
    </LoginFormWrapper>
  );
};

LoginForm.defaultProps = {
  onSubmit() {},
};

export default LoginForm;
