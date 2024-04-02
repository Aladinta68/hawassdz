import { GraphQLError } from "graphql";
import { ApolloServerErrorCode } from "@apollo/server/errors";

export const ErrorTypes = {
  BAD_USER_INPUT: {
    errorCode: ApolloServerErrorCode.BAD_USER_INPUT,
    errorStatus: 400,
  },

  UNAUTHORIZED: {
    errorCode: "UNAUTHORIZED",
    errorStatus: 401,
  },

  NOT_FOUND: {
    errorCode: "NOT_FOUND",
    errorStatus: 404,
  },

  ALREADY_EXISTS: {
    errorCode: "ALREADY_EXISTS",
    errorStatus: 409,
  },

  FORBIDDEN: {
    errorCode: "FORBIDDEN",
    errorStatus: 403,
  },

  INTERNAL_SERVER_ERROR: {
    errorCode: ApolloServerErrorCode.INTERNAL_SERVER_ERROR,
    errorStatus: 500,
  },
};

export const throwCustomError = (errorMessage, errorType, validationErrors) => {
  throw new GraphQLError(errorMessage, {
    extensions: {
      code: errorType.errorCode,
      httpStatus: errorType.errorStatus,
      validationErrors,
    },
  });
};

export const formatError = (err) => {
  if (err.extensions.code === "BAD_USER_INPUT") {
    return {
      message:
        err.extensions.exception.message ||
        "Please provide all required fields",
      code: "BAD_USER_INPUT",
      httpStatus: 400,
      validationErrors: err.extensions.validationErrors,
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
    message: err.extensions.exception.message || err.message,
    code: err.extensions.code || ApolloServerErrorCode.INTERNAL_SERVER_ERROR,
    httpStatus: err.extensions.httpStatus || 500,
  };
};
