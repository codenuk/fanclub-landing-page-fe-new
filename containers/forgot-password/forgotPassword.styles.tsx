import { styled, SxProps, TextField } from "@mui/material";

export const ForgotPasswordWrapper = styled("section")`
  width: 100%;

  padding: ${({ theme }) => theme.spacing(6, 2, 0)};
  min-height: calc(
    100vh -
      ${({ theme }) =>
        theme.customTheme.constants.FOOTER_HEIGHT +
        theme.customTheme.constants.NAVBAR_HEIGHT}px
  );

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const EmailField = styled(TextField)`
  max-width: 616px;
`;

export const contentWrapperStyles: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: 3,

  paddingTop: 6,
};

export const ForgotPasswordFormWrapper = styled("form")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  gap: ${({ theme }) => theme.spacing(3)};

  width: 100%;
`;
