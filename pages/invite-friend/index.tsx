import { useRouter } from "next/router";
import { useEffect } from "react";
import { ContentWrapper } from "../../components";
import { ReferralProgram } from "../../containers";
import { useAuth } from "../../hooks";
import { SettingLayout } from "../../layouts";
import { NextPageWithLayout } from "../_app";

const InviteFriendPage: NextPageWithLayout = () => {
  const { isAuth } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuth) {
      router.replace("/");
    }
  }, [isAuth, router]);

  return (
    <ContentWrapper
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <ReferralProgram />
    </ContentWrapper>
  );
};

InviteFriendPage.getLayout = (page) => <SettingLayout>{page}</SettingLayout>;

export default InviteFriendPage;
