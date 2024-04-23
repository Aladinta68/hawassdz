import { gql } from "apollo-server";

export const hotelTypeDefs = gql`
  scalar Upload
  type Hotel {
    id: ID!
    name: String!
    description: String
    type: String
    address: String
    wilaya: Wilaya
    images: [File]
    ratings: [Rating]
    mapLocation: MapLocation
    contactInfo: ContactInfo
  }
  type Query {
    getHotelById(id: ID!): Hotel!
    getAllHotels: [Hotel!]
  }
  type Mutation {
    deleteHotelById(id: ID!): DeleteHotelResponse!
    addHotel(input: addHotelInput!): Hotel!
    updateHotelById(id: ID!, input: UpdateHotelInput!): Hotel!
  }
  type DeleteHotelResponse {
    message: String!
  }
  input addHotelInput {
    name: String!
    description: String
    type: String
    address: String
    wilayaId: String
    ratings: [RatingInput!]
    mapLocation: MapLocationInput
    contactInfo: ContactInfoInput
    files: [Upload!]
  }
  input UpdateHotelInput {
    name: String
    description: String
    type: String
    address: String
    wilayaId: String
    mapLocation: MapLocationUpdateInput
    contactInfo: ContactInfoUpdateInput
    files: [Upload!]
  }
`;
export default hotelTypeDefs;
