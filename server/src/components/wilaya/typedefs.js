import { gql } from "apollo-server";
export const wilayaTypeDefs = gql`
  scalar Upload
  type Query {
    getWilayaById(id: ID!): Wilaya!
    getAllWilayas: [Wilaya!]
  }
  type Mutation {
    deleteWilayaById(id: ID!): DeleteWilayaResponse!
    addWilaya(input: addWilayaInput!): Wilaya!
    updateWilayaById(id: ID!, input: UpdateWilayaInput!): Wilaya!
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
