import { gql } from "@apollo/client";
export const GetHotels = gql`
  query GetAllHotels(
    $page: Int
    $perPage: Int
    $sortBy: String
    $sortDirection: String
  ) {
    getAllHotels(
      page: $page
      perPage: $perPage
      sortBy: $sortBy
      sortDirection: $sortDirection
    ) {
      hotels {
        id
        name
        description
        address
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
        equipements {
          id
          item
        }
        overallRating
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
      }
      maxPage
    }
  }
`;
