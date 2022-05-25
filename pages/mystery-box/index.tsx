import { Gashapon } from "../../containers";
import { useAuth } from "../../hooks";
import { SettingLayout } from "../../layouts";
import { NextPageWithLayout } from "../_app";

const MysteryBoxPage: NextPageWithLayout = () => {

  return <Gashapon />;
};

MysteryBoxPage.getLayout = (page) => (
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

export default MysteryBoxPage;
