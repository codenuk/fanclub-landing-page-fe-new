import { Button, styled, SxProps } from "@mui/material";

export const AccountMenuWrapper = styled("div")`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  gap: ${({ theme }) => theme.spacing(2)};

  ${({ theme }) => theme.breakpoints.down("sm")} {
    justify-content: flex-start;
  }
`;

export const VerticalDivider = styled("div")`
  width: 1px;
  align-self: stretch;
  background-color: ${({ theme }) => theme.palette.grey["400"]};
`;

export const navBarRightSection: SxProps = {
  display: "flex",
  gap: 2,
};

export const registerBoxStyles: SxProps = {
  display: {
    xs: "none",
    sm: "flex",
  },
  gap: 2,
};

export const LogInButton = styled(Button)`
  background-color: ${({ theme }) => theme.palette.common.white};
  color: ${({ theme }) => theme.palette.common.black};

  &:hover {
    background-color: ${({ theme }) => theme.palette.common.white};
  }
`;
