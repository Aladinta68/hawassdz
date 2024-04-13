import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      accessToken
      type
    }
  }
`;
export const REGISTER = gql`
  mutation RegisterUser($input: RegisterUserInput!) {
    registerUser(input: $input) {
      accessToken
    }
  }
`;
export const SendEmailCode = gql`
  mutation ForgetPassword($input: ForgetPasswordInput!) {
    forgetPassword(input: $input)
  }
`;
export const VerifyCodePin = gql`
mutation VerifyCodePin($input: verifyCodePinInput!) {
  verifyCodePin(input: $input)
}
`;
