import { gql } from 'apollo-server';

export const WilayatypeDefs = gql`
  type Wilaya {
    id: ID!
    name: String!
    description: String
    location: MapLocation
    images: [Image]
    typeGeographies: [TypeGeographie]
    mapLocationId: String
  }

  type MapLocation {
    id: ID!
    longitude: Float!
    latitude: Float!
  }

  type TypeGeographie {
    id: ID!
    title: String!
  }

  type Image {
    id: ID!
    path: String!
  }

  type Query {
    getWilayaById(id: ID!): Wilaya
    getAllWilaya: [Wilaya!]!
  }

  type Mutation {
    addWilaya(input: AddWilayaInput!): Wilaya!
    updateWilaya(id: ID!, input: UpdateWilayaInput!): Wilaya!
    deleteWilaya(id: ID!): DeleteWilayaResponse!
  }

  type DeleteWilayaResponse {
    message: String!
  }

  input AddWilayaInput {
    name: String!
    description: String
    location: LocationInput!
    typeGeographies: [TypeGeographieInput!]  
    mapLocationId: String  
  }

  input UpdateWilayaInput {
    name: String
    description: String
    location: LocationInput
    typeGeographies: [TypeGeographieInput]
    mapLocationId: String
  }

  input LocationInput {
    longitude: Float!
    latitude: Float!
  }

  input TypeGeographieInput {
    id: ID
    title: String!
  }
`;
export default WilayatypeDefs;
