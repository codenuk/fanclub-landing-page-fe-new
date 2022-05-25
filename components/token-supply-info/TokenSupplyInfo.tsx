import { Box, Typography } from "@mui/material";
import React from "react";

type TokenSupplyInfoProps = {
  color: string;
  title: string;
  value: string;
};

const TokenSupplyInfo: React.FC<TokenSupplyInfoProps> = ({
  color,
  title,
  value,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
      }}
    >
      <Box sx={{ display: "flex", gap: 2 }}>
        <Box
          sx={{
            width: 24,
            height: 24,
            backgroundColor: color,
            borderRadius: "50%",
          }}
        />
        <Typography variant="body1">{title}</Typography>
      </Box>
      <Typography variant="body1" fontWeight="bold">
        {value}
      </Typography>
    </Box>
  );
};

TokenSupplyInfo.defaultProps = {};

export default TokenSupplyInfo;
