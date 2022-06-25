import { useQuery } from "@apollo/client";
import { GET_DASHBOARD } from "../../queries/dashboard.queries";

function useDashboard(
  collectionID: string,
  airdropCampaignID: string,
  registerToEarnCampaignID: string,
  referralEarnOnlyInviterCampaignID: string,
  startDate: string,
  endDate: string
) {
  const { data, loading, error, refetch } = useQuery(GET_DASHBOARD, {
    fetchPolicy: "no-cache",
    variables: {
      collectionID: collectionID,
      airdropCampaignID: airdropCampaignID,
      registerToEarnCampaignID: registerToEarnCampaignID,
      referralEarnOnlyInviterCampaignID: referralEarnOnlyInviterCampaignID,
      startDate: startDate,
      endDate: endDate,
    },
  });

  return {
    refetch,
    data: data?.dashboardOverview,
    loading,
    error,
  };
}

export default useDashboard;
