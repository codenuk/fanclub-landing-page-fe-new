import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Checkbox,
  Typography,
  Modal,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import {
  SignUpFormWrapper,
  GroupCheckBox,
  OpenPopUP,
} from "./signUpForm.styles";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useFormik } from "formik";
import { SignUpFormSchema } from "../../form-validators";
import { useFormikUtils } from "../../hooks";
import { PasswordRequirement } from "../password-requirement";
import { PrivacyPolicy } from "../../containers";
import ReCAPTCHA from "react-google-recaptcha-enterprise";

export interface SignUpFormData {
  email: string;
  password: string;
  refCode: string;
  allowPrivacy: boolean;
}

const initialFormValues = {
  email: "",
  password: "",
  refCode: "",
  allowPrivacy: false,
};

type SignUpProps = {
  defaultValues?: any;
  refCode?: string;
  onSubmit?: (value: SignUpFormData) => void;
};

const SignUpForm: React.FC<SignUpProps> = ({
  defaultValues,
  refCode,
  onSubmit,
}) => {
  const { handleSubmit, errors, values, handleChange, setFieldValue } =
    useFormik<SignUpFormData>({
      initialValues: defaultValues ?? initialFormValues,
      validationSchema: SignUpFormSchema(),
      validateOnChange: false,
      onSubmit: (value: SignUpFormData) => {
        onSubmit?.(value);
      },
    });

  const { textFieldProps } = useFormikUtils<SignUpFormData>({
    values,
    errors,
    handleChange,
  });
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);

  const handleToggleShowPassword = useCallback(() => {
    setIsShowPassword((prev) => !prev);
  }, []);

  useEffect(() => {
    if (refCode) {
      setFieldValue("refCode", refCode);
    }
  }, [refCode, setFieldValue]);

  return (
    <>
      <SignUpFormWrapper onSubmit={handleSubmit}>
        <TextField
          sx={{ marginTop: 3 }}
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
          helperText=""
        />
        <PasswordRequirement password={values.password} />
        <TextField
          sx={{
            marginTop: 2,
            width: {
              xs: "100%",
              lg: "initial",
            },
          }}
          placeholder="Code"
          InputLabelProps={{ shrink: true }}
          label="Referral Code"
          variant="filled"
          {...textFieldProps("refCode")}
        />
        <GroupCheckBox>
          <Checkbox
            {...textFieldProps("allowPrivacy")}
            sx={
              errors.allowPrivacy
                ? {
                    color: "#d32f2f",
                  }
                : {}
            }
          />
          I agree to the{" "}
          <OpenPopUP onClick={() => setIsShowModal(true)}>
            Privacy Policy
          </OpenPopUP>
          <Modal
            open={isShowModal}
            onClose={() => setIsShowModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <PrivacyPolicy
                isSignUp={true}
                onClose={() => setIsShowModal(false)}
              />
            </Box>
          </Modal>
        </GroupCheckBox>

        <ReCAPTCHA sitekey="6LfEAlIgAAAAAIS5bWda26miX0sL9TuBBDk_S-8i" onChange={(e) => console.log(e)} />

        <Button
          color="primary"
          type="submit"
          sx={{
            width: {
              xs: "100%",
              lg: "120px",
            },
            marginTop: 2,
          }}
          size="large"
        >
          Sign up
        </Button>
      </SignUpFormWrapper>
    </>
  );
};

SignUpForm.defaultProps = {
  onSubmit() {},
};

export default SignUpForm;

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 900,
  width: "90%",
  height: "80%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  outline: "none",
  overflow: "auto",
};
