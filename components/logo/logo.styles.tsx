import { Typography } from "@mui/material";
import { styled } from "@mui/material";
import Image from "next/image";

export const LogoText = styled(Typography)`
  font-weight: 400;
  font-size: ${({ theme }) => theme.spacing(4)};
  color: ${({ theme }) => theme.palette.primary.main};
`;

export const LogoImage = styled(Image)`
  cursor: pointer;
`;
