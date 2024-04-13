import {GraphQLError} from "graphql"
import {ApolloServerErrorCode} from "@apollo/server/errors"

export const ErrorTypes = {
  BAD_USER_INPUT: {
    errorCode: ApolloServerErrorCode.BAD_USER_INPUT,
    errorStatus: 400,
  },

  BAD_REQUEST: {
    errorCode: ApolloServerErrorCode.BAD_REQUEST,
    errorStatus: 401,
  },

  UNAUTHENTICATED: {
    errorCode: "UNAUTHENTICATED",
    errorStatus: 401,
  },

  FORBIDDEN: {
    errorCode: "FORBIDDEN",
    errorStatus: 403,
  },

  NOT_FOUND: {
    errorCode: "NOT_FOUND",
    errorStatus: 404,
  },

  ALREADY_EXISTS: {
    errorCode: "ALREADY_EXISTS",
    errorStatus: 409,
  },
  STRIPE_CARD_ERROR: {
    errorCode: "STRIPE_CARD_ERROR",
    errorStatus: 402
  },
  INTERNAL_SERVER_ERROR: {
    errorCode: ApolloServerErrorCode.INTERNAL_SERVER_ERROR,
    errorStatus: 500,
  },
};

export const throwCustomError = (errorMessage, errorType) => {
  throw new GraphQLError(errorMessage, {
    extensions: {
      code: errorType.errorCode,
      httpStatus: errorType.errorStatus,
    },
  });
};

export const formatError = (err) => {
  console.log(err);

  if (
    err.extensions.code === "BAD_USER_INPUT" &&
    (err.extensions.httpStatus === null ||
      err.extensions.httpStatus === undefined)
  ) {
    return {
      message: "Please provide all required fields",
      code: "BAD_USER_INPUT",
      httpStatus: 400,
    };
  }

  if (
    err.extensions.httpStatus === null ||
    err.extensions.httpStatus === undefined
  ) {
    return {
      message: "Something went wrong",
      code: "INTERNAL_SERVER_ERROR",
      httpStatus: 500,
    };
  }
  return {
    message: err.message,
    code: err.extensions.code,
    httpStatus: err.extensions.httpStatus,
  };
};

