import { gql } from "@apollo/client";

export const ADD_TRAVEL = gql`
  mutation AddTravel($input: addTravelInput!) {
    addTravel(input: $input) {
      id
      name
      type
      description
      destination
      longitude
      dateDepart
      dateArrive
      numberPerson
      availablePlace
      gender
      ageRange
      price
      transportType
      images {
        url
      }
      ratings {
        stars
        feedback
      }
      mapLocation {
        longitude
        latitude
      }
      contactInfo {
        phone
        email
        website
        facebook
      }
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
    }
  }
`;
