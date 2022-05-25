import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { AboutItemWrapper, ImageBox } from "./aboutItem.styles";

type AboutItemProps = {
  imgSrc: string;
  title: string;
  description: string;
};

const AboutItem: React.FC<AboutItemProps> = ({
  imgSrc,
  title,
  description,
}) => {
  return (
    <AboutItemWrapper>
      <ImageBox>
        <Image src={imgSrc} width="53" height="53" alt="about-image" />
      </ImageBox>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body1">{description}</Typography>
    </AboutItemWrapper>
  );
};

AboutItem.defaultProps = {};

export default AboutItem;
