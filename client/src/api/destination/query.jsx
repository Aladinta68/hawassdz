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
