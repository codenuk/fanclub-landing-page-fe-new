/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { ContentWrapper, GachaponOpenCard, LoadingModal } from "../../components";
import styles from "./index.module.scss";
import { useGashaponByUser } from "../../hooks";

type MyGashaponProps = {};

const MyGashapon: React.FC<MyGashaponProps> = () => {
  const [modalCard, setModalCard] = useState({
    isOpen: false,
    imageUrl: "",
    rate: 0
  });
  const { data: gashaponByUserID, loading } = useGashaponByUser();

  return (
    <ContentWrapper>
      <LoadingModal open={loading} />
      <div className={styles.main}>
        <h3 className={styles.textdetill}>My Item</h3>
        <div className={styles.groupImages}>
          {gashaponByUserID?.gashapon ? (
            gashaponByUserID.gashapon.map((data: any, index: number) => {
              return (
                <div key={index}>
                  <img
                    onClick={() =>
                      setModalCard({
                        isOpen: !modalCard.isOpen,
                        imageUrl: data.gashaponImageUrl,
                        rate: data.rate
                      })
                    }
                    src={data.gashaponImageUrl}
                    alt={data.gashaponImageUrl}
                    className={styles.image}
                  />
                </div>
              );
            })
          ) : (
            <h5>คุณยังไม่มี Item</h5>
          )}
        </div>
      </div>

      <GachaponOpenCard
        isShowAlert={false}
        modalCard={modalCard}
        setModalCard={setModalCard}
      />
    </ContentWrapper>
  );
};

MyGashapon.defaultProps = {};

export default MyGashapon;
