import { gql } from "@apollo/client";

export const CreateRating = gql`
  mutation AddRating($input: addRatingInput!) {
    addRating(input: $input) {
      stars
      feedback
      user {
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
      createdAt
      updatedAt
    }
  }
`;
