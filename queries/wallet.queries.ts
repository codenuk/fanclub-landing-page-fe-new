import { gql } from "@apollo/client";

export const GET_TRANSACTION_HISTORY = gql`
  query TokenTransactionByUserID(
    $walletAddress: String!
    $nextToken: String
    $pageSize: Int
  ) {
    tokenTransactionByUserID(
      walletAddress: $walletAddress
      pageSize: $pageSize
      nextToken: $nextToken
    ) {
      nextToken
      tokenTransaction {
        amountToken
        walletAddress
        userIDWalletAddress
        createdAt
        triggerType
        transactionNo
        userToID
        userFromID
        remark
      }
    }
  }
`;
