import { gql } from "@apollo/client";
export const GetTravels = gql`
  query GetAllTravels(
    $page: Int
    $perPage: Int
    $sortBy: String
    $sortDirection: String
  ) {
    getAllTravels(
      page: $page
      perPage: $perPage
      sortBy: $sortBy
      sortDirection: $sortDirection
    ) {
      travels {
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
      maxPage
    }
  }
`;
