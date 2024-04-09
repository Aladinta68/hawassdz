import * as yup from "yup";
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
  addUserImage,
  createAdmin,
  createUser,
  deleteUserById,
  findByEmail,
  getAllUsers,
  resetPassword,
  updateForgetPassword,
  uploadFile,
  verifyCodePin,
} from "./services.js";

export const authResolvers = {
  Upload: GraphQLUpload,
  Query: {
    getUserById: async (_, { id }, { prisma, user: authUser }) => {
      try {
        if (!authUser || authUser.type !== "ADMIN") {
          throw { message: "Unauthorized", type: ErrorTypes.UNAUTHORIZED };
        }
        const user = await getUserById({ id, prisma });
        if (!user) {
          throw { message: "User not found", type: ErrorTypes.NOT_FOUND };
        }
        return user;
      } catch (error) {
        if (error.type) {
          throwCustomError(error.message, error.type);
        }
        throwCustomError(
          "INTERNAL_SERVER_ERROR",
          ErrorTypes.INTERNAL_SERVER_ERROR
        );
      }
    },
    getAllUsers: async (_, {}, { prisma, user: authUser }) => {
      try {
        if (!authUser || authUser.type !== "ADMIN") {
          throw { message: "Unauthorized", type: ErrorTypes.UNAUTHORIZED };
        }
        const users = await getAllUsers({ prisma });
        return users;
      } catch (error) {
        if (error.type) {
          throwCustomError(error.message, error.type);
        }
        throwCustomError(
          "INTERNAL_SERVER_ERROR",
          ErrorTypes.INTERNAL_SERVER_ERROR
        );
      }
    },
  },
  Mutation: {
    login: async (_, { input }, { prisma }) => {
      try {
        await loginSchema.validate(input, { abortEarly: false });
        let {existUser,type} = await findByEmail({ input, prisma });
        const accessToken = await signAccessToken({ id: existUser.id, type });
        const authOutput = {
          accessToken,
        };
        return authOutput;
      } catch (error) {
        if (error instanceof yup.ValidationError) {
          const errors = {};
          error.inner.reverse().forEach((error) => {
            const field = error.path;
            const message = error.message;
            if (!errors[field]) {
              errors[field] = message;
            }
          });
          throwCustomError("Bad User Input", ErrorTypes.BAD_USER_INPUT, errors);
        }
        throwCustomError(error.message, error.type);
      }
    },
    registerAdmin: async (_, { input }, { prisma }) => {
      try {
        await registerAdminSchema.validate(input, { abortEarly: false });
        const admin = await createAdmin({ input, prisma });
        const type = "ADMIN";
        const accessToken = await signAccessToken({ id: admin.id, type });
        const authOutput = {
          accessToken,
        };
        return authOutput;
      } catch (error) {
        if (error instanceof yup.ValidationError) {
          const errors = {};
          error.inner.reverse().forEach((error) => {
            const field = error.path;
            const message = error.message;
            if (!errors[field]) {
              errors[field] = message;
            }
          });
          throwCustomError("Bad User Input", ErrorTypes.BAD_USER_INPUT, errors);
        }
        throwCustomError(
          error.message,
          error.type || ErrorTypes.INTERNAL_SERVER_ERROR
        );
      }
    },
    registerUser: async (_, { input }, { prisma }) => {
      try {
        await registerUserSchema.validate(input, { abortEarly: false });
        const user = await createUser({ input, prisma });
        const type = "USER";
        const accessToken = await signAccessToken({ id: user.id, type });
        const authOutput = {
          accessToken,
        };
        return authOutput;
      } catch (error) {
        if (error instanceof yup.ValidationError) {
          const errors = {};
          error.inner.reverse().forEach((error) => {
            const field = error.path;
            const message = error.message;
            if (!errors[field]) {
              errors[field] = message;
            }
          });
          throwCustomError("Bad User Input", ErrorTypes.BAD_USER_INPUT, errors);
        }
        throwCustomError(
          error.message,
          error.type || ErrorTypes.INTERNAL_SERVER_ERROR
        );
      }
    },
    deleteUserById: async (_, { id }, { prisma, user: authUser }) => {
      try {
        if (!authUser || authUser.type !== "ADMIN") {
          throw { message: "Unauthorized", type: ErrorTypes.UNAUTHORIZED };
        }
        const deletedUser = await deleteUserById({ id, prisma });
        return {
          message: `User with ID ${deletedUser.id} deleted successfully`,
        };
      } catch (error) {
        if (error.type) {
          throwCustomError(error.message, error.type);
        }
        throwCustomError(
          "INTERNAL_SERVER_ERROR",
          ErrorTypes.INTERNAL_SERVER_ERROR
        );
      }
    },
    forgetPassword: async (_, { input }, { prisma }) => {
      try {
        await forgetPasswordSchema.validate(input, { abortEarly: false });
        const result = await resetPassword({ input, prisma });
        return result;
      } catch (error) {
        if (error instanceof yup.ValidationError) {
          const errors = {};
          error.inner.reverse().forEach((error) => {
            const field = error.path;
            const message = error.message;
            if (!errors[field]) {
              errors[field] = message;
            }
          });
          throwCustomError("Bad User Input", ErrorTypes.BAD_USER_INPUT, errors);
        }
        throw error;
      }
    },
    verifyCodePin: async (_, { input }, { prisma }) => {
      try {
        await verifyCodePinSchema.validate(input, { abortEarly: false });
        const check = await verifyCodePin({ input, prisma });
        return check;
      } catch (error) {
        if (error instanceof yup.ValidationError) {
          const errors = {};
          error.inner.reverse().forEach((error) => {
            const field = error.path;
            const message = error.message;
            if (!errors[field]) {
              errors[field] = message;
            }
          });
          throwCustomError("Bad User Input", ErrorTypes.BAD_USER_INPUT, errors);
        }
        throw error;
      }
    },
    updateForgetPassword: async (_, { input }, { prisma }) => {
      try {
        await updatePasswordSchema.validate(input, { abortEarly: false });
        const result = await updateForgetPassword({ input, prisma });
        return result;
      } catch (error) {
        if (error instanceof yup.ValidationError) {
          const errors = {};
          error.inner.reverse().forEach((error) => {
            const field = error.path;
            const message = error.message;
            if (!errors[field]) {
              errors[field] = message;
            }
          });
          throwCustomError("Bad User Input", ErrorTypes.BAD_USER_INPUT, errors);
        }
        throw error;
      }
    },
    uploadUserImage: async (
      _,
      { userId, file },
      { prisma, user: authUser }
    ) => {
      try {
        console.log(authUser);
        if (!authUser || authUser.id !== userId) {
          throw { message: "Unauthorized", type: ErrorTypes.UNAUTHORIZED };
        }
        const { url } = await uploadFile(file);
        return await addUserImage({ userId, url, prisma });
      } catch (error) {
        throwCustomError(
          error.message,
          error.type || ErrorTypes.INTERNAL_SERVER_ERROR
        );
      }
    },
  },
};

export default authResolvers;
