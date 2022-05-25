import { styled, TextField } from "@mui/material";

export const OTPInput = styled(TextField)`
  fieldset {
    border: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }

  input {
    background-color: ${({ theme }) =>
      theme.customTheme.colors.settingBackground.main};

    border-radius: 22px;
    padding: ${({ theme }) => theme.spacing(1)};

    text-align: center;

    font-size: 24px;

    ${({ theme }) => theme.breakpoints.down("md")} {
      padding: 0;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;

export const OTPInputWrapper = styled("div")`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(2)};

  align-items: center;

  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: ${({ theme }) => theme.spacing(1)};
  }
`;
