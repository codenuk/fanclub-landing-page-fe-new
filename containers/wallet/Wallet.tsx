import React from "react";
import {
  ContentWrapper,
  IncomingWallet,
  LoadingModal,
  WalletItem,
} from "../../components";
import { useUserInfo } from "../../hooks";
import { useSelector } from "react-redux";
import { ICombineReducers } from "../../redux/reducers";

type WalletProps = {};

const Wallet: React.FC<WalletProps> = () => {
  const { loading } = useUserInfo();
  const userInfoRedux = useSelector(
    (state: ICombineReducers) => state.userInfoReducer.userInfo
  );

  const address = userInfoRedux?.walletBalance?.walletAddress || "";
  const balance = userInfoRedux?.walletBalance?.tokenBalance || 0;

  return (
    <>
      <LoadingModal open={loading} />
      <ContentWrapper
        sx={{ marginTop: 2, display: "flex", flexDirection: "column", gap: 2 }}
      >
        <WalletItem walletAddress={address} balance={balance} />
        <IncomingWallet title="Bitkub NEXT" />
      </ContentWrapper>
    </>
  );
};

Wallet.defaultProps = {};

export default Wallet;
