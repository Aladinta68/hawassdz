import { gql } from "apollo-server";

export const userTypeDefs = gql`
  scalar Upload

  type Query {
    getUserByToken: User!
    getUserById(id: ID!): User!
    getAllUsers: [User!]!
  }
  type Mutation {
    deleteUserById(id: ID!): DeleteUserResponse!
    updateUser(input: UpdateUserInput!): User!
    updateUserPassword(input: updateUserPasswordInput!): User!
    forgetPassword(input: ForgetPasswordInput!): Boolean!
    verifyCodePin(input: verifyCodePinInput!): Boolean!
    updateForgetPassword(input: updateForgetPasswordInput!): Boolean!
    uploadUserImage(userId: ID!, file: Upload!): File!
  }
  type DeleteUserResponse {
    message: String!
  }
  input UpdateUserInput {
    firstName: String
    lastName: String
    phone: String
    dateOfBirth: String
    gender: String
  }
  input updateUserPasswordInput {
    oldPassword: String!
    newPassword: String!
    confirmedNewPassword: String!
  }
  input verifyCodePinInput {
    email: String!
    codePIN: String!
  }
  input updateForgetPasswordInput {
    email: String!
    password: String!
    confirmedPassword: String!
  }
  input ForgetPasswordInput {
    email: String!
  }
`;

export default userTypeDefs;
