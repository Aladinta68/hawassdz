import { gql } from "apollo-server";

export const wilayaTypeDefs = gql`
  scalar Upload

  type Image {
    url: String
  }
  type MapLocation {
    longitude: Float
    latitude: Float
  }
  type Wilaya {
    id: ID
    name: String
    description: String
    images: [Image]
    mapLocation: MapLocation
  }
  type Query {
    getWilayaById(id: ID!): Wilaya
    getAllWilaya: [Wilaya]
  }
  type Mutation {
    createWilaya(input: CreateWilayaInput!): Wilaya!
    updateWilaya(input: UpdateWilayaInput!): Wilaya!
    deleteWilaya(id: ID!): DeleteWilayaResponse
  }
  type DeleteWilayaResponse {
    message: String!
  }
  input CreateWilayaInput {
    name: String!
    description: String!
    images: [Upload]
    mapLocation: MapLocationInput
  }
  
  input UpdateWilayaInput {
    id: ID!
    name: String
    description: String
    images: [Upload]
    mapLocation: MapLocationInput 
  }
  
  input MapLocationInput {
    longitude: Float!
    latitude: Float!
  }
  
`;

export default wilayaTypeDefs;
