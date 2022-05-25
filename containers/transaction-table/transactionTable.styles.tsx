import { Card, styled, SxProps } from "@mui/material";

export const TransactionTableWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  padding: ${({ theme }) => theme.spacing(2)};

  overflow-x: auto;

  width: 100%;
  height: 100%;
  min-height: 750px;

  align-self: stretch;
`;

export const TransactionTableContenWrapperStyles: SxProps = {};
