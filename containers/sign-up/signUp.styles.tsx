import { styled, SxProps, Theme } from "@mui/material";

export const signUpContentWrapper: SxProps<Theme> = {
  height: (theme) =>
    `calc(100vh - ${
      theme.customTheme.constants.NAVBAR_HEIGHT -
      theme.customTheme.constants.FOOTER_HEIGHT
    })px`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: (theme) => theme.spacing(4, 0),
};

export const SignUpContentWrapper = styled("section")`
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
    background-image: url("/images/signup-bg.svg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    padding: ${({ theme }) => theme.spacing(0, 2)};
    align-items: center;
    background-size: auto 100%;
  }
`;

export const ActionWrapper = styled("div")`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
