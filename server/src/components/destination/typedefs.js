import { gql } from "apollo-server";
export const destinationTypeDefs = gql`
  scalar Upload
  type Destination {
    id: ID!
    name: String!
    description: String
    wilaya: Wilaya!
    images: [File]
    ratings: [Rating]
    mapLocation: MapLocation
  }
  type Query {
    getDestinationById(id: ID!): Destination!
    getAllDestinations(
      page: Int
      perPage: Int
      sortBy: String
      sortDirection: String
    ): DestinationsOutpot!
  }
  type Mutation {
    deleteDestinationById(id: ID!): DeleteDestinationResponse!
    addDestination(input: addDestinationInput!): Destination!
    updateDestinationById(id: ID!, input: UpdateDestinationInput!): Destination!
  }
  type DestinationsOutpot {
    destinations: [Destination!]
    maxPage: Int
  }
  type DeleteDestinationResponse {
    message: String!
  }
  input addDestinationInput {
    name: String!
    description: String
    wilayaId: String!
    mapLocation: MapLocationInput
    files: [Upload!]
  }
  input UpdateDestinationInput {
    name: String
    description: String
    wilayaId: String
    mapLocation: MapLocationUpdateInput
    files: [Upload!]
  }
`;

export default destinationTypeDefs;
