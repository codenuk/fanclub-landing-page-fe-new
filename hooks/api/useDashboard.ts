import { useQuery } from "@apollo/client";
import { GET_DASHBOARD } from "../../queries/dashboard.queries";

function useDashboard(
  collectionID: string,
  airdropCampaignID: string,
  registerToEarnCampaignID: string,
  referralEarnOnlyInviterCampaignID: string
) {
  const { data, loading, error, refetch } = useQuery(GET_DASHBOARD, {
    fetchPolicy: "no-cache",
    variables: {
      collectionID: collectionID,
      airdropCampaignID: airdropCampaignID,
      registerToEarnCampaignID: registerToEarnCampaignID,
      referralEarnOnlyInviterCampaignID: referralEarnOnlyInviterCampaignID,
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
