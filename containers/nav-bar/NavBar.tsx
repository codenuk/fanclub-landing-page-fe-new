import {
  Box,
  Button,
  Drawer,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import React, {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import { AccountMenu } from "..";
import { ContentWrapper } from "../../components";
import Logo from "../../components/logo/Logo";
import { useAuth, useTranslation, useUserInfo } from "../../hooks";
import commoni18n from "../../i18n/common.i18n";
import {
  contentWrapperStyles,
  DrawerActionWrapper,
  drawerBoxStyles,
  DrawerGroupTitle,
  drawerStyles,
  linkButtonStyles,
  menuBoxStyles,
  MenuGroup,
  NavbarWrapper,
  NavSection,
  SecondaryDivider,
} from "./navbar.styles";
import MenuIcon from "@mui/icons-material/Menu";
import { navBarRightSection } from "../account-menu/accountMenu.styles";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/router";
import { navMenuConfigs, personalMenuConfigs } from "../../configs/menu";
import {
  StarBox,
  StarButton,
} from "../../components/account-menu/accountMenu.styles";
import { formatNumber } from "../../utils/number-utils";
import Image from "next/image";
import { useSelector } from "react-redux";
import { ICombineReducers } from "../../redux/reducers";

type NavBarProps = {};

const NavBar: React.FC<NavBarProps> = () => {
  useUserInfo()
  const userInfoRedux = useSelector(
    (state: ICombineReducers) => state.userInfoReducer.userInfo
  );

  const { isAuth, logOut } = useAuth();
  const router = useRouter();

  const { customTheme } = useTheme();
  const [showMenu, setShowMenu] = useState(false);

  const { translate } = useTranslation(commoni18n);

  const handleToggleMenu = useCallback(() => {
    setShowMenu((prev) => !prev);
  }, []);

  const handleCloseMenu = useCallback(() => {
    setShowMenu(false);
  }, []);

  const handleClickMenu = useCallback(
    (url: string) => () => {
      router.push(url);
      handleCloseMenu();
    },
    [handleCloseMenu, router]
  );

  const handleLogOut = useCallback(() => {
    handleCloseMenu();
    logOut();
  }, [handleCloseMenu, logOut]);

  const desktopMenu = useMemo(() => {
    if (isAuth) {
      return navMenuConfigs(translate);
    }
    return navMenuConfigs(translate).filter((menu) => !menu?.protected);
  }, [isAuth, translate]);

  const personalMenu = useMemo(() => {
    if (isAuth) {
      return personalMenuConfigs(translate);
    }
    return [];
  }, [isAuth, translate]);

  useEffect(() => {
    if (router.pathname) {
      setShowMenu(false);
    }
  }, [router]);

  return (
    <NavbarWrapper sx={{ height: customTheme.constants.NAVBAR_HEIGHT }}>
      <ContentWrapper sx={contentWrapperStyles}>
        <NavSection>
          <Logo />
          <Box sx={menuBoxStyles}>
            <MenuGroup>
              {desktopMenu.map((menu) => (
                <li key={menu.path}>
                  <Link href={menu.path}>{menu.title}</Link>
                </li>
              ))}
            </MenuGroup>
          </Box>
        </NavSection>
        <Box sx={navBarRightSection}>
          <AccountMenu />
          <Box sx={drawerBoxStyles}>
            <IconButton onClick={handleToggleMenu} sx={{ color: "white" }}>
              {showMenu ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <Drawer
              sx={{
                zIndex: 1,
                backgroundColor: "primary.main",
              }}
              anchor="right"
              open={showMenu}
              onClose={handleCloseMenu}
            >
              <Box sx={drawerStyles}>
                {isAuth && (
                  <Box
                    sx={{
                      width: "100%",
                      padding: (theme) => theme.spacing(2),
                    }}
                  >
                    <StarButton
                      sx={{
                        display: "flex !important",
                        width: "100%",
                      }}
                    >
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
                  </Box>
                )}

                <SecondaryDivider />
                {desktopMenu.map((menu) => (
                  <Fragment key={menu.path}>
                    <Button
                      onClick={handleClickMenu(menu.path)}
                      fullWidth
                      sx={linkButtonStyles}
                      variant="text"
                    >
                      {menu.title}
                    </Button>
                    <SecondaryDivider />
                  </Fragment>
                ))}

                {isAuth && (
                  <>
                    {personalMenu.map((menu) => (
                      <Fragment key={menu.path}>
                        <Button
                          onClick={handleClickMenu(menu.path)}
                          fullWidth
                          sx={linkButtonStyles}
                          variant="text"
                        >
                          {menu.title}
                        </Button>
                        <SecondaryDivider />
                      </Fragment>
                    ))}
                    <DrawerActionWrapper>
                      <Button
                        sx={{ backgroundColor: "secondary.main" }}
                        onClick={handleLogOut}
                      >
                        Logout
                      </Button>
                    </DrawerActionWrapper>
                  </>
                )}
              </Box>
            </Drawer>
          </Box>
        </Box>
      </ContentWrapper>
    </NavbarWrapper>
  );
};

NavBar.defaultProps = {};

export default NavBar;
