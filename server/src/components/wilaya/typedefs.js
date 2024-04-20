import { gql } from "apollo-server";
import { default as Upload } from "graphql-upload/Upload.mjs";
export const wilayaTypeDefs = gql`
  scalar Upload
  type Wilaya {
    id: ID
    name: String
    description: String
    image: [File]
  }
  type Query {
    getWilayaById(id: ID!): Wilaya
    getAllWilayas: [Wilaya!]!
  }
  type Mutation {
    deleteWilayaById(id: ID!): DeleteWilayaResponse
    addWilaya(input: addWilayaInput!): Wilaya!
  }
  type File {
    url: String!
  }
  type DeleteWilayaResponse {
    message: String!
  }
  input addWilayaInput {
    name: String
    description: String!
    files: [Upload!]!
  }
`;

export default wilayaTypeDefs;
