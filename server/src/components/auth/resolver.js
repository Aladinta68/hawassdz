import {
  ErrorTypes,
  throwCustomError,
} from "../../utils/error/ErrorHandler.js";
import { signAccessToken } from "./utils/utils.js";
import {
  loginSchema,
  registerAdminSchema,
  registerUserSchema,
  forgetPasswordSchema,
  verifyCodePinSchema,
  updatePasswordSchema,
} from "./validations.js";
import { default as GraphQLUpload } from "graphql-upload/GraphQLUpload.mjs";
import {
  findByEmail,
  createAdmin,
  createUser,
  deleteUserById,
  getAllUsers,
  getUserInfo,
  resetPassword,
  updateForgetPassword,
  uploadFile,
  verifyCodePin,
  addUserImage,
} from "./services.js";

export const authResolvers = {
  Upload: GraphQLUpload,
  Query: {
    getUserById: async (_, { id }, { prisma, user: authUser }) => {
      try {
        if (!authUser || authUser.type !== "ADMIN" || authUser.id === id) {
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

    getProfileInformation: async (_, __, { prisma, user: authUser }) => {
      try {
        const authID = authUser.id;
        if (!authID) {
          throwCustomError("Unauthorized", ErrorTypes.UNAUTHENTICATED);
        }

        const user = await getUserInfo({ id: authID, prisma });
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

        const users = await getAllUsers({ prisma });
        return users;
      } catch (error) {
        throwCustomError(
          error.message,
          error.extensions || ErrorTypes.INTERNAL_SERVER_ERROR
        );
      }
    },
  },
  Mutation: {
    login: async (_, { input }, { prisma }) => {
      try {
        await loginSchema.validate(input, { abortEarly: false });
        let { existUser, type } = await findByEmail({ input, prisma });
        const accessToken = await signAccessToken({ id: existUser.id, type });
        const AuthOutputWithType = {
          accessToken,
          type,
        };
        return AuthOutputWithType;
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
        return { accessToken };
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
        return { accessToken };
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
        const result = await resetPassword({ input, prisma });
        return result;
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
        const check = await verifyCodePin({ input, prisma });
        return check;
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
        const result = await updateForgetPassword({ input, prisma });
        return result;
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
        if (!authUser || authUser.id !== userId) {
          throwCustomError("Unauthorized", ErrorTypes.UNAUTHENTICATED);
        }
        const { url } = await uploadFile(file);
        return await addUserImage({ userId, url, prisma });
      } catch (error) {
        throwCustomError(
          error.message,
          error.extensions || ErrorTypes.INTERNAL_SERVER_ERROR
        );
      }
    },
  },
};

export default authResolvers;
