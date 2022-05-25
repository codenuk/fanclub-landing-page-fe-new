import { styled } from "@mui/material";

export const SettingLayoutWrapper = styled("section")`
  min-height: calc(
    100vh -
      ${({ theme }) =>
        theme.customTheme.constants.NAVBAR_HEIGHT +
        theme.customTheme.constants.FOOTER_HEIGHT}px
  );

  width: 100%;

  background-color: ${({ theme }) => theme.palette.primary.main};

  display: flex;
  justify-content: center;
  align-items: center;

  padding: ${({ theme }) => theme.spacing(2)};
`;
