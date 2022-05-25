import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import { LoadingModal } from "../../components";
import { TransactionTable } from "../../containers";
import { useAuth, useTransactionHistory, useUserInfo } from "../../hooks";
import { SettingLayout } from "../../layouts";
import { formatDate } from "../../utils/date-utils";
import { formatNumber } from "../../utils/number-utils";
import { hiddenWallet } from "../../utils/wallet-utils";
import { NextPageWithLayout } from "../_app";
import { useSelector } from "react-redux";
import { ICombineReducers } from "../../redux/reducers";

const TransactionsPage: NextPageWithLayout = () => {
  const {loading} = useUserInfo();
  const userInfoRedux = useSelector(
    (state: ICombineReducers) => state.userInfoReducer.userInfo
  );

  const walletAddress = useMemo(
    () => userInfoRedux?.walletBalance?.walletAddress,
    [userInfoRedux]
  );

  const {
    data: transactions,
    loading: loadingTransaction,
    nextToken,
    loadMore,
  } = useTransactionHistory(walletAddress);
  
  const list = useMemo(
    () =>
      transactions?.map((item: any) => ({
        dateTime: formatDate(item.createdAt),
        type: item.amountToken === 400 ? `${item.triggerType} (special bonus)` : item.triggerType || "MYSTERY_BOX",
        amount: formatNumber(item.amountToken),
        fromAddress: item.userFromID === '0x0000000000000000000000000000000000000000' ? 'Fandom App': hiddenWallet(item.userFromID),
        toAddress: userInfoRedux.email,
        block: item.transactionNo,
        status: "-",
      })) || [],
    [transactions]
  );

  const router = useRouter();
  const { isAuth, isInit } = useAuth();

  useEffect(() => {
    if (!isAuth && isInit) {
      router.replace("/");
    }
  }, [isAuth, router, isInit]);

  return (
    <>
      <LoadingModal open={loading || loadingTransaction} />
      <TransactionTable
        enableLoadmore={!!nextToken}
        onLoadMore={loadMore}
        list={list}
      />
    </>
  );
};

TransactionsPage.getLayout = (page) => (
  <SettingLayout showBackButton>{page}</SettingLayout>
);

export default TransactionsPage;
