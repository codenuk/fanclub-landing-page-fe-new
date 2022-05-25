import type { BoxProps } from "@mui/material";
import React from "react";
import { StyledContentWrapper } from "./contentWrapper.styles";

type ContentWrapperProps = {} & BoxProps;

const ContentWrapper: React.FC<ContentWrapperProps> = ({
  children,
  ...boxProps
}) => {
  return (
    <StyledContentWrapper component="section" {...boxProps}>
      {children}
    </StyledContentWrapper>
  );
};

ContentWrapper.defaultProps = {};

export default ContentWrapper;
