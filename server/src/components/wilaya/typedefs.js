import { gql } from "apollo-server";
export const wilayaTypeDefs = gql`
  scalar Upload
  type Query {
    getWilayaById(id: ID!): Wilaya!
    getAllWilayas(
      page: Int
      perPage: Int
      sortBy: String
      sortDirection: String
    ): WilayasOutpot!
  }

  type Mutation {
    deleteWilayaById(id: ID!): DeleteWilayaResponse!
    addWilaya(input: addWilayaInput!): Wilaya!
    addAllWilaya: String
    updateWilayaById(id: ID!, input: UpdateWilayaInput!): Wilaya!
  }
  type WilayasOutpot {
    wilayas: [Wilaya!]
    maxPage: Int
  }
  type DeleteWilayaResponse {
    message: String!
  }
  input addWilayaInput {
    name: String!
    description: String
    files: [Upload!]
  }
  input UpdateWilayaInput {
    name: String
    description: String
    files: [Upload!]
  }
`;

export default wilayaTypeDefs;
