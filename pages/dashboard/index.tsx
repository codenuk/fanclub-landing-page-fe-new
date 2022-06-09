import React, { useEffect } from "react";
import { ContentWrapper, LoadingModal, PrimaryLine } from "../../components";
import { PageLayout } from "../../layouts";
import { NextPageWithLayout } from "../_app";
import { useDashboard, useAuth } from "../../hooks";
import { useRouter } from "next/router";

const DashboardPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { isAuth, isInit } = useAuth();

  const {
    data: gashaponCollectionInfo,
    loading,
    refetch,
  } = useDashboard(
    "collection01",
    "CAMPAIGN_U2F0IE1hciWaNSAyMDIyIDE3OjMwOjUzIEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=",
    "CAMPAIGN_U2F0IE1hciAwNSAyMDIyIDE3OjMwOjUzIEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=",
    "CAMPAIGN_RnJpIEFwciAwMSAyMDIyIDA0OjQwOjM3IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk="
  );

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
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <h4>จำนวนผู้ใช้งานทั้งหมด: </h4>
        <h3>{numberFormmater(gashaponCollectionInfo?.userCount)}</h3>
      </div>

      <PrimaryLine />

      <h4>Campaign 400 Coins (Special Code)</h4>
      <div style={{ marginLeft: "20px" }}>
        <h3>
          {numberFormmater(
            gashaponCollectionInfo?.campaign?.airdrop.accumulatedRedeem
          )}{" "}
          /{" "}
          {numberFormmater(
            gashaponCollectionInfo?.campaign?.airdrop.budgetMaximum
          )}
        </h3>
      </div>

      <PrimaryLine />

      <h4>Campaign 100 Coins (Register To Earn)</h4>
      <div style={{ marginLeft: "20px" }}>
        <h3>
          {numberFormmater(
            gashaponCollectionInfo?.campaign?.registerToEarn.accumulatedRedeem
          )}{" "}
          /{" "}
          {numberFormmater(
            gashaponCollectionInfo?.campaign?.registerToEarn.budgetMaximum
          )}
        </h3>
      </div>

      <PrimaryLine />

      <h4>Campaign 25 Coins (Referral To Earn)</h4>
      <div style={{ marginLeft: "20px" }}>
        <h3>
          {numberFormmater(
            gashaponCollectionInfo?.campaign?.referralEarnOnlyInviter
              .accumulatedRedeem
          )}{" "}
          /{" "}
          {numberFormmater(
            gashaponCollectionInfo?.campaign?.referralEarnOnlyInviter
              .budgetMaximum
          )}
        </h3>
      </div>

      <PrimaryLine />

      <h4>Gashapon</h4>
      <div style={{ marginLeft: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <h4>Rate 10%: </h4>
          <h3>
            {numberFormmater(gashaponCollectionInfo?.gashapon?.[0].amount)} /
            800
          </h3>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <h4>Rate 20%: </h4>
          <h3>
            {numberFormmater(gashaponCollectionInfo?.gashapon?.[1].amount)} /
            3,000
          </h3>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <h4>Rate 30%: </h4>
          <h3>
            {numberFormmater(gashaponCollectionInfo?.gashapon?.[2].amount)} /
            5,200
          </h3>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <h4>Rate 40%: </h4>
          <h3>
            {numberFormmater(gashaponCollectionInfo?.gashapon?.[3].amount)} /
            20,000
          </h3>
        </div>
      </div>

      <PrimaryLine />
    </ContentWrapper>
  );
};

DashboardPage.getLayout = (page) => <PageLayout>{page}</PageLayout>;

export default DashboardPage;
