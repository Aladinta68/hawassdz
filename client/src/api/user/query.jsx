import { gql } from "@apollo/client";
export const GetUserInformation = gql`
  query GetUserByToken {
    getUserByToken {
      id
      firstName
      lastName
      email
      phone
      dateOfBirth
      gender
      complete
      image {
        url
      }
    }
  }
`;
