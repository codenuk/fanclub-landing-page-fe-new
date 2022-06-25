import { gql } from "@apollo/client";

export const GET_DASHBOARD = gql`
query DashboardOverview(
  $collectionID: String!
  $airdropCampaignID: String!
  $registerToEarnCampaignID: String!
  $referralEarnOnlyInviterCampaignID: String!
  $startDate: String!
  $endDate: String!
) {
  dashboardOverview(
    collectionID: $collectionID
    airdropCampaignID: $airdropCampaignID
    registerToEarnCampaignID: $registerToEarnCampaignID
    referralEarnOnlyInviterCampaignID: $referralEarnOnlyInviterCampaignID
    startDate: $startDate
    endDate: $endDate
  ) {
    res_code
    res_desc
    userCount
    coinOnhand
    dayListTransaction {
        amountRedeem
        amountEarn
        date
    }
    gashapon {
      categoryName
      rate
      amount
    }
    campaign {
      airdrop {
        budgetMaximum
        accumulatedRedeem
      }
      registerToEarn {
        budgetMaximum
        accumulatedRedeem
      }
      referralEarnOnlyInviter {
        budgetMaximum
        accumulatedRedeem
      }
    }
  }
}
`;
