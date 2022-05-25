import { useRouter } from "next/router";
import { useEffect } from "react";
import { Airdrop } from "../../containers";
import { useAuth } from "../../hooks";
import { PageLayout } from "../../layouts";
import { NextPageWithLayout } from "../_app";

const AirdropPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { isAuth, isInit } = useAuth();

  useEffect(() => {
    if (!isAuth && isInit) {
      router.replace("/");
    }
  }, [isAuth, router, isInit]);

  useEffect(() => {
    router.replace("/");
  }, [router]);

  return <Airdrop />;
};

AirdropPage.getLayout = (page) => <PageLayout>{page}</PageLayout>;

export default AirdropPage;
