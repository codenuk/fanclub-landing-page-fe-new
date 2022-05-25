import { Typography } from "@mui/material";
import Link from "next/link";
import React, { useMemo } from "react";
import {
  AddressSectionWrapper,
  DepositButton,
  WalletActionSection,
  WalletBalanceWrapper,
  WalletHeaderWrapper,
  WalletInfoSection,
  WalletItemCard,
} from "./walletItem.styles";

import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { AddressBox } from "../address-box";

type WalletItemProps = {
  balance: number;
  walletAddress: string;
};

const WalletItem: React.FC<WalletItemProps> = ({ balance, walletAddress }) => {
  const formattedBalance = useMemo(
    () =>
      Number(balance).toLocaleString("en-Us", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
    [balance]
  );

  const hiddenAddress = useMemo(
    () => walletAddress?.replace(/(.{6})(.*)(.{4})/g, "$1...$3"),
    [walletAddress]
  );

  return (
    <WalletItemCard>
      <WalletInfoSection>
        <WalletHeaderWrapper>
          <Typography variant="h5">Wallet</Typography>{" "}
          <AccountBalanceWalletOutlinedIcon />
        </WalletHeaderWrapper>
        <WalletBalanceWrapper>
          <Typography variant="h4" fontWeight="bold">
            {formattedBalance.split(".")[0]}
          </Typography>
          <Typography variant="body1" sx={{ paddingBottom: 0.5 }}>
            .{formattedBalance.split(".")[1]} FC Coin
          </Typography>
        </WalletBalanceWrapper>
        <AddressSectionWrapper>
          <AddressBox address={hiddenAddress} />
          <Link href="/transactions">Transaction History</Link>
        </AddressSectionWrapper>
      </WalletInfoSection>
      <WalletActionSection>
        {/* <DepositButton>
          <AccountBalanceIcon />
        </DepositButton>
        <Typography variant="caption">Deposit</Typography> */}
      </WalletActionSection>
    </WalletItemCard>
  );
};

WalletItem.defaultProps = {};

export default WalletItem;
