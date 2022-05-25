import { styled, SxProps } from "@mui/material";

export const ValidateOTPWrapper = styled("section")`
  min-height: calc(
    100vh -
      ${({ theme }) =>
        theme.customTheme.constants.NAVBAR_HEIGHT +
        theme.customTheme.constants.FOOTER_HEIGHT}px
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const contentWrapperStyles: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  textAlign: "center",
  gap: 1,
};

export const OTPInputWrapper = styled("div")`
  margin: ${({ theme }) => theme.spacing(2, 0, 4)};
`;
