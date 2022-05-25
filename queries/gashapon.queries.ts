import { gql } from "@apollo/client";

export const GET_GASHAPON_BY_USER = gql`
  query GashaponByUserID {
    gashaponByUserID {
      res_code
      res_desc

      gashapon {
        collectionID
        gashaponID
        gashaponName
        gashaponImageUrl
        categoryID
        statusGashapon
        userID
        createdAt
        updatedAt
        rate
      }
    }
  }
`;


export const GET_GASHAPON_COLLECTION_INFO = gql`
  query GashaponCollectionInfo($collectionID: String!) {
    gashaponCollectionInfo(collectionID: $collectionID) {
        res_code
        res_desc
        collectionID 
        collectionName
        collectionDescription
        categoryRate {
            categoryID
            categoryName
            rate
            amount
        }
        startCollection
        endCollection
        price
        statusCollection
        createdAt
        updatedAt
    }
}
`;
export const BUY_GASHAPON = gql`
mutation BuyGashapon($input: BuyGashaponInput!) {
  buyGashapon(input: $input) {
    res_code
    res_desc
    
    gashapon {
        collectionID
        gashaponID
        gashaponName
        gashaponImageUrl
        categoryID
        rate
        statusGashapon
        userID
        createdAt
        updatedAt
    }
  }
}
`;