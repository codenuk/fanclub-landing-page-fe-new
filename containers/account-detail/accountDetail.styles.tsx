import { Card, styled } from "@mui/material";

export const AccountDetailWrapper = styled(Card)`
  padding: ${({ theme }) => theme.spacing(4)};

  gap: ${({ theme }) => theme.spacing(4)};
  display: flex;
  flex-direction: column;
`;
