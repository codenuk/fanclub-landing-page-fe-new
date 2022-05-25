import { useQuery } from "@apollo/client";
import { GET_USER_INFO } from "../../queries/user-profile.queries";

function useUserProfile() {
  const { data, loading, error, refetch } = useQuery(GET_USER_INFO, {
    fetchPolicy: "no-cache",
  });
  return {
    refetch,
    data: data?.userInfo,
    loading,
    error,
  };
}

export default useUserProfile;
