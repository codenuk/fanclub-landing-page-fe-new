import { useRouter } from "next/router";
import { useEffect } from "react";
import { ContentWrapper } from "../../components";
import { AccountDetail, ReferralProgram } from "../../containers";
import { useAuth } from "../../hooks";
import { SettingLayout } from "../../layouts";
import { NextPageWithLayout } from "../_app";

const AccountPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { isAuth, isInit } = useAuth();

  useEffect(() => {
    if (!isAuth && isInit) {
      router.replace("/");
    }
  }, [isAuth, router, isInit]);

  return (
    <ContentWrapper
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "1fr 1fr",
        },
        gap: 4,
        paddingBottom: 6,
      }}
    >
      <AccountDetail />
      <ReferralProgram />
    </ContentWrapper>
  );
};

AccountPage.getLayout = (page) => <SettingLayout>{page}</SettingLayout>;

export default AccountPage;
