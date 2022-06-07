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

export const GroupCheckBox = styled("div")`
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;

export const OpenPopUP = styled("span")`
  cursor: pointer;
  color: #317fbd;
  line-height: 1;

  &:hover {
    border-bottom: 1px solid #317fbd;
  }
`;

