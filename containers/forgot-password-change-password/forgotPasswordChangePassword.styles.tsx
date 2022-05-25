import { styled, SxProps } from "@mui/material";

export const ForgotPasswordChangePasswordWrapper = styled("section")`
  min-height: calc(
    100vh -
      ${({ theme }) =>
        theme.customTheme.constants.NAVBAR_HEIGHT +
        theme.customTheme.constants.FOOTER_HEIGHT}px
  );

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  gap: ${({ theme }) => theme.spacing(6)};
  padding: ${({ theme }) => theme.spacing(10, 0)};
`;

export const contentWrapperStlyes: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 4,
  alignSelf: "center",
  padding: 2,
};
