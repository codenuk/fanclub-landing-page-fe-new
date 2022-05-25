import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { DataGrid, GridColDef, GridRow } from "@mui/x-data-grid";
import Image from "next/image";
import React, { useMemo } from "react";
import { AddressBox, ContentWrapper } from "../../components";
import { TransactionTableWrapper } from "./transactionTable.styles";

type TransactionTableProps = {
  list: any[];
  loading?: boolean;
  enableLoadmore?: boolean;
  onLoadMore?: () => void;
};

const TransactionTable: React.FC<TransactionTableProps> = ({
  list,
  loading,
  onLoadMore,
  enableLoadmore,
}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const columns: GridColDef[] = useMemo(
    () => [
      {
        field: "dateTime",
        align: "center",
        headerAlign: "center",
        headerName: "Datetime",
        flex: 1,
        minWidth: 200,
      },
      ...((matches
        ? [
            {
              field: "type",
              headerName: "Transaction Type",
              flex: 1,
              align: "center",
              headerAlign: "center",
            },
          ]
        : []) as any),
      {
        field: "amount",
        headerName: "Amount",
        flex: 1,
        align: "center",
        headerAlign: "center",
        renderCell: ({ value }: any) => (
          <>
            {value}
            <Image
              src="/images/fandomCoin.png"
              width="34"
              height="34"
              alt="fandomCoin"
            />
          </>
        ),
      },
      ...(matches
        ? [
            {
              field: "fromAddress",
              headerName: "From (Address)",
              flex: 1,
              minWidth: 100,
              renderCell: ({ value }: any) => <AddressBox address={value} />,
              align: "center",
              headerAlign: "center",
            },
            {
              field: "toAddress",
              headerName: "To (Address)",
              flex: 1,
              minWidth: 100,
              renderCell: ({ value }: any) => <AddressBox address={value} />,
              align: "center",
              headerAlign: "center",
            },
          ]
        : []),
      // {
      //   field: "block",
      //   headerName: "Block (Height)",
      //   flex: 1,
      //   align: "center",
      //   headerAlign: "center",
      // },
      // {
      //   field: "status",
      //   headerName: "Status",
      //   flex: 1,
      //   align: "center",
      //   headerAlign: "center",
      // },
    ],
    [matches]
  );

  return (
    <ContentWrapper sx={{ minHeight: "750px", paddingBottom: 1 }}>
      <TransactionTableWrapper>
        <Typography variant="h5">Transaction History</Typography>
        <DataGrid
          loading={loading}
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
          getRowId={(row) => row.block}
          rows={list}
          components={{
            Row: (props) => {
              if (list.length === props.index + 1) {
                return (
                  <>
                    <GridRow {...props} />
                    {enableLoadmore && (
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
                        <Button onClick={onLoadMore} sx={{ minWidth: 120 }}>
                          Load More
                        </Button>
                      </Box>
                    )}
                  </>
                );
              }
              return <GridRow {...props} />;
            },
          }}
          columns={columns}
          hideFooter
        />
      </TransactionTableWrapper>
    </ContentWrapper>
  );
};

TransactionTable.defaultProps = {
  loading: false,
  enableLoadmore: false,
  onLoadMore: () => {},
};

export default TransactionTable;
