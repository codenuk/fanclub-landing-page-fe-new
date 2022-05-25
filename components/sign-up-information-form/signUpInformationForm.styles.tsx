import { styled } from "@mui/material";

export const SignUpInformationWrapper = styled("form")`
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

export const NameFieldsWrapper = styled("div")`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: stretch;

  margin-top: ${({ theme }) => theme.spacing(2)};
`;

export const ViaEmail = styled("p")`
  font-size: 13px;
  margin: 0;
  display: none;
  ${({ theme }) => theme.breakpoints.up("lg")} {
    display: block;
  }
`;

export const ViaEmailMobile = styled("p")`
  font-size: 13px;
  margin: 0;
  display: block;
  margin: 0 auto;
  
  ${({ theme }) => theme.breakpoints.up("lg")} {
    display: none;
  }
`;
