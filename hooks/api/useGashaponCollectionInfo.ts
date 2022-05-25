import { useQuery } from "@apollo/client";
import { GET_GASHAPON_COLLECTION_INFO } from "../../queries/gashapon.queries";

function useGashaponCollectionInfo(collectionID: string) {
  const { data, loading, error, refetch } = useQuery(GET_GASHAPON_COLLECTION_INFO, {
    fetchPolicy: "no-cache",
    variables: { collectionID: collectionID }
  });

  return {
    refetch,
    data: data?.gashaponCollectionInfo,
    loading,
    error,
  };
}

export default useGashaponCollectionInfo;