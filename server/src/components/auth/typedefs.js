import { gql } from "apollo-server";

export const authTypeDefs = gql`
  scalar Upload
  type Admin {
    id: ID!
    email: String!
    userName: String!
  }
  type Mutation {
    registerAdmin(input: RegisterAdminInput!): AuthOutput!
    login(input: LoginInput!): AuthOutput!
    registerUser(input: RegisterUserInput!): AuthOutput!
  }
  type AuthOutput {
    id: ID!
    accessToken: String!
    type: String!
  }
  input RegisterUserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }
  input RegisterAdminInput {
    userName: String!
    email: String!
    password: String!
  }
  input LoginInput {
    email: String!
    password: String!
  }
`;

export default authTypeDefs;
