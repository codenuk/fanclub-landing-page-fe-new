import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";
import { useAuth, useDashboardUser } from "../../hooks";
import { SettingLayout } from "../../layouts";
import { NextPageWithLayout } from "../_app";

import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { DataGrid, GridColDef, GridRow } from "@mui/x-data-grid";
import { ContentWrapper, LoadingModal } from "../../components";
import { TransactionTableWrapper } from "../../containers/transaction-table/transactionTable.styles";

import { formatNumber } from "../../utils/number-utils";
import { CSVLink, CSVDownload } from "react-csv";

const ReportUserPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { isAuth, isInit } = useAuth();

  const dateNow = useMemo(() => new Date().toISOString().split("T")[0], []);
  const dateSubtact = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() - 7);

    return date.toISOString().split("T")[0];
  }, []);

  const [filter, setFilter] = useState<any>({
    name: "",
    surname: "",
    email: "",
    startDate: dateSubtact,
    endDate: dateNow,
  });

  const {
    data: userList,
    dashboardUser,
    loading,
    loadMore,
    loadFilter,
    nextToken,
    error,
  } = useDashboardUser(
    filter.name,
    filter.surname,
    filter.email,
    filter.startDate,
    filter.endDate
  );

  useEffect(() => {
    if (!isAuth && isInit) {
      router.replace("/");
    }
  }, [isAuth, router, isInit]);

  useEffect(() => {
    if (
      dashboardUser?.res_code === "98" ||
      dashboardUser?.res_code === "99" ||
      error
    ) {
      router.push("/");
    }
  }, [dashboardUser?.res_code, loading]);

  const columns: GridColDef[] = useMemo(
    () => [
      {
        field: "name",
        align: "center",
        headerAlign: "center",
        headerName: "ชื่อ",
        flex: 1,
        minWidth: 200,
      },
      {
        field: "surname",
        align: "center",
        headerAlign: "center",
        headerName: "นามสกุล",
        flex: 1,
        minWidth: 200,
      },
      {
        field: "email",
        align: "center",
        headerAlign: "center",
        headerName: "Email",
        flex: 1,
        minWidth: 200,
      },
      {
        field: "promoCode",
        align: "center",
        headerAlign: "center",
        headerName: "ref_code",
        flex: 1,
        minWidth: 200,
      },
      {
        field: "balanceCoin",
        align: "center",
        headerAlign: "center",
        headerName: "จำนวน Fandom Coins",
        flex: 1,
        minWidth: 200,
      },
      {
        field: "buyMysteryBox",
        align: "center",
        headerAlign: "center",
        headerName: "จำนวน Coins ที่ซื้อ Mystery Box",
        flex: 1,
        minWidth: 200,
      },
      {
        field: "registerByPromoCode",
        align: "center",
        headerAlign: "center",
        headerName: "Register with ref_code",
        flex: 1,
        minWidth: 200,
      },
      {
        field: "createdAt",
        align: "center",
        headerAlign: "center",
        headerName: "Created At",
        flex: 1,
        minWidth: 200,
      },
    ],
    []
  );

  const list = useMemo(() => {
    if (userList) {
      return userList.map((data: any, index: number) => {
        return {
          userID: index,
          name: data.name,
          surname: data.surname,
          email: data.email,
          balanceCoin: formatNumber(data.walletBalance.tokenBalance),
          buyMysteryBox: formatNumber(data.walletBalance.tokenBuyGashapon),
          createdAt: data.createdAt,
          promoCode: data.promoCode,
          registerByPromoCode: data.registerByPromoCode,
        };
      });
    } else {
      return [];
    }
  }, [userList]);

  const filterList: any = useMemo(
    () => [
      {
        name: "ชื่อ",
        type: "text",
        value: "name",
      },
      {
        name: "นามสกุล",
        type: "text",
        value: "surname",
      },
      {
        name: "Email",
        type: "text",
        value: "email",
      },
      {
        name: "Start Date",
        type: "date",
        value: "startDate",
      },
      {
        name: "End Date",
        type: "date",
        value: "endDate",
      },
    ],
    []
  );

  const [loadAll, setLoadAll] = useState(false);
  const [showBtnDownload, setShowBtnDownload] = useState(false);
  useEffect(() => {
    if (loadAll) {
      if (nextToken) {
        loadMore();
        setShowBtnDownload(true);
      }
    }
  }, [loadAll, nextToken]);

  useEffect(() => {
    loadFilter()
  }, [])

  return (
    <ContentWrapper sx={{ minHeight: "750px", paddingBottom: 1 }}>
      <LoadingModal open={loading} />
      <TransactionTableWrapper>
        <Typography variant="h5">รายงานผู้ลงทะเบียน</Typography>
        <Typography variant="h6">Filter</Typography>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
          {filterList.map((data: any, index: number) => (
            <div style={{ display: "flex", gap: "20px" }} key={index}>
              <p style={{ minWidth: "80px" }}>{data.name}</p>
              <input
                type={data.type}
                value={filter[data.value]}
                onChange={(e: any) =>
                  setFilter({ ...filter, [data.value]: e.target.value })
                }
              />
            </div>
          ))}
        </div>

        <Button
          color="primary"
          sx={{
            minWidth: "150px",
            margin: "10px 0",
          }}
          type="button"
          onClick={loadFilter}
        >
          Search
        </Button>

        {!showBtnDownload ? (
            <button type="button" onClick={() => setLoadAll(true)}>
              Prepare download data
            </button>
          ) : (
            <CSVLink data={list} filename={"report-user.csv"}>
              {"Download me"}
            </CSVLink>
          )}
          
        <DataGrid
          sx={{
            marginTop: 2,
            width: "100%",
            border: 0,
            "& .MuiDataGrid-iconSeparator": {
              display: "none",
            },
            "& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
              border: 0,
            },
          }}
          getRowId={(row) => row.userID}
          rows={list}
          components={{
            Row: (props) => {
              return (
                <>
                  <GridRow {...props} />
                  {!!nextToken && (
                    <Box
                      sx={{
                        position: "absolute",
                        marginTop: (theme) => theme.spacing(2),
                        bottom: (theme) => theme.spacing(-6),
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Button onClick={loadMore} sx={{ minWidth: 120 }}>
                        Load More
                      </Button>
                    </Box>
                  )}
                </>
              );
            },
          }}
          columns={columns}
          initialState={{
            pagination: {
              pageSize: 1000000000,
            },
          }}
          hideFooter
        />
      </TransactionTableWrapper>
    </ContentWrapper>
  );
};

ReportUserPage.getLayout = (page) => (
  <SettingLayout showBackButton>{page}</SettingLayout>
);

export default ReportUserPage;
