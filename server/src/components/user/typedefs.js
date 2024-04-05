import { gql } from "apollo-server";

export const UserTypeDefs = gql`
  type User {
    id: ID
    email: String
    firstName: String
    lastName: String
    phone: String
    dateOfBirth: String
    gender: String
  }
  type Query {
    getUserById(id: ID!): User
    getAllUsers: [User!]!
  }

  type Mutation {
    deleteUserById(id: ID!): DeleteUserResponse
  }
  type DeleteUserResponse {
    message: String!
  }
  
`;

export default UserTypeDefs;
