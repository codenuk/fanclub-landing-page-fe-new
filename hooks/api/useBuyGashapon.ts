import { useMutation } from "@apollo/client";
import { useCallback } from "react";
import { BUY_GASHAPON } from "../../queries/gashapon.queries";

function useBuyGashapon(
  onSuccess?: (result: any) => void,
  onFailed?: (error: any) => void
) {
  const [mutate, { data, loading, error }] = useMutation(BUY_GASHAPON, {
    onCompleted: (result) => {
      onSuccess?.(result?.buyGashapon);
    },
    onError: (error) => {
      onFailed?.(error);
    },
  });
  const updateBuyGashapon = useCallback(
    (input: any) => {
      mutate({
        variables: {
          input: input,
        },
      });
    },
    [mutate]
  );

  return {
    updateBuyGashapon,
    data: data?.buyGashapon,
    loading,
    error,
  };
}

export default useBuyGashapon;
