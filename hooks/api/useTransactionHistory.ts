import { useLazyQuery } from "@apollo/client";
import { useCallback, useEffect, useState } from "react";
import { GET_TRANSACTION_HISTORY } from "../../queries/wallet.queries";

function useTransactionHistory(walletAddress?: string) {
  const [list, setList] = useState<any[]>([]);
  const [nextToken, setNextToken] = useState("");
  const [fetch, { data, loading, error }] = useLazyQuery(
    GET_TRANSACTION_HISTORY,
    {
      variables: {
        walletAddress,
        pageSize: 10,
      } as any,
    }
  );

  const loadMore = useCallback(() => {
    if (nextToken) {
      fetch({
        variables: {
          walletAddress,
          nextToken,
          pageSize: 10,
        },
      });
    }
  }, [fetch, nextToken, walletAddress]);

  useEffect(() => {
    if (walletAddress) {
      fetch();
    }
  }, [fetch, walletAddress]);

  useEffect(() => {
    setNextToken(data?.tokenTransactionByUserID?.nextToken);
  }, [data?.tokenTransactionByUserID?.nextToken]);

  useEffect(() => {
    if (walletAddress && data?.tokenTransactionByUserID?.tokenTransaction) {
      setList((prev) => [
        ...prev,
        ...(data?.tokenTransactionByUserID?.tokenTransaction || []),
      ]);
    }
  }, [data?.tokenTransactionByUserID?.tokenTransaction, walletAddress]);

  return {
    data: list,
    loading,
    error,
    loadMore,
    nextToken,
  };
}

export default useTransactionHistory;
