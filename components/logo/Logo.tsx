import { Box } from "@mui/material";
import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { LogoImage } from "./logo.styles";

type LogoProps = {};

const Logo: React.FC<LogoProps> = () => {
  const router = useRouter();

  const handleClickLogo = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <Box
      sx={{
        minWidth: {
          xs: "150px",
          lg: "189px",
        },
        height: "100%",
      }}
    >
      <LogoImage
        onClick={handleClickLogo}
        src={"/images/logo.png"}
        width="253"
        height="47"
        alt="logo"
        layout="responsive"
      />
    </Box>
  );
};

Logo.defaultProps = {
  onBackground: false,
};

export default Logo;
