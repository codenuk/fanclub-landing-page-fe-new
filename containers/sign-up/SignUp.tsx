import { Alert, Button, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ContentWrapper, LoadingModal, SignUpForm } from "../../components";
import { useAuth } from "../../hooks";
import { validateEmail } from "../../services";
import {
  ActionWrapper,
  SignUpContentWrapper,
  signUpContentWrapper,
} from "./signUp.styles";

type SignUpProps = {
  defaultValues?: any;
  onSubmit?: (values: any) => void;
};

const SignUp: React.FC<SignUpProps> = ({ defaultValues, onSubmit }) => {
  const { isAuth } = useAuth();
  const [isChecking, setIsChecking] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const defaultRefCode = useMemo(
    () => router.query?.ref_code as string,
    [router.query?.ref_code]
  );

  const handleSubmit = useCallback(
    async (values: any) => {
      try {
        setIsChecking(true);
        setError("");
        const result = await validateEmail(values.email, values.refCode);
        setIsChecking(false);
        if (result.res_code !== "00") {
          setError(result.res_desc);
        } else {
          onSubmit?.(values);
        }
      } catch (error) {
        setIsChecking(false);
        setError("Something went wrong!");
      }
    },
    [onSubmit]
  );

  useEffect(() => {
    if (isAuth) {
      router.replace("/");
    }
  }, [isAuth, router]);

  return (
    <SignUpContentWrapper>
      <LoadingModal open={isChecking} />
      <ContentWrapper sx={signUpContentWrapper}>
        <Typography variant="body1">Start for free</Typography>
        <Typography variant="h4">Create New Account.</Typography>
        <ActionWrapper>
          <Typography variant="body1">มีบัญชีอยู่แล้ว ? </Typography>
          <Button variant="text">
            <Link href="/login">Login</Link>
          </Button>
        </ActionWrapper>
        <SignUpForm
          defaultValues={defaultValues}
          refCode={defaultRefCode}
          onSubmit={handleSubmit}
        />
        {error && (
          <Alert sx={{ marginTop: 2 }} severity="error">
            {error}
          </Alert>
        )}
      </ContentWrapper>
    </SignUpContentWrapper>
  );
};

SignUp.defaultProps = {
  onSubmit() {},
};

export default SignUp;
