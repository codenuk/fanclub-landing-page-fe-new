import { Button, Typography } from "@mui/material";
import React from "react";
import { IncomingWalletItemCard } from "./incomingWallet.styles";

type IncomingWalletProps = {
  title?: string;
};

const IncomingWallet: React.FC<IncomingWalletProps> = ({ title }) => {
  return (
    <IncomingWalletItemCard>
      <Typography variant="h5">{title}</Typography>
      <Button sx={{ borderRadius: 5 }}>Coming Soon</Button>
    </IncomingWalletItemCard>
  );
};

IncomingWallet.defaultProps = {
  title: "Title",
};

export default IncomingWallet;
