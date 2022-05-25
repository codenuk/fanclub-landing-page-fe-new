import router from "next/router";
import { useEffect } from "react";
import {
  ForgotPassword,
  ForgotPasswordChangePassword,
  RegisterComplete,
  StepContainer,
} from "../../containers";
import { ForgotPasswordOTPValidation } from "../../containers/forgot-password-otp-validation";
import { useAuth } from "../../hooks";
import { PageLayout } from "../../layouts";
import { NextPageWithLayout } from "../_app";

const ForgotPasswordPage: NextPageWithLayout = () => {
  const { isAuth } = useAuth();

  useEffect(() => {
    if (isAuth) {
      router.replace("/");
    }
  }, [isAuth]);

  return (
    <StepContainer
      setStateOnNext
      configs={[
        {
          component: ({ onNextStep }) => (
            <ForgotPassword onSubmit={onNextStep} />
          ),
        },
        {
          component: ({ onNextStep, onPrevStep, state }) => (
            <ForgotPasswordOTPValidation
              onBack={onPrevStep}
              onSubmit={onNextStep}
              forgotPasswordState={state}
            />
          ),
        },
        {
          component: ({ onNextStep, state }) => (
            <ForgotPasswordChangePassword
              onSubmit={onNextStep}
              email={state.email}
            />
          ),
        },
        {
          component: ({ state }) => (
            <RegisterComplete
              title="ส่งข้อความไปยัง email ของคุณแล้ว"
              email={state.email}
            />
          ),
        },
      ]}
    />
  );
};

ForgotPasswordPage.getLayout = (page) => <PageLayout>{page}</PageLayout>;

export default ForgotPasswordPage;
