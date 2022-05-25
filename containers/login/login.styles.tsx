import { styled, SxProps } from "@mui/material";

export const LoginWrapper = styled("section")`
  width: 100%;
  padding: ${({ theme }) => theme.spacing(6, 2)};
  min-height: calc(
    100vh -
      ${({ theme }) =>
        theme.customTheme.constants.NAVBAR_HEIGHT +
        theme.customTheme.constants.FOOTER_HEIGHT}px
  );

  display: flex;
  justify-content: center;
  align-items: flex-start;

  ${({ theme }) => theme.breakpoints.up("lg")} {
    background-position: right;
    background-image: url("/images/login-side-bg.png");
    background-repeat: no-repeat;
    background-attachment: fixed;
    padding: ${({ theme }) => theme.spacing(0, 2)};
    align-items: center;
    background-size: auto 100%;
  }
`;

export const DontHaveAccountBox = styled("section")`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  gap: ${({ theme }) => theme.spacing(1)};
`;

export const FormWrapper = styled("section")`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing(2)};
`;

export const contentWrapperStyles: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: {
    xs: "center",
    lg: "flex-start",
  },
  gap: {
    xs: 2,
    lg: 0,
  },
};
