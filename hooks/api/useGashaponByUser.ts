import { useQuery } from "@apollo/client";
import { GET_GASHAPON_BY_USER } from "../../queries/gashapon.queries";

function useGashaponByUser() {
  const { data, loading, error } = useQuery(GET_GASHAPON_BY_USER, {
    fetchPolicy: "no-cache",
  });
  return {
    data: data?.gashaponByUserID,
    loading,
    error,
  };
}

export default useGashaponByUser;
