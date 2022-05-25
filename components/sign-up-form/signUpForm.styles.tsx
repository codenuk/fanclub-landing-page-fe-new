import { styled } from "@mui/material";

export const SignUpFormWrapper = styled("form")`
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
