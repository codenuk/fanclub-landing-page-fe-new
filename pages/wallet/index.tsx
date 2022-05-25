import { useRouter } from "next/router";
import { useEffect } from "react";
import { Wallet } from "../../containers";
import { useAuth } from "../../hooks";
import { SettingLayout } from "../../layouts";
import { NextPageWithLayout } from "../_app";

const WalletPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { isAuth, isInit } = useAuth();

  useEffect(() => {
    if (!isAuth && isInit) {
      router.replace("/");
    }
  }, [isAuth, router, isInit]);
  return <Wallet />;
};

WalletPage.getLayout = (page) => (
  <SettingLayout
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
    }}
  >
    {page}
  </SettingLayout>
);

export default WalletPage;
