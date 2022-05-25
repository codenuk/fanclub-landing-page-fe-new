import { Card, IconButton, styled } from "@mui/material";

export const MessageModalWrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const MessageModalBox = styled(Card)`
  min-width: 300px;
  height: 200px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  gap: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const CloseButton = styled(IconButton)`
  position: absolute;
  right: ${({ theme }) => theme.spacing(2)};
  top: ${({ theme }) => theme.spacing(2)};
`;
