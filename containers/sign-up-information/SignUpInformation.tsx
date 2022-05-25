import { Alert, Typography } from "@mui/material";
import React, { useCallback } from "react";
import {
  ContentWrapper,
  LoadingModal,
  SignUpInformationForm,
} from "../../components";
import { SignUpInformationFormData } from "../../components/sign-up-information-form/SignUpInformationForm";
import { useRegisterSendOTP } from "../../hooks";
import {
  SignUpContentWrapper,
  sigUpContentWrapper,
} from "./signUpInformation.styles";

type SignUpProps = {
  signUpState: any;
  onSubmit: (value: any) => void;
  onBack: () => void;
};

const SignUpInformation: React.FC<SignUpProps> = ({
  signUpState,
  onSubmit,
  onBack,
}) => {
  const { sendOTP, loading, data } = useRegisterSendOTP();

  const handleSubmit = useCallback(
    async (value: SignUpInformationFormData) => {
      try {
        const result = await sendOTP({
          email: signUpState.email,
          promoCodeReferral: signUpState?.refCode,
        });
        if (result.res_code === "00") {
          onSubmit({
            ...signUpState,
            ...value,
          });
        }
      } catch (error) {}
    },
    [onSubmit, sendOTP, signUpState]
  );

  return (
    <SignUpContentWrapper>
      <LoadingModal open={loading} />
      <ContentWrapper sx={sigUpContentWrapper}>
        <Typography variant="h4">Sign Up.</Typography>
        <SignUpInformationForm
          defaultValues={{
            firstName: signUpState?.firstName,
            lastName: signUpState?.lastName,
          }}
          email={signUpState?.email}
          onBack={onBack}
          onSubmit={handleSubmit}
        />
        {data?.res_code !== "00" && !!data?.res_desc && (
          <Alert sx={{ marginTop: 2 }} severity="error">
            {data?.res_desc}
          </Alert>
        )}
      </ContentWrapper>
    </SignUpContentWrapper>
  );
};

SignUpInformation.defaultProps = {
  onSubmit() {},
};

export default SignUpInformation;
