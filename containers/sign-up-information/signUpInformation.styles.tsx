import { styled, SxProps } from "@mui/material";
import theme from "../../configs/theme";

export const sigUpContentWrapper: SxProps = {
  height: `calc(100vh - ${
    theme.customTheme.constants.NAVBAR_HEIGHT -
    theme.customTheme.constants.FOOTER_HEIGHT
  })px`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
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
    background-image: url("/images/signup-info-bg.png");
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
