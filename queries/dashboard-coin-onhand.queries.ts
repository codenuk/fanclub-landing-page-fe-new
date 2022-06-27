import { gql } from "@apollo/client";

export const GET_DASHBOARD_COIN_ONHAND = gql`
query DashboardCoinOnHand($nextToken: String) {
  dashboardCoinOnHand(nextToken: $nextToken) {
    res_code
    res_desc
    nextToken
    coinOnhand
  }
}
`;
