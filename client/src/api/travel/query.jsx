import { gql } from "@apollo/client";
export const GetTravels = gql`
  query GetAllTravels(
    $isActive: Boolean
    $page: Int
    $perPage: Int
    $sortBy: String
    $sortDirection: String
  ) {
    getAllTravels(
      isActive: $isActive
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
          createdAt
          updatedAt
          image {
            url
          }
        }
      }
      maxPage
    }
  }
`;
export const GetALLTravelsByUser = gql`
  query GetTravelsByUser(
    $page: Int
    $perPage: Int
    $sortBy: String
    $sortDirection: String
  ) {
    getTravelsByUser(
      page: $page
      perPage: $perPage
      sortBy: $sortBy
      sortDirection: $sortDirection
    ) {
      travels {
        id
        type
        transportType
        ratings {
          stars
          feedback
          createdAt
          updatedAt
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
        overallRating
        price
        numberPerson
        name
        mapLocation {
          longitude
          latitude
        }
        longitude
        images {
          url
        }
        gender
        destination
        description
        dateDepart
        dateArrive
        createdAt
        updatedAt
        contactInfo {
          phone
          email
          website
          facebook
        }
        availablePlace
        ageRange
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
