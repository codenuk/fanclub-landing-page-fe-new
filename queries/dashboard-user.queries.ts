import { gql } from "@apollo/client";

export const GET_DASHBOARD_USER = gql`
query DashboardUser($name: String, $surname: String, $email: String, $startDate: String, $endDate: String, $nextToken: String) {
  dashboardUser(name: $name, surname: $surname, email: $email, startDate: $startDate, endDate: $endDate, nextToken: $nextToken) {
    res_code
    res_desc
    nextToken
    user {
        name
        surname
        email
        createdAt

        walletBalance {
            walletAddress
            tokenBalance
            tokenBuyGashapon
        }
    }
  }
}
`;
