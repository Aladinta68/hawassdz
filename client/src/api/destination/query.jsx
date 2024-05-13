import { gql } from "@apollo/client";
export const GetDestinations = gql`
  query GetAllDestinations(
    $page: Int
    $perPage: Int
    $sortBy: String
    $sortDirection: String
  ) {
    getAllDestinations(
      page: $page
      perPage: $perPage
      sortBy: $sortBy
      sortDirection: $sortDirection
    ) {
      destinations {
        id
        name
        description
        wilaya {
          id
          name
          description
          images {
            url
          }
        }
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
        overallRating
        mapLocation {
          longitude
          latitude
        }
      }
      maxPage
    }
  }
`;
export const GetOneDestination = gql`
  query GetDestinationById($getDestinationByIdId: ID!) {
    getDestinationById(id: $getDestinationByIdId) {
      id
      name
      description
      wilaya {
        id
        name
        description
        images {
          url
        }
      }
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
      overallRating
      mapLocation {
        longitude
        latitude
      }
    }
  }
`;
