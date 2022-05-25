import { Box, Button, SxProps } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { PageLayout } from "..";
import { SettingLayoutWrapper } from "./settingLayout.styles";

type SettingLayoutProps = {
  sx?: SxProps;
  showBackButton?: boolean;
};

const SettingLayout: React.FC<SettingLayoutProps> = ({
  children,
  sx,
  showBackButton,
}) => {
  const router = useRouter();
  return (
    <PageLayout>
      <SettingLayoutWrapper sx={sx}>{children}</SettingLayoutWrapper>
      <Box
        sx={{
          width: "100%",
          backgroundColor: (theme) => theme.palette.primary.main,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: (theme) => theme.spacing(2),
        }}
      >
        {showBackButton && (
          <Button
            color="inherit"
            sx={{
              minWidth: "300px",
              marginBottom: (theme) => theme.spacing(4),
            }}
            onClick={() => router.back()}
          >
            Back
          </Button>
        )}
      </Box>
    </PageLayout>
  );
};

SettingLayout.defaultProps = {
  showBackButton: false,
};

export default SettingLayout;
