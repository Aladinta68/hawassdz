import { gql } from "apollo-server";

export const hotelTypeDefs = gql`
  scalar Upload
  type Hotel {
    id: ID!
    name: String!
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
    getHotelById(id: ID!): Hotel!
    getAllHotels(
      page: Int
      perPage: Int
      sortBy: String
      sortDirection: String
    ): HotelsOutpot!
  }
  type Mutation {
    deleteHotelById(id: ID!): DeleteHotelResponse!
    addHotel(input: addHotelInput!): Hotel!
    updateHotelById(id: ID!, input: UpdateHotelInput!): Hotel!
  }
  type HotelsOutpot {
    hotels: [Hotel!]
    maxPage: Int
  }
  type DeleteHotelResponse {
    message: String!
  }
  input addHotelInput {
    name: String!
    description: String
    address: String
    wilayaId: String
    mapLocation: MapLocationInput
    contactInfo: ContactInfoInput
    equipements: [String!]
    files: [Upload!]
  }
  input UpdateHotelInput {
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
export default hotelTypeDefs;
