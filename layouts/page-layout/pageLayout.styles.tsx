import { styled } from "@mui/material";

export const PageWrapper = styled("main")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: ${({ theme }) => theme.customTheme.constants.NAVBAR_HEIGHT}px;
`;
