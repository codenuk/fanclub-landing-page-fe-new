import { TypographyProps } from "@mui/material";
import React from "react";
import { GradientTextWrapper } from "./gradientText.styles";

const GradientText: React.FC<TypographyProps> = ({ children, ...props }) => {
  return <GradientTextWrapper {...props}>{children}</GradientTextWrapper>;
};

export default GradientText;
