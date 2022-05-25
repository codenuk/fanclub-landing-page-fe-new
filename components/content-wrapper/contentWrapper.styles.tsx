import { Box, styled } from "@mui/material";

export const StyledContentWrapper = styled(Box)`
  max-width: 1440px;
  width: 100%;

  ${({ theme }) => theme.breakpoints.between(1020, 1441)} {
    max-width: 1000px;
  }
`;
