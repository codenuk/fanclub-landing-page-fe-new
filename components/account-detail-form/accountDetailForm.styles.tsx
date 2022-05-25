import { styled } from "@mui/material";

export const AccountDetailFormWrapper = styled("form")`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "firstName lastName" "email email"
    "phoneNumber phoneNumber" "birthDay birthDay" "actions actions";

  gap: ${({ theme }) => theme.spacing(3)};

  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-areas:
      "firstName firstName" "lastName lastName" "email email"
      "phoneNumber phoneNumber" "birthDay birthDay" "actions actions";
  }

  & {
    #name {
      grid-area: firstName;
    }

    #surname {
      grid-area: lastName;
    }

    #email {
      grid-area: email;
    }

    #phoneNumber {
      grid-area: phoneNumber;
    }

    #birthday {
      grid-area: birthDay;
    }
  }
`;

export const AccountDetailActionsWrapper = styled("div")`
  grid-area: actions;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.spacing(2)};
`;
