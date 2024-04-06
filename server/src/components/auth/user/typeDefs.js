import { gql } from "apollo-server";
import { default as Upload } from "graphql-upload/Upload.mjs";

export const UserTypeDefs = gql`
  scalar Upload

  type User {
    id: ID
    firstName: String
    lastName: String
    email: String
    phone: String
    dateOfBirth: String
    gender: String
    complete: Boolean
    image: Image
  }
  type File {
    url: String!
  }
  type Mutation {
    login(input: LoginInput!): AuthOutput!
    register(input: RegisterInput!): AuthOutput!
    forgetPassword(input: ForgetPasswordInput!): Boolean!
    verifyCodePin(input: verifyCodePinInput!): Boolean!
    updateForgetPassword(input: updateForgetPasswordInput!): Boolean!
    uploadUserImage(userId: ID!, file: Upload!): File!
  }

  input RegisterInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
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

  type AuthOutput {
    accessToken: String!
  }

  type TokensOutput {
    accessToken: String!
  }
`;
export default UserTypeDefs;
