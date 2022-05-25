import { styled } from "@mui/material";

export const LoginFormWrapper = styled("form")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;

  gap: ${({ theme }) => theme.spacing(2)};
  ${({ theme }) => theme.breakpoints.up("lg")} {
    max-width: 616px;
    gap: ${({ theme }) => theme.spacing(1)};
  }
`;

export const ActionsSection = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  align-self: stretch;
  margin-top: ${({ theme }) => theme.spacing(1)};

  ${({ theme }) => theme.breakpoints.up("lg")} {
    justify-content: flex-end;
  }
`;
