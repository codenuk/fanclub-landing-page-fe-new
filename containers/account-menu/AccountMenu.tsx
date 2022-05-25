import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { AccountMenu } from "../../components/account-menu";
import { useAuth, useTranslation } from "../../hooks";
import commoni18n from "../../i18n/common.i18n";
import {
  AccountMenuWrapper,
  LogInButton,
  registerBoxStyles,
  VerticalDivider,
} from "./accountMenu.styles";

type AccountMenuContainerProps = {};

const AccountMenuContainer: React.FC<AccountMenuContainerProps> = () => {
  const { isAuth } = useAuth();
  const router = useRouter();
  const { translate } = useTranslation(commoni18n);

  const handleLogIn = useCallback(() => {
    router.push("/login");
  }, [router]);

  const handleRegister = useCallback(() => {
    router.push("/sign-up");
  }, [router]);

  return isAuth ? (
    <AccountMenu />
  ) : (
    <AccountMenuWrapper>
      <Box sx={registerBoxStyles}>
        <Button sx={{ color: "white" }} onClick={handleRegister} variant="text">
          {translate("REGISTER")}
        </Button>
        <VerticalDivider />
      </Box>
      <LogInButton onClick={handleLogIn}>{translate("LOGIN")}</LogInButton>
    </AccountMenuWrapper>
  );
};

AccountMenuContainer.defaultProps = {};

export default AccountMenuContainer;
