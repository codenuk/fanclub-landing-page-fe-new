/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { Dispatch, SetStateAction } from "react";
import styles from "./index.module.scss";
import { Box, Modal } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

type GashaponModalProps = {
  tokenBalance: number;
  modalMsgErrBuyGashapon: string;
  loadingBuyGashapon: boolean;
  gashaponCollectionInfo: any;
  modalBuyGashapon: boolean;
  setModalBuyGashapon: Dispatch<SetStateAction<boolean>>;
  handleBuyGashapon: () => void;
};

const GashaponModalPage: React.FC<GashaponModalProps> = ({
  tokenBalance,
  modalMsgErrBuyGashapon,
  loadingBuyGashapon,
  gashaponCollectionInfo,
  modalBuyGashapon,
  setModalBuyGashapon,
  handleBuyGashapon,
}) => {
  const numberFormmater = (num: number = 0) =>
    Number(num).toLocaleString("en-Us");

  return (
    <Modal
      open={modalBuyGashapon}
      onClose={() => setModalBuyGashapon(!modalBuyGashapon)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{ backgroundColor: "rgb(0 0 0 / 84%)" }}
    >
      <Box
        style={{
          width: "fit-content",
          display: "flex",
        }}
      >
        <div className={styles.main}>
          <div className={styles.wrapperText}>
            <h5 className={styles.detillTitle}>รายการคำสั่งซื้อ</h5>
            <div className={styles.groupImageAndText}>
              <img
                className={styles.imagesT}
                src="/images/gashapon.png"
                alt="/images/gashapon.png"
              />
              <div className={styles.groupText}>
                <p className={styles.detillText}>
                  กดเลย! แลกรับ NFT "BLOODY BUNNY : Limited NEON EDITION"
                  เมื่อสะสม NFT "BLOODY BUNNY the 1st BOX " ครบคอลเลกชัน
                  รีบหน่อย! มีแค่ 45,000 ชิ้นเท่านั้นนะ
                </p>
                <p className={styles.detillStotk}>
                  จำนวนสินค้าเหลือ{" "}
                  {numberFormmater(
                    gashaponCollectionInfo?.categoryRate.reduce(
                      (previousValue: any, currentValue: any) =>
                        previousValue + currentValue.amount,
                      0
                    )
                  )}{" "}
                  กาชา
                </p>
                {modalMsgErrBuyGashapon && <span style={{ color: 'red' }}>{modalMsgErrBuyGashapon}</span>}
                <LoadingButton
                  size="small"
                  onClick={handleBuyGashapon}
                  loading={loadingBuyGashapon}
                  variant="contained"
                  className={styles.buttonStotk}
                  type="button"
                >
                  <p>สุ่ม</p>
                  <div className={styles.textF}>
                    <p>{gashaponCollectionInfo?.price}</p>{" "}
                    <p className={styles.textP}>Fandom Coin</p>
                  </div>
                </LoadingButton>

                <p className={styles.detillStotkP}>
                  จำนวนเงินในกระเป๋า{" "}
                  {numberFormmater(tokenBalance)} Fandom
                  Coin
                </p>
              </div>
            </div>
            <h6 className={styles.textL}>ระดับความหายาก</h6>
            <div className={styles.textL2}>
              <p>กาชาปอง</p> <p>จำนวน</p> <p>โอกาสที่จะได้</p>
            </div>
            <div className={styles.displayGrid}>
              {[
                {
                  img: "/images/rate_10.png",
                  name: "",
                  amount: gashaponCollectionInfo?.categoryRate[0].amount,
                  rate: "10%",
                },
                {
                  img: "/images/rate_20.png",
                  name: "",
                  amount: gashaponCollectionInfo?.categoryRate[1].amount,
                  rate: "20%",
                },
                {
                  img: "/images/rate_30.png",
                  name: "",
                  amount: gashaponCollectionInfo?.categoryRate[2].amount,
                  rate: "30%",
                },
                {
                  img: "/images/rate_40.png",
                  name: "",
                  amount: gashaponCollectionInfo?.categoryRate[3].amount,
                  rate: "40%",
                },
              ].map((data) => (
                <>
                  <div className={styles.grid1}>
                    <img
                      width="38"
                      height="57"
                      src={data.img}
                      alt={data.img}
                      style={{ objectFit: "contain" }}
                    />
                    <p></p>
                  </div>
                  <p className={styles.textinGrid2}> {numberFormmater(data?.amount)}

                  </p>
                  <p className={styles.textinGrid3}>{data.rate}</p>
                </>
              ))}
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

GashaponModalPage.defaultProps = {};

export default GashaponModalPage;
