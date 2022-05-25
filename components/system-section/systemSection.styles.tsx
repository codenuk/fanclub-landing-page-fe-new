import { styled, SxProps } from "@mui/material";

export const contentWrapperStyles: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 7,

  textAlign: "center",
  padding: {
    xs: 0,
    sm: 8,
  },
};

export const SystemBannerWrapper = styled("section")`
  margin-top: ${({ theme }) => theme.spacing(6)};

  width: 100%;
  min-height: 166px;
  max-height: 560px;
`;
