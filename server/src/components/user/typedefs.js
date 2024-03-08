import { gql } from "apollo-server";

export const UserTypeDefs = gql`
  type User {
    id: ID!
    email: String!
    firstname: String!
    lastname: String!
    phonenumber: String
    password: String!
    dateOfBirth: String
    gender: String
    role: String
    createdAt: String!
  }

  input CreateUserInput {
    email: String!
    firstname: String!
    lastname: String!
    phonenumber: String
    password: String!
    dateOfBirth: String
    gender: String
    role: String
  }
`;

export default UserTypeDefs;
