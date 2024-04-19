import { gql } from "apollo-server";
import { default as Upload } from "graphql-upload/Upload.mjs";

export const authTypeDefs = gql`
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
    image: File
  }
  type Admin {
    id: ID
    email: String
    userName: String
  }
  type Query {
    getUserById(id: ID!): User
    getProfileInformation: User
    getAllUsers: [User!]!
  }
  type Mutation {
    registerAdmin(input: RegisterAdminInput!): AuthOutput!
    deleteUserById(id: ID!): DeleteUserResponse
    login(input: LoginInput!): AuthOutputWithType!
    registerUser(input: RegisterUserInput!): AuthOutput!
    forgetPassword(input: ForgetPasswordInput!): Boolean!
    verifyCodePin(input: verifyCodePinInput!): Boolean!
    updateForgetPassword(input: updateForgetPasswordInput!): Boolean!
    uploadUserImage(userId: ID!, file: Upload!): File!
    
  }
  type File {
    url: String!
  }
  type DeleteUserResponse {
    message: String!
  }
  type AuthOutput {
    accessToken: String!
  }
  type AuthOutputWithType {
    accessToken: String!
    type:String!
  }
  type TokensOutput {
    accessToken: String!
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

export default authTypeDefs;