import { useMutation } from "@apollo/client";
import { useCallback } from "react";
import {
  GET_USER_INFO,
  UPDATE_USER_INFO,
} from "../../queries/user-profile.queries";

function useUpdateUserProfile(onSuccess?: () => void) {
  const [mutate, { data, loading, error }] = useMutation(UPDATE_USER_INFO, {
    // refetchQueries: [GET_USER_INFO],
    onCompleted: () => {
      onSuccess?.();
    },
  });

  const updateUserInfo = useCallback(
    (userInfo: any) => {
      mutate({
        variables: {
          input: userInfo,
        },
      });
    },
    [mutate]
  );

  return {
    updateUserInfo,
    data,
    loading,
    error,
  };
}

export default useUpdateUserProfile;
