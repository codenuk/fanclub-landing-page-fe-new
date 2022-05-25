import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import { LoadingModal } from "../../components";
import {
  RegisterComplete,
  SignUp,
  SignUpInformation,
  SignUpOTPValidation,
  StepContainer,
} from "../../containers";
import { useAuth, useLogin } from "../../hooks";
import { PageLayout } from "../../layouts";
import { NextPageWithLayout } from "../_app";

const SignUpPage: NextPageWithLayout = () => {
  const { setTokens } = useAuth();

  const { login, loading } = useLogin((data) => {
    setTokens(data.accessToken, data.refreshToken);
  });

  const handleVerifyOTPSuccess =
    (callback: (values: any) => void) => async (state: any) => {
      await login({
        email: state.email,
        password: state.password,
      });
      callback?.(state);
    };

  return (
    <StepContainer
      setStateOnNext
      configs={[
        {
          component: ({ onNextStep, state }) => (
            <SignUp defaultValues={state} onSubmit={onNextStep} />
          ),
        },
        {
          component: ({ onNextStep, onPrevStep, state }) => (
            <SignUpInformation
              signUpState={state}
              onBack={onPrevStep}
              onSubmit={onNextStep}
            />
          ),
        },
        {
          component: ({ onNextStep, onPrevStep, state }) => (
            <>
              <LoadingModal open={loading} />
              <SignUpOTPValidation
                onBack={onPrevStep}
                onSubmit={handleVerifyOTPSuccess(onNextStep)}
                signUpState={state}
              />
            </>
          ),
        },
        {
          component: ({ state }) => (
            <RegisterComplete
              tokenBalance={state?.tokenBalance}
              email={state.email}
            />
          ),
        },
      ]}
    />
  );
};

SignUpPage.getLayout = (page) => <PageLayout>{page}</PageLayout>;

export default SignUpPage;
