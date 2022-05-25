import * as yup from "yup";

export const AccountDetailFormSchema = yup.object().shape({
  name: yup.string().required(),
  surname: yup.string().required(),
  // phoneNumber: yup.string().required(),
  birthday: yup.string().nullable(),
});
