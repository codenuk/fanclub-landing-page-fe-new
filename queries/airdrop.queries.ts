import { gql } from "@apollo/client";

export const GET_AIRDROP_EARN_STATUS = gql`
  query CampaignAirdropActiveIsGot($promoCodeID: String!) {
    campaignAirdropActiveIsGot(promoCodeID: $promoCodeID) {
      res_code
      res_desc
      campaignID
      campaignType
      couponValue
      startCampaign
      endCampaign
      statusCampaign
    }
  }
`;

export const EARN_AIRDROP = gql`
  mutation EarnAirdropToken($input: EarnAirdropTokenInput!) {
    earnAirdropToken(input: $input) {
      res_code
      res_desc
      promoCode {
        promoCodeID
        campaignID
        userID
        campaignType
        couponRewardType
        couponValue
        minimumSpend
        ruleMaximumUsageCouponsPerOrder
        ruleMaximumGetCouponsPerUser
      }
    }
  }
`;
