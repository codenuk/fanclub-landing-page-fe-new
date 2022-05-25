import { gql } from "@apollo/client";

export const GET_USER_INFO = gql`
  query UserInfo {
    userInfo {
      name
      surname
      referralCode
      birthday
      email
      createdAt
      updatedAt
      walletBalance {
        walletAddress
        tokenBalance
      }
      campaignReferral {
        campaignID
        promoCodeID
      }
    }
  }
`;

export const CHANGE_PASSWORD = gql`
  mutation SetNewPassword($input: SetNewPasswordInput!) {
    setNewPassword(input: $input) {
      res_code
      res_desc
    }
  }
`;

export const UPDATE_USER_INFO = gql`
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      name
      surname
      birthday
      email
      # phoneNumber
    }
  }
`;

export const CREATE_REFERAL_CODE = gql`
  mutation CreatePromoCodeForReferralEarnOnlyInviter {
    createPromoCodeForReferralEarnOnlyInviter {
      promoCode {
        campaignID
        promoCodeID
      }
    }
  }
`;
