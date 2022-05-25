import { useLazyQuery, useQuery } from "@apollo/client";
import { useCallback } from "react";
import { GET_AIRDROP_EARN_STATUS } from "../../queries/airdrop.queries";

function useAirdropEarnStatus(onSuccess?: (result: any) => void) {
  const [fetch, { data, loading, error }] = useLazyQuery(
    GET_AIRDROP_EARN_STATUS,
    {
      onCompleted: () => {
        onSuccess?.(data?.campaignAirdropActiveIsGot);
      },
    }
  );

  const getEarnStatus = useCallback(
    (promoCodeID: string) => {
      fetch({
        variables: {
          promoCodeID,
        },
      });
    },
    [fetch]
  );

  return {
    getEarnStatus,
    data: data?.campaignAirdropActiveIsGot,
    loading,
    error,
  };
}

export default useAirdropEarnStatus;
