import { Button, styled, SxProps } from "@mui/material";

export const RegisterCompleteWrapper = styled("section")`
  min-height: calc(
    100vh -
      ${({ theme }) =>
        theme.customTheme.constants.NAVBAR_HEIGHT +
        theme.customTheme.constants.FOOTER_HEIGHT}px
  );
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px 10px 30px 10px;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const contentWrapperStyles: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  gap: 2,
};

export const CompleteImageWrapper = styled("div")`
  max-width: 488px;
  width: 100%;
`;

export const BackToHomeButton = styled(Button)`
  background: linear-gradient(91.12deg, #fc01a2 -26.41%, #8e25f7 86.74%);
  a {
    color: ${({ theme }) => theme.palette.common.white};
  }
`;
