import { gql } from "@apollo/client";
export const GetProfile = gql`
  query GetProfileInformation {
    getProfileInformation {
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
