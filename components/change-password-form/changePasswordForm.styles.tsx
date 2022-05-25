import { styled } from "@mui/material";

export const ChangePasswordFormWrapper = styled("form")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  max-width: 616px;

  gap: ${({ theme }) => theme.spacing(2)};
`;

export const ChangePasswordActionWrapper = styled("div")`
  align-self: stretch;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.spacing(2)};
`;
