import { styled } from "@mui/material";

export const AccountMenuWrapper = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  gap: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const StarButton = styled("div")`
  border: 1px solid ${({ theme }) => theme.palette.secondary.main};
  border-radius: 50px;
  height: 44px;
  width: 168px;
  border: 1px solid #a355f2;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${({ theme }) => theme.palette.common.white};
  padding-left: 0;
  padding-right: ${({ theme }) => theme.spacing(2)};

  ${({ theme }) => theme.breakpoints.down("md")} {
    display: none;
  }
`;

export const ExpireDate = styled("p") `
  color: white;
  font-size: 12px;
  width: fit-content;
  position: absolute; 
  right: 20%; 
  bottom: -50%;

  ${({ theme }) => theme.breakpoints.down("md")} {
    display: none;
  }
`

export const StarBox = styled("div")`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid #a355f2;

  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.palette.common.white};
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const ProfileImageWrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 64px;
  height: 64px;
  background-color: ${({ theme }) => theme.palette.common.white};
  border: 2px solid ${({ theme }) => theme.palette.common.white};

  border-radius: 50%;
  overflow: hidden;

  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.customTheme.colors.hoverBackground.main};
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    width: 40px;
    height: 40px;
  }
`;

export const ProfileImage = styled("img")`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;
