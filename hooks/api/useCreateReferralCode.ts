import { useMutation } from "@apollo/client";
import { useCallback, useMemo } from "react";
import {
  CREATE_REFERAL_CODE,
  GET_USER_INFO,
} from "../../queries/user-profile.queries";

function useCreateReferralCode(onSuccess?: () => void) {
  const [mutate, { data, loading, error }] = useMutation(CREATE_REFERAL_CODE, {
    onCompleted: () => {
      onSuccess?.();
    },
    refetchQueries: [GET_USER_INFO],
  });

  const createReferralCode = useCallback(() => {
    mutate({});
  }, [mutate]);

  const code = useMemo(
    () => data?.createPromoCodeForReferral?.promoCode?.promoCodeID,
    [data?.createPromoCodeForReferral?.promoCode?.promoCodeID]
  );

  return {
    createReferralCode,
    code,
    loading,
    error,
  };
}

export default useCreateReferralCode;
