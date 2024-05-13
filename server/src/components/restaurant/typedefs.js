import { gql } from "apollo-server";

export const restaurantTypeDefs = gql`
  scalar Upload
  type Restaurant {
    id: ID!
    name: String!
    type: String
    description: String
    address: String
    wilaya: Wilaya
    images: [File]
    ratings: [Rating]
    equipements: [Equipement]
    overallRating: Float
    mapLocation: MapLocation
    contactInfo: ContactInfo
  }
  type Query {
    getRestaurantById(id: ID!): Restaurant!
    getAllRestaurants(
      page: Int
      perPage: Int
      sortBy: String
      sortDirection: String
    ): RestaurantsOutpot!
  }
  type Mutation {
    deleteRestaurantById(id: ID!): DeleteRestaurantResponse!
    addRestaurant(input: addRestaurantInput!): Restaurant!
    updateRestaurantById(id: ID!, input: UpdateRestaurantInput!): Restaurant!
  }
  type RestaurantsOutpot {
    restaurants: [Restaurant!]
    maxPage: Int
  }
  type DeleteRestaurantResponse {
    message: String!
  }
  input addRestaurantInput {
    name: String!
    type: String
    description: String
    address: String
    wilayaId: String
    mapLocation: MapLocationInput
    contactInfo: ContactInfoInput
    equipements: [String!]
    files: [Upload!]
  }
  input UpdateRestaurantInput {
    name: String
    description: String
    address: String
    wilayaId: String
    mapLocation: MapLocationUpdateInput
    contactInfo: ContactInfoUpdateInput
    equipements: [String!]
    files: [Upload!]
  }
`;
export default restaurantTypeDefs;
