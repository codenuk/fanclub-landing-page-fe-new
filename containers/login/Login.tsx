import { Alert, Button, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect } from "react";
import { ContentWrapper, LoadingModal, LoginForm } from "../../components";
import { LogInFormData } from "../../components/login-form/LoginForm";
import { useAuth, useLogin, useTranslation } from "../../hooks";
import logInPagei18n from "../../i18n/login.i18n";

import {
  contentWrapperStyles,
  DontHaveAccountBox,
  FormWrapper,
  LoginWrapper,
} from "./login.styles";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const { translate } = useTranslation(logInPagei18n);
  const { isAuth, setTokens, clearToken } = useAuth();
  const { login, data, loading, error } = useLogin();
  const router = useRouter();

  const handleLogInSubmit = useCallback(
    async (value: LogInFormData) => {
      try {
        clearToken();
        await login(value);
      } catch (error) {}
    },
    [clearToken, login]
  );

  useEffect(() => {
    if (data?.res_code === "00") {
      setTokens(data.accessToken, data.refreshToken);
      router.replace("/");
    }
  }, [data, router, setTokens]);

  useEffect(() => {
    if (isAuth) {
      router.replace("/");
    }
  }, [isAuth, router]);

  return (
    <LoginWrapper>
      <LoadingModal open={loading} />
      <ContentWrapper sx={contentWrapperStyles}>
        <Typography variant="h4">{translate("LOGIN")}</Typography>
        <DontHaveAccountBox>
          <Typography variant="body1">
            {translate("NOT_HAVE_ACCOUNT")}
          </Typography>
          <Button variant="text">
            <Link href="/sign-up">{translate("CREATE_ACCOUNT")}</Link>
          </Button>
        </DontHaveAccountBox>
        <FormWrapper>
          <LoginForm onSubmit={handleLogInSubmit} />
        </FormWrapper>
        {error?.data?.res_desc && (
          <Alert sx={{ marginTop: 2 }} severity="error">
            {error?.data?.res_desc}
          </Alert>
        )}
      </ContentWrapper>
    </LoginWrapper>
  );
};

Login.defaultProps = {};

export default Login;
