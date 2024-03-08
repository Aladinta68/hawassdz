import { gql } from "apollo-server";

export const UserSchema = gql`
  type Query {
    getUserById(id: ID!): User
  }

  type Mutation {
    createUser(userInput: CreateUserInput!): User
  }
`;

export default UserSchema;
