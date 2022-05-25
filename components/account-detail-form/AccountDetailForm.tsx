import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { AccountDetailFormSchema } from "../../form-validators";
import { useFormikUtils } from "../../hooks";
import {
  AccountDetailActionsWrapper,
  AccountDetailFormWrapper,
} from "./accountDetailForm.styles";
import AdapterDayjs from "@mui/lab/AdapterDayjs";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { DatePicker } from "@mui/lab";
import dayjs from "dayjs";

export interface AccountDetailFormData {
  name: string;
  surname: string;
  email: string;
  // phoneNumber: string;
  birthday: string;
}

const initialValues = {
  name: "",
  surname: "",
  email: "",
  // phoneNumber: "",
  birthday: "",
};

type AccountDetailFormProps = {
  onSubmit?: (value: AccountDetailFormData) => void;
  onCancel?: () => void;
  defaultValues?: AccountDetailFormData;
};

const AccountDetailForm: React.FC<AccountDetailFormProps> = ({
  onSubmit,
  onCancel,
  defaultValues,
}) => {
  const {
    values,
    handleSubmit,
    handleChange,
    setFieldValue,
    setValues,
    errors,
  } = useFormik<AccountDetailFormData>({
    initialValues: defaultValues || initialValues,
    validationSchema: AccountDetailFormSchema,
    onSubmit: (value: AccountDetailFormData) => {
      onSubmit?.(value);
    },
  });

  const { textFieldProps } = useFormikUtils({ errors, values, handleChange });

  useEffect(() => {
    if (defaultValues) {
      setValues(defaultValues);
    }
  }, [defaultValues, setValues]);

  return (
    <AccountDetailFormWrapper onSubmit={handleSubmit}>
      <div id="name">
        <TextField
          variant="filled"
          InputLabelProps={{ shrink: true }}
          placeholder="First name"
          fullWidth
          label="First name"
          {...textFieldProps("name")}
        />
      </div>
      <div id="surname">
        <TextField
          variant="filled"
          InputLabelProps={{ shrink: true }}
          placeholder="Last name"
          fullWidth
          label="Last name"
          {...textFieldProps("surname")}
        />
      </div>
      <div id="email">
        <TextField
          variant="filled"
          InputLabelProps={{ shrink: true }}
          placeholder="Email@email.com"
          fullWidth
          disabled
          label="Email"
          {...textFieldProps("email")}
        />
      </div>
      {/* <div id="phoneNumber">
        <TextField
          variant="filled"
          InputLabelProps={{ shrink: true }}
          placeholder="01-234-4231"
          fullWidth
          label="Phone Number"
          {...textFieldProps("phoneNumber")}
        />
      </div> */}
      {/* <div id="birthday">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Birthday"
            value={!!values.birthday ? dayjs(values.birthday) : null}
            inputFormat="DD/MM/YYYY"
            onChange={(value) => {
              if (value) {
                setFieldValue("birthday", dayjs(value).toISOString());
              }
            }}
            renderInput={(params) => (
              <TextField
                variant="filled"
                {...params}
                fullWidth
                error={!!errors.birthday}
                helperText={errors.birthday}
                InputLabelProps={{ shrink: true }}
              />
            )}
          />
        </LocalizationProvider>
      </div> */}
      <AccountDetailActionsWrapper>
        <Button size="large" type="submit">
          Save
        </Button>
        <Button size="large" onClick={onCancel} variant="text" color="error">
          Cancel
        </Button>
      </AccountDetailActionsWrapper>
    </AccountDetailFormWrapper>
  );
};

AccountDetailForm.defaultProps = {
  onSubmit() {},
  onCancel() {},
};

export default AccountDetailForm;
