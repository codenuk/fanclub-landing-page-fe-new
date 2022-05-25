import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { ContentWrapper } from "../content-wrapper";
import { GradientText } from "../gradient-text";
import {
  contentWrapperStyles,
  SystemBannerWrapper,
} from "./systemSection.styles";

type SystemSectionProps = {
  bannerSrc: string;
  title: string;
  description: string;
};

const SystemSection: React.FC<SystemSectionProps> = ({
  bannerSrc,
  title,
  description,
}) => {
  return (
    <ContentWrapper sx={contentWrapperStyles}>
      <GradientText variant="h3">{title}</GradientText>
      <Typography variant="body1">{description}</Typography>
      <SystemBannerWrapper>
        <Image
          alt="system-banner"
          src={bannerSrc}
          width="1440"
          height="560"
          layout="intrinsic"
        />
      </SystemBannerWrapper>
    </ContentWrapper>
  );
};

SystemSection.defaultProps = {};

export default SystemSection;
