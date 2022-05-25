import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  TextField,
  InputAdornment,
  IconButton,
  TextFieldProps,
} from "@mui/material";
import React, { useCallback, useState } from "react";

const PasswordField: React.FC<TextFieldProps> = (props) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleToggleShowPassword = useCallback(() => {
    setIsShowPassword((prev) => !prev);
  }, []);

  return (
    <TextField
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
      placeholder="Enter your password"
      variant="filled"
      fullWidth
      {...props}
      type={isShowPassword ? "text" : "password"}
    />
  );
};

PasswordField.defaultProps = {};

export default PasswordField;
