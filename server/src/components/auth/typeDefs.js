import { gql } from "apollo-server";

export const authTypeDefs = gql`
  type User {
    id: ID
    firstName: String
    lastName: String
    email: String
    phone: String
    dateOfBirth: String
    gender: String
  }
  type Mutation {
    login(input: LoginInput!): AuthOutput!
    register(input: RegisterInput!): AuthOutput!
    forgetPassword(input: ForgetPasswordInput!): Boolean!
    verifyCodePin(input: verifyCodePinInput!): Boolean!
    updateForgetPassword(input: updateForgetPasswordInput!): Boolean!
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
export default authTypeDefs;
