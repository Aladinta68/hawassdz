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
export const GetHotelByID = gql`
  query GetHotelById($getHotelByIdId: ID!) {
    getHotelById(id: $getHotelByIdId) {
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
  }
`;
