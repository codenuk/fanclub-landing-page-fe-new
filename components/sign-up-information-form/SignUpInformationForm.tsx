import {
  Button,
  CircularProgress,
  InputAdornment,
  TextField,
} from "@mui/material";
import React from "react";
import {
  NameFieldsWrapper,
  SignUpInformationWrapper,
  ViaEmail,
  ViaEmailMobile,
} from "./signUpInformationForm.styles";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useFormik } from "formik";
import { SignUpFormInformationSchema } from "../../form-validators";
import { useFormikUtils } from "../../hooks";
import { Box } from "@mui/system";

import ReCAPTCHA from "react-google-recaptcha";

export interface SignUpInformationFormData {
  firstName: string;
  lastName: string;
  tokenCaptcha: string;
}

const initialFormValues = {
  firstName: "",
  lastName: "",
  tokenCaptcha: "",
};

type SignUpProps = {
  email?: string;
  defaultValues?: any;
  loading?: boolean;
  onSubmit?: (value: SignUpInformationFormData) => void;
  onBack?: () => void;
};

const SignUpInformationForm: React.FC<SignUpProps> = ({
  email,
  defaultValues,
  loading,
  onSubmit,
  onBack,
}) => {
  const { handleSubmit, values, errors, setFieldValue, handleChange } = useFormik({
    initialValues: defaultValues ?? initialFormValues,
    validationSchema: SignUpFormInformationSchema(),
    onSubmit: (value: SignUpInformationFormData) => {
      onSubmit?.(value);
    },
  });

  const { textFieldProps } = useFormikUtils({
    errors,
    values,
    handleChange,
  });

  return (
    <>
      <SignUpInformationWrapper onSubmit={handleSubmit}>
        <NameFieldsWrapper>
          <TextField
            sx={{ flex: 1 }}
            placeholder="Firstname"
            InputLabelProps={{ shrink: true }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <AccountCircleIcon />
                </InputAdornment>
              ),
            }}
            label="First name"
            variant="filled"
            {...textFieldProps("firstName")}
          />
          <TextField
            sx={{ flex: 1 }}
            placeholder="Lastname"
            InputLabelProps={{ shrink: true }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <AccountCircleIcon />
                </InputAdornment>
              ),
            }}
            label="Last name"
            variant="filled"
            {...textFieldProps("lastName")}
          />
        </NameFieldsWrapper>
          <ReCAPTCHA
            type="image"
            sitekey={process.env["NEXT_PUBLIC_SITE_KEY"] as string}
            onChange={(token: any) =>
              setFieldValue("tokenCaptcha", token, true)
            }
          />
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            marginTop: 2,
            alignSelf: "stretch",
            width: "100%",
          }}
        >
          <Button
            disabled={loading}
            type="submit"
            sx={{
              width: {
                xs: "100%",
                lg: "200px",
              },
            }}
            size="large"
          >
            {loading && <CircularProgress size={12} sx={{ marginRight: 1 }} />}
            Send OTP
          </Button>
          <ViaEmailMobile>(via email: {email})</ViaEmailMobile>
          <Button
            sx={{
              width: {
                xs: "100%",
                lg: "100px",
              },
            }}
            color="inherit"
            variant="contained"
            onClick={onBack}
          >
            Back
          </Button>
        </Box>
        <ViaEmail>(via email: {email})</ViaEmail>
      </SignUpInformationWrapper>
    </>
  );
};

SignUpInformationForm.defaultProps = {
  onSubmit() {},
};

export default SignUpInformationForm;
