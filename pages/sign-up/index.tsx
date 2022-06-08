/* eslint-disable @next/next/no-img-element */
// import { useRouter } from "next/router";
// import { useCallback, useEffect } from "react";
// import { LoadingModal } from "../../components";
import { ContentWrapper } from "../../components";
// import {
//   RegisterComplete,
//   SignUp,
//   SignUpInformation,
//   SignUpOTPValidation,
//   StepContainer,
// } from "../../containers";
// import { useAuth, useLogin } from "../../hooks";
import { PageLayout } from "../../layouts";
import { NextPageWithLayout } from "../_app";

const SignUpPage: NextPageWithLayout = () => {
  // const { setTokens } = useAuth();

  // const { login, loading } = useLogin((data) => {
  //   setTokens(data.accessToken, data.refreshToken);
  // });

  // const handleVerifyOTPSuccess =
  //   (callback: (values: any) => void) => async (state: any) => {
  //     await login({
  //       email: state.email,
  //       password: state.password,
  //     });
  //     callback?.(state);
  //   };

  return (
    <ContentWrapper>
      <div
        style={{
          height: "70vh",
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          alignContent: "center",
          paddingTop: "50px",
        }}
      >
        <img
          src={"/images/thx.jpg"}
          alt="thx"
          height={200}
          style={{ objectFit: "contain" }}
        />
        <h3 style={{ textAlign: "center" }}>
          เนื่องจากมีผู้เข้ามาลงทะเบียนเป็นจำนวนมาก <br />
          จึงขอปิดการลงทะเบียนชั่วคราวเพื่อปรับปรุงระบบ
        </h3>
        <h4 style={{ textAlign: "center" }}>
          จะรีบทำการปรับปรุงแก้ไขให้เร็วที่สุด ภายใน 24 ชั่วโมง <br />
          บริษัทขออภัยในความไม่สะดวกมา ณ ที่นี้ด้วย
        </h4>
      </div>
    </ContentWrapper>
    // <StepContainer
    //   setStateOnNext
    //   configs={[
    //     {
    //       component: ({ onNextStep, state }) => (
    //         <SignUp defaultValues={state} onSubmit={onNextStep} />
    //       ),
    //     },
    //     {
    //       component: ({ onNextStep, onPrevStep, state }) => (
    //         <SignUpInformation
    //           signUpState={state}
    //           onBack={onPrevStep}
    //           onSubmit={onNextStep}
    //         />
    //       ),
    //     },
    //     {
    //       component: ({ onNextStep, onPrevStep, state }) => (
    //         <>
    //           <LoadingModal open={loading} />
    //           <SignUpOTPValidation
    //             onBack={onPrevStep}
    //             onSubmit={handleVerifyOTPSuccess(onNextStep)}
    //             signUpState={state}
    //           />
    //         </>
    //       ),
    //     },
    //     {
    //       component: ({ state }) => (
    //         <RegisterComplete
    //           tokenBalance={state?.tokenBalance}
    //           email={state.email}
    //         />
    //       ),
    //     },
    //   ]}
    // />
  );
};

SignUpPage.getLayout = (page) => <PageLayout>{page}</PageLayout>;

export default SignUpPage;
