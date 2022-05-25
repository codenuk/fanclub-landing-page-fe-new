import { useTheme } from "@mui/material";
import React, { useMemo } from "react";
import { StatusBoxWrapper } from "./statusBox.styles";

export enum TransactionStatus {
  PENDING = 1,
  APPROVE = 2,
}

type StatusBoxProps = {
  status: TransactionStatus;
};

const LABEL_MAPPING = {
  [TransactionStatus.PENDING]: "Pending",
  [TransactionStatus.APPROVE]: "Approved",
};

const StatusBox: React.FC<StatusBoxProps> = ({ status }) => {
  const { palette } = useTheme();

  const backgroundColor = useMemo(() => {
    switch (status) {
      case TransactionStatus.PENDING:
        return palette.warning.main;
      case TransactionStatus.APPROVE:
        return palette.success.main;
      default:
        return palette.primary.main;
    }
  }, [
    palette.primary.main,
    palette.success.main,
    palette.warning.main,
    status,
  ]);

  return (
    <StatusBoxWrapper
      sx={{
        backgroundColor: `${backgroundColor}44`,
        color: backgroundColor,
        fontWeight: "bold",
      }}
    >
      {LABEL_MAPPING[status]}
    </StatusBoxWrapper>
  );
};

StatusBox.defaultProps = {};

export default StatusBox;
