import {
  ErrorTypes,
  throwCustomError,
} from "../../utils/error/ErrorHandler.js";
import { signAccessToken } from "./utils/utils.js";
import {
  loginSchema,
  registerAdminSchema,
  registerUserSchema,
} from "./validations.js";
import { default as GraphQLUpload } from "graphql-upload/GraphQLUpload.mjs";
import { findByEmailandPassword, createAdmin, createUser } from "./services.js";

export const authResolvers = {
  Upload: GraphQLUpload,
  Query: {},
  Mutation: {
    login: async (_, { input }, { prisma }) => {
      try {
        await loginSchema.validate(input, { abortEarly: false });
        let { existUser, type } = await findByEmailandPassword({
          input,
          prisma,
        });
        const accessToken = await signAccessToken({ id: existUser.id, type });
        return {
          id: existUser.id,
          accessToken,
          type,
        };
      } catch (error) {
        throwCustomError(
          error.message,
          error.extensions || ErrorTypes.BAD_USER_INPUT
        );
      }
    },
    registerAdmin: async (_, { input }, { prisma }) => {
      try {
        await registerAdminSchema.validate(input, { abortEarly: false });
        const admin = await createAdmin({ input, prisma });
        const type = "ADMIN";
        const accessToken = await signAccessToken({ id: admin.id, type });
        return {
          id: admin.id,
          accessToken,
          type,
        };
      } catch (error) {
        throwCustomError(
          error.message,
          error.extensions || ErrorTypes.BAD_USER_INPUT
        );
      }
    },

    registerUser: async (_, { input }, { prisma }) => {
      try {
        await registerUserSchema.validate(input, { abortEarly: false });
        const user = await createUser({ input, prisma });
        const type = "USER";
        const accessToken = await signAccessToken({ id: user.id, type });
        return {
          id: user.id,
          accessToken,
          type,
        };
      } catch (error) {
        throwCustomError(
          error.message,
          error.extensions || ErrorTypes.BAD_USER_INPUT
        );
      }
    },
  },
};

export default authResolvers;
