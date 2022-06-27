import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { GET_DASHBOARD_COIN_ONHAND } from "../../queries/dashboard-coin-onhand.queries";

function useDashboardCoinOnhand() {
  const [nextToken, setNextToken] = useState("")

  const { data, loading, error, refetch } = useQuery(GET_DASHBOARD_COIN_ONHAND, {
    fetchPolicy: "no-cache",
    variables: {
      nextToken: nextToken,
    },
  });

  const [coinOnhand, setCoinOnhand] = useState(0)

  useEffect(() => {
    if (data?.dashboardCoinOnHand?.nextToken) {
      setNextToken(data?.dashboardCoinOnHand?.nextToken)
      setCoinOnhand((prev) => prev + data?.dashboardCoinOnHand?.coinOnhand)
      refetch()
    }
  }, [data?.dashboardCoinOnHand?.nextToken])
  
  return {
    refetch,
    coinOnhand,
    loading,
    error,
  };
}

export default useDashboardCoinOnhand;
