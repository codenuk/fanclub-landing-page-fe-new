import { Divider, styled, SxProps, Typography } from "@mui/material";
import theme from "../../configs/theme";

export const NavbarWrapper = styled("nav")`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 2;
  background-color: ${({ theme }) => theme.palette.primary.main};

  padding: ${({ theme }) => theme.spacing(2)};
`;

export const MenuGroup = styled("ul")`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(4)};

  list-style: none;

  a {
    color: ${({ theme }) => theme.palette.common.white};
  }
`;

export const NavSection = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const contentWrapperStyles: SxProps = {
  display: "flex",
  flexDirection: {
    xs: "row",
  },
  justifyContent: {
    xs: "space-between",
  },
  alignItems: "center",
};

export const menuBoxStyles: SxProps = {
  display: {
    xs: "none",
    sm: "block",
  },
};

export const drawerBoxStyles: SxProps = {
  display: {
    xs: "flex",
    sm: "none",
  },
};

export const drawerStyles: SxProps = {
  minWidth: "100vw",
  flexDirection: "column",
  paddingTop: `${theme.customTheme.constants.NAVBAR_HEIGHT}px`,
  alignItems: "center",
  backgroundColor: "primary.main",
  height: "100%",

  textAlign: "center",
};

export const linkButtonStyles: SxProps = {
  paddingTop: 2,
  paddingBottom: 2,

  color: "white",
};

export const DrawerGroupTitle = styled(Typography)`
  text-align: left;
  color: ${({ theme }) => theme.palette.common.white};

  padding-top: ${({ theme }) => theme.spacing(3)};
`;

export const DrawerActionWrapper = styled("div")`
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const SecondaryDivider = styled(Divider)`
  background-color: #a355f2;
`;
