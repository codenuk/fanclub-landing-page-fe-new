/* eslint-disable @next/next/no-img-element */
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
      <img src="/images/team-7.png" alt="/images/team-7.png" />
      <h4 className={styles.name}>ผศ. ดร. รัฐกร พูลทรัพย์</h4>
      <h5 className={styles.detail}>อาจารย์ประจำสถาบันบัณฑิตพัฒนบริหารศาสตร์ (นิด้า) NIDA</h5>
      <h5 className={styles.detail}>ผู้เชี่ยวชาญด้าน blockchain</h5>
      <h5 className={styles.detail}>Technical Consultant, Bitkub Capital Group Holdings</h5>
      <h5 className={styles.detail}>และที่ปรึกษาอื่นๆ อีกมากมาย</h5>

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
