import { ContentWrapper } from "../../components";
import { SettingLayout } from "../../layouts";
import { NextPageWithLayout } from "../_app";
import styles from "./index.module.scss";

const SirasomPage: NextPageWithLayout = () => {
  return (
    <ContentWrapper
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <img src="/images/team-3.png" />
      <h4 className={styles.name}>สิรโสมย์ บริสุทธิ์สุวรรณ์</h4>
      <h5 className={styles.detail}>Tech startup founder</h5>
      <h5 className={styles.detail}>CMO The Campus COO Momchoice</h5>
      <h5 className={styles.detail}>Founder U DRINK I DRIVE</h5>

      <div className={styles.groupBtn}>
      <a href="mailto: admin@fandom.co.th" className={styles.buttonHref}>Email</a>
        <a href="https://www.facebook.com/FandomThailand/" className={styles.buttonHref}>Facebook</a>
        <a href="https://www.instagram.com/fandom.nft/" className={styles.buttonHref}>Instagram</a>
        <a href="https://twitter.com/Fandom_nft/" className={styles.buttonHref}>Twitter</a>
      </div>
    </ContentWrapper>
  );
};

SirasomPage.getLayout = (page) => <SettingLayout>{page}</SettingLayout>;

export default SirasomPage;
