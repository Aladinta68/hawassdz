import { gql } from "@apollo/client";

export const GetRestaurants = gql`
  query GetAllRestaurants(
    $page: Int
    $perPage: Int
    $sortBy: String
    $sortDirection: String
  ) {
    getAllRestaurants(
      page: $page
      perPage: $perPage
      sortBy: $sortBy
      sortDirection: $sortDirection
    ) {
      restaurants {
        id
        name
        type
        description
        address
        overallRating
        wilaya {
          name
          images {
            url
          }
          id
          description
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
        images {
          url
        }
        equipements {
          id
          item
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
export const GetRestaurantByID = gql`
  query GetRestaurantById($getRestaurantByIdId: ID!) {
    getRestaurantById(id: $getRestaurantByIdId) {
      id
      name
      type
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
