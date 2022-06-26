import React, { useEffect, useMemo, useState } from "react";
import { ContentWrapper, LoadingModal, ChartDashboard } from "../../components";
import { PageLayout } from "../../layouts";
import { NextPageWithLayout } from "../_app";
import { useDashboard, useAuth, useDashboardCoinOnhand } from "../../hooks";
import { useRouter } from "next/router";
import styles from "./index.module.scss";
import { formatDateWithoutTime } from "../../utils/date-utils";
import dayjs from "dayjs";
import { CircularProgress } from "@mui/material";

const DashboardPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { isAuth, isInit } = useAuth();
  const [period, setPeriod] = useState({
    startDate: dayjs().subtract(7, "day").toISOString().split('T')[0],
    endDate: dayjs().toISOString().split('T')[0],
  });

  const {
    data: gashaponCollectionInfo,
    loading,
    refetch,
  } = useDashboard(
    "collection01",
    "CAMPAIGN_U2F0IE1hciWaNSAyMDIyIDE3OjMwOjUzIEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=",
    "CAMPAIGN_U2F0IE1hciAwNSAyMDIyIDE3OjMwOjUzIEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=",
    "CAMPAIGN_RnJpIEFwciAwMSAyMDIyIDA0OjQwOjM3IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=",
    period.startDate,
    period.endDate
  );

  const { coinOnhand, loading: loadingCoin } = useDashboardCoinOnhand();

  useEffect(() => {
    if (
      gashaponCollectionInfo?.res_code === "98" ||
      gashaponCollectionInfo?.res_code === "99" ||
      (!gashaponCollectionInfo && !loading)
    ) {
      router.push("/");
    }
  }, [gashaponCollectionInfo?.res_code, loading]);

  useEffect(() => {
    if (!isAuth && isInit) {
      router.replace("/");
    }
  }, [isAuth, router, isInit]);

  const numberFormmater = (num: number = 0) =>
    Number(num).toLocaleString("en-Us");

  const ScoreData: {
    labels: string[];
    dataEarn: number[];
    dataRedeem: number[];
  } = useMemo(() => {
    const labels: string[] = [];
    const dataEarn: number[] = [];
    const dataRedeem: number[] = [];
    gashaponCollectionInfo?.dayListTransaction.map((data: any) => {
      labels.push(formatDateWithoutTime(data.date));
      dataEarn.push(data.amountEarn);
      dataRedeem.push(data.amountRedeem * -1);
    });
    return {
      labels: labels,
      dataEarn: dataEarn,
      dataRedeem: dataRedeem,
    };
  }, [gashaponCollectionInfo]);

  return (
    <ContentWrapper
      sx={{
        minHeight: "70vh",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        padding: "50px 0",
        gap: "20px",
      }}
    >
      <LoadingModal open={loading} />
      <h2>Dashboard</h2>
      <div className={styles.row}>
        <div className={styles.flex50}>
          <div className={styles.smallBox}>
            <h6>จำนวนผู้ใช้งานทั้งหมด</h6>
            <h3>{numberFormmater(gashaponCollectionInfo?.userCount)}</h3>
            <h5>คน</h5>
          </div>
          <div className={styles.smallBox}>
            <h6>Coins ทั้งหมด</h6>
            <h3>
              {numberFormmater(coinOnhand)}{" "}
              {loadingCoin && <CircularProgress />}
            </h3>
            <h5>Coins</h5>
          </div>
        </div>

        <div className={styles.flex50}>
          <div className={styles.largeBox}>
            <h6>Mystery Box</h6>
            <div
              className={styles.row}
              style={{ justifyContent: "space-between" }}
            >
              {[
                {
                  rate: 10,
                  amount: gashaponCollectionInfo?.gashapon?.[0].amount,
                  max: 800,
                },
                {
                  rate: 20,
                  amount: gashaponCollectionInfo?.gashapon?.[1].amount,
                  max: 3000,
                },
                {
                  rate: 30,
                  amount: gashaponCollectionInfo?.gashapon?.[2].amount,
                  max: 5200,
                },
                {
                  rate: 40,
                  amount: gashaponCollectionInfo?.gashapon?.[3].amount,
                  max: 20000,
                },
              ].map((data, index) => (
                <div className={styles.groupProgressBar} key={index}>
                  <div className={styles.greyProgress}>
                    <p>{(data.amount * 100) / data.max}%</p>
                    <div
                      className={styles.greenProgress}
                      style={{
                        height: `${(data.amount * 100) / data.max}%`,
                      }}
                    ></div>
                  </div>
                  <p className={styles.rate}>Rate {data.rate}%</p>
                  <p className={styles.amount}>
                    {numberFormmater(data.amount)}/{numberFormmater(data.max)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.flex50}>
          <div
            className={styles.largeBox}
            style={{ backgroundColor: "#fbfbfb" }}
          >
            <h6>Campaign</h6>
            {[
              {
                name: "Campaign 400 Coins (Special Code)",
                amount:
                  gashaponCollectionInfo?.campaign?.airdrop.accumulatedRedeem,
                max: gashaponCollectionInfo?.campaign?.airdrop.budgetMaximum,
              },
              {
                name: "Campaign 100 Coins (Register to earn)",
                amount:
                  gashaponCollectionInfo?.campaign?.registerToEarn
                    .accumulatedRedeem,
                max: gashaponCollectionInfo?.campaign?.registerToEarn
                  .budgetMaximum,
              },
              {
                name: "Campaign 25 Coins (Referral to earn)",
                amount:
                  gashaponCollectionInfo?.campaign?.referralEarnOnlyInviter
                    .accumulatedRedeem,
                max: gashaponCollectionInfo?.campaign?.referralEarnOnlyInviter
                  .budgetMaximum,
              },
            ].map((data, index) => (
              <div key={index} className={styles.groupProgressBarCampaign}>
                <p>{data.name}</p>
                <div className={styles.greyProgress}>
                  <div
                    className={styles.greenProgress}
                    style={{ width: `${(data.amount * 100) / data.max}%` }}
                  ></div>
                </div>
                <p className={styles.flexEnd}>
                  {numberFormmater(data.amount)}/{numberFormmater(data.max)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.flex50}>
          <div
            className={styles.largeBox}
            style={{ backgroundColor: "#fbfbfb" }}
          >
            <div className={styles.row}>
              <h6>Campaign</h6>

              <input type={"date"} onChange={(e) => setPeriod({...period, startDate: e.target.value})} value={period.startDate} />
              <input type={"date"} onChange={(e) => setPeriod({...period, endDate: e.target.value})} value={period.endDate} />
              
            </div>
            <ChartDashboard
              labels={ScoreData.labels}
              dataEarn={ScoreData.dataEarn}
              dataRedeem={ScoreData.dataRedeem}
            />
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

DashboardPage.getLayout = (page) => <PageLayout>{page}</PageLayout>;

export default DashboardPage;
