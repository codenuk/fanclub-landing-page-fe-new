import { styled } from "@mui/material";

export const ChangePasswordWrapper = styled("section")`
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

  background-color: ${({ theme }) => theme.palette.common.white};

  gap: ${({ theme }) => theme.spacing(6)};
  padding: ${({ theme }) => theme.spacing(10, 0)};
`;
