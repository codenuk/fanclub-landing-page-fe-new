import * as yup from "yup";
import {
  isIncludeLowerCase,
  isIncludeNumber,
  isIncludeSpace,
  isIncludeSpecialCharacter,
  isIncludeUpperCase,
} from "../utils/password";

export const SignUpFormSchema = () =>
  yup.object().shape({
    email: yup.string().email().required(),
    password: yup
      .string()
      .min(8)
      .required()
      .test("has-a-uppercase", "require_uppercase", (value) =>
        isIncludeUpperCase(value)
      )
      .test("has-a-number", "require_number", (value) => isIncludeNumber(value))
      .test("has-a-special-char", "require_special_char", (value) =>
        isIncludeSpecialCharacter(value)
      )
      .test(
        "has-not-space",
        "space_not_allow",
        (value) => !isIncludeSpace(value)
      )
      .test("has-a-lowercase", "require_lower_case", (value) =>
        isIncludeLowerCase(value)
      ),
    refCode: yup.string(),
  });

export const SignUpFormInformationSchema = () =>
  yup.object().shape({
    firstName: yup.string().required('First name is a required field'),
    lastName: yup.string().required('Last name is a required field'),
  });

export const LogInFormSchema = () =>
  yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

export const ForgotPasswordSchema = () =>
  yup.object().shape({
    email: yup.string().email().required(),
  });

export const ForgotPasswordChangePasswordSchema = ({ isForgotPassword }: any) =>
  yup.object().shape({
    ...(!isForgotPassword
      ? {
          passwordOld: yup
            .string()
            .required("password old is a required field"),
          passwordNew: yup
            .string()
            .required("password new is a required field")
            .test("has-a-uppercase", "require_uppercase", (value) =>
              isIncludeUpperCase(value)
            )
            .test("has-a-number", "require_number", (value) =>
              isIncludeNumber(value)
            )
            .test("has-a-special-char", "require_special_char", (value) =>
              isIncludeSpecialCharacter(value)
            )
            .test(
              "has-not-space",
              "space_not_allow",
              (value) => !isIncludeSpace(value)
            )
            .test("has-a-lowercase", "require_lower_case", (value) =>
              isIncludeLowerCase(value)
            ),
        }
      : {
          password: yup
            .string()
            .required("password is a required field")
            .test("has-a-uppercase", "require_uppercase", (value) =>
              isIncludeUpperCase(value)
            )
            .test("has-a-number", "require_number", (value) =>
              isIncludeNumber(value)
            )
            .test("has-a-special-char", "require_special_char", (value) =>
              isIncludeSpecialCharacter(value)
            )
            .test(
              "has-not-space",
              "space_not_allow",
              (value) => !isIncludeSpace(value)
            )
            .test("has-a-lowercase", "require_lower_case", (value) =>
              isIncludeLowerCase(value)
            ),
        }),
    passwordConfirm: yup.string().required(),
  });
