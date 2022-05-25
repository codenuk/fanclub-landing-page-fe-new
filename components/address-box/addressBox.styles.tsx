import { styled } from "@mui/material";

export const AddressBoxWrapper = styled("span")`
  padding: ${({ theme }) => theme.spacing(1, 4)};
  text-align: center;

  background-color: ${({ theme }) =>
    theme.customTheme.colors.walletBadgeBackground.main};
  color: ${({ theme }) => theme.customTheme.colors.walletBadgeText.main};
  border-radius: 25px;
  font-weight: bold;
`;
