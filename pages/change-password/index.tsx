import { useRouter } from "next/router";
import { useEffect } from "react";
import { ChangePassword } from "../../containers";
import { useAuth } from "../../hooks";
import { PageLayout } from "../../layouts";
import { NextPageWithLayout } from "../_app";

const ChangePasswordPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { isAuth, isInit } = useAuth();

  useEffect(() => {
    if (!isAuth && isInit) {
      router.replace("/");
    }
  }, [isAuth, router, isInit]);
  return <ChangePassword />;
};

ChangePasswordPage.getLayout = (page) => <PageLayout>{page}</PageLayout>;

export default ChangePasswordPage;
