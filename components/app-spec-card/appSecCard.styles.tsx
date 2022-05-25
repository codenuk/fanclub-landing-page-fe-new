import { Card, styled, Typography } from "@mui/material";
import { animated } from "react-spring";

export const AppSpecCardWrapper = styled(animated(Card))`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(3, 4, 8)};

  flex: 1;
  min-width: 300px;
`;

export const SpecHeader = styled(Typography)`
  margin-top: ${({ theme }) => theme.spacing(3)};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  text-align: center;
`;

export const SpecDescription = styled(Typography)`
  text-align: center;
`;
