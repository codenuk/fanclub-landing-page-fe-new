/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import styles from "./index.module.scss";
import {
  ContentWrapper,
  GachaponModal,
  GachaponOpenCard,
  LoadingModal,
} from "../../components";
import {
  useBuyGashapon,
  useGashaponCollectionInfo,
  useUserInfo,
  useAuth,
} from "../../hooks";
import { useSelector } from "react-redux";
import { ICombineReducers } from "../../redux/reducers";
import { useRouter } from "next/router";

type GashaponProps = {};

const Gashapon: React.FC<GashaponProps> = () => {
  const { isAuth, isInit } = useAuth();
  const router = useRouter();

  const {
    data: gashaponCollectionInfo,
    loading,
    refetch: refetchGashaponCollectionInfo,
  } = useGashaponCollectionInfo("collection01");

  const { updateBuyGashapon, loading: loadingBuyGashapon } = useBuyGashapon(
    (res) => {
      if (res.res_code === "00") {
        refetchUserInfo();
        refetchGashaponCollectionInfo();
        setModalBuyGashapon(!modalBuyGashapon);
        setModalCard({
          isOpen: !modalCard.isOpen,
          imageUrl: res.gashapon[0].gashaponImageUrl,
          rate: res.gashapon[0].rate,
        });
      } else {
        setMsgErrModalBuyGashapon(res.res_desc);
      }
    },
    (error) => {
      console.log("error", error);
    }
  );

  const [modalBuyGashapon, setModalBuyGashapon] = useState(false);
  const [modalMsgErrBuyGashapon, setMsgErrModalBuyGashapon] = useState("");

  const [modalCard, setModalCard] = useState({
    isOpen: false,
    imageUrl: "",
    rate: 0,
  });

  const handleBuyGashapon = async () => {
    await updateBuyGashapon({
      collectionID: "collection01",
      amount: 1,
    });
  };

  const { refetchUserInfo } = useUserInfo();
  const userInfoRedux = useSelector(
    (state: ICombineReducers) => state.userInfoReducer.userInfo
  );

  return (
    <ContentWrapper>
      <LoadingModal open={loading} />
      <h1 className={styles.main}>Mystery Box</h1>
      <div className={styles.main}>
        <img
          src="/images/gashapon.png"
          className={styles.image}
          alt="/images/gashapon.png"
        />
        <div className={styles.wrapperText}>
          <h5 className={styles.row}>
          กดเลย! แลกรับรูปคอลเลกชัน Wish Me Random Card “Wish me Limited Edition Card” 
only 29,000 pcs.
          </h5>
          <div className={styles.icon}>
            <img src="/images/icon-gashapon.svg" alt="/images/gashapon.svg" />
            <p className={styles.detill}>Wish Me</p>
          </div>
          <p className={styles.detill}>
          Period: 1 Jun 2022 - 1 Dec 2022
          </p>
          {/* <p className={styles.detill}>ระดับความหายาก</p> */}
          {!isAuth && isInit ? (
            <button
              onClick={() => router.push("/login")}
              className={styles.customButton}
              type="button"
            >
              Login
            </button>
          ) : (
            <button
              onClick={() => setModalBuyGashapon(!modalBuyGashapon)}
              className={styles.customButton}
              type="button"
            >
Random Now!
            </button>
          )}
        </div>
      </div>

      <GachaponModal
        tokenBalance={userInfoRedux?.walletBalance?.tokenBalance}
        modalMsgErrBuyGashapon={modalMsgErrBuyGashapon}
        loadingBuyGashapon={loadingBuyGashapon}
        gashaponCollectionInfo={gashaponCollectionInfo}
        modalBuyGashapon={modalBuyGashapon}
        setModalBuyGashapon={setModalBuyGashapon}
        handleBuyGashapon={handleBuyGashapon}
      />
      <GachaponOpenCard
        isShowAlert={true}
        modalCard={modalCard}
        setModalCard={setModalCard}
      />
    </ContentWrapper>
  );
};

Gashapon.defaultProps = {};

export default Gashapon;
