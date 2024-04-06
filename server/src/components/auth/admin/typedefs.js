import { gql } from "apollo-server";

export const AdminTypeDefs = gql`
  type User {
    id: ID
    email: String
    firstName: String
    lastName: String
    phone: String
    dateOfBirth: String
    gender: String
  }
  type Admin {
    id: ID
    email: String
    userName: String
  }
  type Query {
    getUserById(id: ID!): User
    getAllUsers: [User!]!
  }
  type Mutation {
    loginAdmin(input: LoginAdminInput!): AuthOutput!
    registerAdmin(input: RegisterAdminInput!): AuthOutput!
    deleteUserById(id: ID!): DeleteUserResponse
  }
  type DeleteUserResponse {
    message: String!
  }
  input LoginAdminInput {
    email: String!
    password: String!
  }
  input RegisterAdminInput {
    userName: String!
    email: String!
    password: String!
  }
  type AuthOutput {
    accessToken: String!
  }
  type TokensOutput {
    accessToken: String!
  }

`;

export default AdminTypeDefs;
