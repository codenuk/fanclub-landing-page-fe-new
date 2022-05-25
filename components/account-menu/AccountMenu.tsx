import { Menu, MenuItem, Typography } from "@mui/material";
import React, { useCallback } from "react";
import {
  AccountMenuWrapper,
  ProfileImage,
  ProfileImageWrapper,
  StarBox,
  StarButton,
} from "./accountMenu.styles";

import { useAuth, useUserInfo } from "../../hooks";
import { useRouter } from "next/router";
import Image from "next/image";
import { formatNumber } from "../../utils/number-utils";
import { useSelector } from "react-redux";
import { ICombineReducers } from "../../redux/reducers";

type AccountMenuProps = {};

const AccountMenu: React.FC<AccountMenuProps> = () => {
  useUserInfo();
  const userInfoRedux = useSelector(
    (state: ICombineReducers) => state.userInfoReducer.userInfo
  );

  const { logOut } = useAuth();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = useCallback(
    (url: string) => () => {
      router.push(url);
      handleClose();
    },
    [router]
  );

  const handleLogout = useCallback(() => {
    logOut();
    handleClose();
  }, [logOut]);

  return (
    <>
      <AccountMenuWrapper>
        <StarButton>
          <StarBox>
            <Image
              src="/images/star.png"
              width="20"
              height="20"
              layout="fixed"
              alt="start-icon"
            />
          </StarBox>
          <Typography variant="body1">
            {userInfoRedux?.walletBalance?.tokenBalance
              ? formatNumber(userInfoRedux?.walletBalance?.tokenBalance)
              : "0.00"}
          </Typography>
        </StarButton>
        <ProfileImageWrapper onClick={handleClick}>
          <ProfileImage src="/images/profile-image.svg"/>
        </ProfileImageWrapper>
      </AccountMenuWrapper>
      <Menu
        anchorEl={anchorEl}
        sx={{ marginTop: 2 }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleNavigate("/account")}>Account</MenuItem>
        <MenuItem onClick={handleNavigate("/wallet")}>Wallet</MenuItem>
        <MenuItem onClick={handleNavigate("/my-item")}>My Item</MenuItem>
        <MenuItem onClick={handleNavigate("/change-password")}>
          Change Password
        </MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
};

AccountMenu.defaultProps = {};

export default AccountMenu;
