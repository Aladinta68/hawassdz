import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      id
      accessToken
      type
    }
  }
`;
export const REGISTER = gql`
  mutation RegisterUser($input: RegisterUserInput!) {
    registerUser(input: $input) {
      id
      accessToken
      type
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
export const UploadProfileImage = gql`
  mutation UploadUserImage($userId: ID!, $file: Upload!) {
    uploadUserImage(userId: $userId, file: $file) {
      url
    }
  }
`;
