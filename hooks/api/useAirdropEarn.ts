import { useMutation } from "@apollo/client";
import { useCallback } from "react";
import { EARN_AIRDROP } from "../../queries/airdrop.queries";
import { GET_USER_INFO } from "../../queries/user-profile.queries";

function useAirdropEarn(
  onSuccess?: (result: any) => void,
  onFailed?: (error: any) => void
) {
  const [mutate, { data, loading, error }] = useMutation(EARN_AIRDROP, {
    refetchQueries: [GET_USER_INFO],
    onCompleted: (result) => {
      onSuccess?.(result?.earnAirdropToken);
    },
    onError: (error) => {
      onFailed?.(error);
    },
  });

  const earn = useCallback(
    (campaignID: string, promoCodeID: string) => {
      return mutate({
        variables: {
          input: {
            campaignID,
            promoCodeID,
          },
        },
      });
    },
    [mutate]
  );

  return {
    earn,
    data: data?.earnAirdropToken,
    loading,
    error: error,
  };
}

export default useAirdropEarn;
