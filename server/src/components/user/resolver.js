import {
  ErrorTypes,
  throwCustomError,
} from "../../utils/error/errorHandler.js";
import {
  forgetPasswordSchema,
  verifyCodePinSchema,
  updatePasswordSchema,
  updateUserSchema,
} from "./validations.js";
import { default as GraphQLUpload } from "graphql-upload/GraphQLUpload.mjs";
import {
  deleteUserById,
  getAllUsers,
  getUserInfo,
  resetPassword,
  updateForgetPassword,
  verifyCodePin,
  addUserImage,
  updateUser,
  updateUserPassword,
} from "./services.js";

export const userResolvers = {
  Upload: GraphQLUpload,
  Query: {
    getUserByToken: async (_, __, { prisma, user: authUser }) => {
      try {
        if (!authUser) {
          throwCustomError("Unauthorized", ErrorTypes.UNAUTHENTICATED);
        }
        const user = await getUserInfo({ id: authUser.id, prisma });
        if (!user) {
          throwCustomError("Unauthorized", ErrorTypes.UNAUTHENTICATED);
        }
        return user;
      } catch (error) {
        throwCustomError(
          error.message,
          error.extensions || ErrorTypes.INTERNAL_SERVER_ERROR
        );
      }
    },
    getUserById: async (_, { id }, { prisma, user: authUser }) => {
      try {
        if (!authUser || (authUser.type !== "ADMIN" && authUser.id === id)) {
          throwCustomError("Unauthorized", ErrorTypes.UNAUTHENTICATED);
        }
        const user = await getUserInfo({ id, prisma });
        if (!user) {
          throwCustomError("User not found", ErrorTypes.NOT_FOUND);
        }
        return user;
      } catch (error) {
        throwCustomError(
          error.message,
          error.extensions || ErrorTypes.INTERNAL_SERVER_ERROR
        );
      }
    },
    getAllUsers: async (_, {}, { prisma, user: authUser }) => {
      try {
        if (!authUser || authUser.type !== "ADMIN") {
          throwCustomError("Unauthorized", ErrorTypes.UNAUTHENTICATED);
        }

        return await getAllUsers({ prisma });
      } catch (error) {
        throwCustomError(
          error.message,
          error.extensions || ErrorTypes.INTERNAL_SERVER_ERROR
        );
      }
    },
  },
  Mutation: {
    updateUser: async (_, { input }, { prisma, user: authUser }) => {
      try {
        if (!authUser || authUser.type !== "USER") {
          throwCustomError("Unauthorized", ErrorTypes.UNAUTHENTICATED);
        }
        const userId = authUser.id;
        const existUser = await getUserInfo({ id: userId, prisma });
        if (!existUser) {
          throwCustomError("Unauthorized", ErrorTypes.UNAUTHENTICATED);
        }
        await updateUserSchema.validate(input, { abortEarly: false });
        return await updateUser({ id: userId, input, prisma });
      } catch (error) {
        throwCustomError(
          error.message,
          error.extensions || ErrorTypes.BAD_USER_INPUT
        );
      }
    },
    updateUserPassword: async (_, { input }, { prisma, user: authUser }) => {
      try {
        if (!authUser || authUser.type !== "USER") {
          throwCustomError("Unauthorized", ErrorTypes.UNAUTHENTICATED);
        }
        const userId = authUser.id;
        const existUser = await getUserInfo({ id: userId, prisma });
        if (!existUser) {
          throwCustomError("Unauthorized", ErrorTypes.UNAUTHENTICATED);
        }
        await updatePasswordSchema.validate(input, { abortEarly: false });
        return await updateUserPassword({
          existUser,
          input,
          prisma,
        });
      } catch (error) {
        throwCustomError(
          error.message,
          error.extensions || ErrorTypes.BAD_USER_INPUT
        );
      }
    },
    deleteUserById: async (_, { id }, { prisma, user: authUser }) => {
      try {
        if (!authUser || authUser.type !== "ADMIN") {
          throwCustomError("Unauthorized", ErrorTypes.UNAUTHENTICATED);
        }
        const user = await getUserInfo({ id, prisma });
        if (!user) {
          throwCustomError("User not found", ErrorTypes.NOT_FOUND);
        }
        const deletedUser = await deleteUserById({ id, prisma });
        return {
          message: `User with ID ${deletedUser.id} deleted successfully`,
        };
      } catch (error) {
        throwCustomError(
          error.message,
          error.extensions || ErrorTypes.UNAUTHENTICATED
        );
      }
    },

    forgetPassword: async (_, { input }, { prisma }) => {
      try {
        await forgetPasswordSchema.validate(input, { abortEarly: false });
        return await resetPassword({ input, prisma });
      } catch (error) {
        throwCustomError(
          error.message,
          error.extensions || ErrorTypes.BAD_USER_INPUT
        );
      }
    },

    verifyCodePin: async (_, { input }, { prisma }) => {
      try {
        await verifyCodePinSchema.validate(input, { abortEarly: false });
        return await verifyCodePin({ input, prisma });
      } catch (error) {
        throwCustomError(
          error.message,
          error.extensions || ErrorTypes.BAD_USER_INPUT
        );
      }
    },

    updateForgetPassword: async (_, { input }, { prisma }) => {
      try {
        await updatePasswordSchema.validate(input, { abortEarly: false });
        return (result = await updateForgetPassword({ input, prisma }));
      } catch (error) {
        throwCustomError(
          error.message,
          error.extensions || ErrorTypes.BAD_USER_INPUT
        );
      }
    },
    uploadUserImage: async (
      _,
      { userId, file },
      { prisma, user: authUser }
    ) => {
      try {
        if (
          !authUser ||
          (authUser.id !== userId && authUser.type !== "ADMIN")
        ) {
          throwCustomError("Unauthorized", ErrorTypes.UNAUTHENTICATED);
        }
        const user = await getUserInfo({ id: userId, prisma });
        if (!user) {
          throwCustomError("User not found", ErrorTypes.NOT_FOUND);
        }
        return await addUserImage({ userId, file, prisma });
      } catch (error) {
        throwCustomError(
          error.message,
          error.extensions || ErrorTypes.INTERNAL_SERVER_ERROR
        );
      }
    },
  },
};

export default userResolvers;
