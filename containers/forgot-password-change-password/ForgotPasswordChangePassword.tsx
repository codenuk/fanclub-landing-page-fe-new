import { Alert, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useCallback } from "react";
import {
  ChangePasswordForm,
  ContentWrapper,
  LoadingModal,
} from "../../components";
import { useForgotPasswordChangePassword } from "../../hooks";
import {
  contentWrapperStlyes,
  ForgotPasswordChangePasswordWrapper,
} from "./forgotPasswordChangePassword.styles";

type ForgotPasswordChangePasswordProps = {
  email: string;
  onSubmit?: (value: any) => void;
};

const ForgotPasswordChangePassword: React.FC<
  ForgotPasswordChangePasswordProps
> = ({ email, onSubmit }) => {
  const router = useRouter();
  const { changePassword, loading, error } = useForgotPasswordChangePassword();

  const handleChangePassword = useCallback(
    async (value: any) => {
      await changePassword({ email, ...value });
      onSubmit?.({ email });
    },
    [changePassword, email, onSubmit]
  );

  const handleCancel = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <ForgotPasswordChangePasswordWrapper>
      <LoadingModal open={loading} />
      <ContentWrapper sx={contentWrapperStlyes}>
        <Typography variant="h4">ตั้งรหัสผ่านใหม่</Typography>
        <ChangePasswordForm
          isForgotPassword
          onCancel={handleCancel}
          onSubmit={handleChangePassword}
        />
        {error?.data?.message && (
          <Alert sx={{ marginTop: 2 }} severity="error">
            {error?.data?.message}
          </Alert>
        )}
      </ContentWrapper>
    </ForgotPasswordChangePasswordWrapper>
  );
};

ForgotPasswordChangePassword.defaultProps = {};

export default ForgotPasswordChangePassword;
