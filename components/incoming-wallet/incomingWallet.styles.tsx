import { Card, styled } from "@mui/material";

export const IncomingWalletItemCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing(2)};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
