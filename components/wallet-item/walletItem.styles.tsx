import { Card, IconButton, styled } from "@mui/material";

export const WalletItemCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing(2)};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WalletInfoSection = styled("section")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const WalletActionSection = styled("section")`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  padding-right: ${({ theme }) => theme.spacing(2)};
`;

export const WalletBalanceWrapper = styled("section")`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

export const AddressSectionWrapper = styled("section")`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  gap: ${({ theme }) => theme.spacing(1)};
`;

export const WalletHeaderWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: ${({ theme }) => theme.spacing(2)};
`;

export const DepositButton = styled(IconButton)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.common.white};

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
`;
