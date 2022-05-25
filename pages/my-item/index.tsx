import { useRouter } from "next/router";
import { useEffect } from "react";
import { MyGashapon } from "../../containers";
import { useAuth } from "../../hooks";
import { SettingLayout } from "../../layouts";
import { NextPageWithLayout } from "../_app";

const MyItemPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { isAuth, isInit } = useAuth();

  useEffect(() => {
    if (!isAuth && isInit) {
      router.replace("/");
    }
  }, [isAuth, router, isInit]);
  return <MyGashapon />;
};

MyItemPage.getLayout = (page) => (
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

export default MyItemPage;
