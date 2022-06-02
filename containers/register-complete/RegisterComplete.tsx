import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { ContentWrapper, GradientText } from "../../components";
import { formatNumber } from "../../utils/number-utils";
import {
  BackToHomeButton,
  CompleteImageWrapper,
  contentWrapperStyles,
  RegisterCompleteWrapper,
} from "./registerComplete.styles";

type RegisterCompleteProps = {
  title?: string;
  email?: string;
  tokenBalance?: number;
  onBackToHome?: () => Promise<void>;
};

const RegisterComplete: React.FC<RegisterCompleteProps> = ({
  title,
  email,
  tokenBalance,
  onBackToHome,
}) => {
  const router = useRouter();

  const backToHome = useCallback(async () => {
    if (onBackToHome) {
      await onBackToHome();
    } else {
      router.push("/");
    }
  }, [onBackToHome, router]);

  return (
    <RegisterCompleteWrapper>
      <ContentWrapper sx={contentWrapperStyles}>
        <GradientText variant="h4">{title}</GradientText>
        {email && (
          <Typography
            sx={{ color: (theme) => theme.palette.common.white }}
            variant="body1"
          >
            You{"’"}re email: {email}
          </Typography>
        )}
        {tokenBalance && (
          <Typography sx={{ color: "#00E4E1" }} variant="h5">
            Get {formatNumber(tokenBalance)} Coin
          </Typography>
        )}
        <CompleteImageWrapper>
          <Image
            src={
              tokenBalance
                ? "/images/register-complete-and-get-airdrop.png"
                : "/images/register-complete-bg.png"
            }
            width={tokenBalance ? "462" : "488"}
            height={tokenBalance ? "462" : "349"}
            layout="responsive"
            alt="register-complete-image"
          />
        </CompleteImageWrapper>
        <BackToHomeButton onClick={backToHome}>Back to Home</BackToHomeButton>
      </ContentWrapper>
    </RegisterCompleteWrapper>
  );
};

RegisterComplete.defaultProps = {
  title: "Registration Complete",
  email: "email@email.com",
};

export default RegisterComplete;

