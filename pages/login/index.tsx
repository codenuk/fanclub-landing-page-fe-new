import router from "next/router";
import { useEffect } from "react";
import { Login } from "../../containers";
import { useAuth } from "../../hooks";
import { PageLayout } from "../../layouts";
import { NextPageWithLayout } from "../_app";

const LogInPage: NextPageWithLayout = () => {
  const { isAuth } = useAuth();

  useEffect(() => {
    if (isAuth) {
      router.replace("/");
    }
  }, [isAuth]);

  return <Login />;
};

LogInPage.getLayout = (page) => <PageLayout>{page}</PageLayout>;

export default LogInPage;
