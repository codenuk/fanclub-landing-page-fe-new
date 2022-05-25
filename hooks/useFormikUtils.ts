import { FormikErrors, FormikProps } from "formik";
import { useCallback, useMemo } from "react";

type UseFormikUtilsParams<T = any> = {
  values: T;
  errors: FormikErrors<T>;
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T_1 = string | React.ChangeEvent<any>>(
      field: T_1
    ): T_1 extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
};

function useFormikUtils<T>({
  values,
  errors,
  handleChange,
}: UseFormikUtilsParams<T>) {
  const textFieldProps = useCallback(
    (key: string) => ({
      id: key,
      name: key,
      value: values[key as keyof T],
      onChange: handleChange,
      error: !!errors[key as keyof T],
      helperText: errors[key as keyof T],
    }),
    [errors, handleChange, values]
  );

  return { textFieldProps };
}

export default useFormikUtils;
