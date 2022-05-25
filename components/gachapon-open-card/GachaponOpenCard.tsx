/* eslint-disable @next/next/no-img-element */
import React, { SetStateAction, Dispatch, useState } from "react";
import styles from "./index.module.scss";
import { Box, Modal } from "@mui/material";

type GachaponOpenCardProps = {
  modalCard: { isOpen: boolean; imageUrl: string; rate: number };
  setModalCard: Dispatch<
    SetStateAction<{ isOpen: boolean; imageUrl: string; rate: number }>
  >;
  isShowAlert: boolean;
};

const GachaponOpenCardPage: React.FC<GachaponOpenCardProps> = ({
  modalCard,
  setModalCard,
  isShowAlert,
}) => {
  return (
    <Modal
      open={modalCard.isOpen}
      onClose={() =>
        setModalCard({
          isOpen: !modalCard.isOpen,
          imageUrl: "",
          rate: 0,
        })
      }
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{ backgroundColor: "rgb(0 0 0 / 84%)" }}
    >
      <Box style={{ height: "fit-content", display: "flex" }}>
        <div className={styles.main}>
          <div className={styles.wrapperText}>
            {isShowAlert ? (
              <>
                <img
                  className={styles.imagesicon}
                  src="/images/vector.svg"
                  alt="/images/vector.svg"
                />
                <h6 className={styles.colortext}>ดำเนินการซื้อสำเร็จ</h6>
                <p>กาชาปองเป็นของคุณแล้ว</p>
                <h5 className={styles.colortext2}>
                  ระดับความหายาก คือ {modalCard.rate * 100}%
                </h5>
              </>
            ) : (
              <h5 className={styles.colortext2}>
                ระดับความหายาก คือ {modalCard.rate * 100}%
              </h5>
            )}
            <img
              className={styles.imagesT}
              src={modalCard.imageUrl}
              alt={modalCard.imageUrl}
            />
          </div>
        </div>
      </Box>
    </Modal>
  );
};

GachaponOpenCardPage.defaultProps = {};

export default GachaponOpenCardPage;
