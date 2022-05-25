import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import {
  ContentWrapper,
  GradientText,
  PrimaryLine,
  TokenSupplyInfo,
} from "../../components";
import { contentWrapperStyles } from "./tokenSupply.styles";

type TokeSupplyProps = {};

const TokeSupply: React.FC<TokeSupplyProps> = () => {
  return (
    <>
      <GradientText variant="h5" sx={{ marginTop: 4, textAlign: "center" }}>
        Total token issue = 10B tokens <br /> Issue 2B tokens within 5 years
      </GradientText>

      <Box sx={{ marginTop: 2, display: "flex",alignItems: "center", justifyContent: 'center', padding: '20px' }}>
        <Image
          src="/images/token-supply.png"
          width="568"
          height="508"
          layout="intrinsic"
          alt="token-supply"
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: {
            lg: "row",
            xs: "column",
          },
          justifyContent: "space-around",
          alignItems: "center",
          gap: 2,
          padding: 4,
          minHeight: 453,
        }}
      >
        <Box
          sx={{
            position: "relative",
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: {
              xs: 2,
              lg: 0,
            },
            width: {
              xs: "80%",
              lg: "initial",
            },
          }}
        >
          <Image
            src="/images/total-supply-doughnut-chart.png"
            width="453"
            height="453"
            layout="intrinsic"
            alt="token-supply"
          />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: "150%",
                fontWeight: "bold",
                color: "white",
                marginBottom: 2,
              }}
            >
              TOTAL
              <br />
              SUPPLY
            </Typography>
            <PrimaryLine />
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            width: {
              xs: "100%",
              lg: "initial",
            },
            display: "flex",
            justifyContent: {
              xs: "center",
              lg: "flex-start",
            },
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: 500,
              border: "1px solid white",
              padding: 4,
              borderRadius: "5px",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              justifyContent: "center",
            }}
          >
            <TokenSupplyInfo color="#F072C3" title="Airdrop" value="5%" />
            <TokenSupplyInfo
              color="#F63AB2"
              title="Founder & Team"
              value="5%"
            />
            <TokenSupplyInfo color="#CEB4E9" title="Ecosystem" value="10%" />
            <TokenSupplyInfo color="#B984ED" title="Partner" value="10%" />
            <TokenSupplyInfo color="#A355F2" title="Marketing" value="10%" />
            <TokenSupplyInfo color="#FC01A2" title="Sales" value="60%" />
          </Box>
        </Box>
      </Box>
    </>
  );
};

TokeSupply.defaultProps = {};

export default TokeSupply;
