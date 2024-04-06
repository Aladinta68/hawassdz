import * as yup from "yup";

import {
  ErrorTypes,
  throwCustomError,
} from "../../../utils/error/ErrorHandler.js";
import { signAccessToken } from "../utils.js";
import {
  getAllUsers,
  findByEmail,
  createOne,
  getUserById,
  deleteUserById,
} from "./services.js";
import { loginSchema, registerSchema } from "./validations.js";

export const AdminResolver = {
  Query: {
    getUserById: async (_, { id }, { prisma, user: authUser }) => {
      try {
        if (!authUser) {
          throw { message: "Unauthorized", type: ErrorTypes.UNAUTHORIZED };
        }
        if (authUser.type !== "ADMIN") {
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
    getAllUsers: async (_, {},  { prisma, user: authUser }) => {
      try {
        if (!authUser) {
          throw { message: "Unauthorized", type: ErrorTypes.UNAUTHORIZED };
        }
        if (authUser.type !== "ADMIN") {
          throw { message: "Unauthorized", type: ErrorTypes.UNAUTHORIZED };
        }
        const users = await getAllUsers({ prisma });
        return users;
      } catch (error) {
        throwCustomError(
          "INTERNAL_SERVER_ERROR",
          ErrorTypes.INTERNAL_SERVER_ERROR
        );
      }
    },
  },
  Mutation: {
    deleteUserById: async (_, { id },  { prisma, user: authUser }) => {
      try {
        if (!authUser) {
          throw { message: "Unauthorized", type: ErrorTypes.UNAUTHORIZED };
        }
        if (authUser.type !== "ADMIN") {
          throw { message: "Unauthorized", type: ErrorTypes.UNAUTHORIZED };
        }
        const deletedUser = await deleteUserById({ id, prisma });
        return {
          message: `User with ID ${deletedUser.id} deleted successfully`,
        };
      } catch (error) {
        throwCustomError(
          "INTERNAL_SERVER_ERROR",
          ErrorTypes.INTERNAL_SERVER_ERROR
        );
      }
    },
    loginAdmin: async (_, { input }, { prisma }) => {
      try {
        await loginSchema.validate(input, { abortEarly: false });
        const admin = await findByEmail({ input, prisma });
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
        throwCustomError(error.message, error.type);
      }
    },
    registerAdmin: async (_, { input }, { prisma }) => {
      try {
        await registerSchema.validate(input, { abortEarly: false });
        const admin = await createOne({ input, prisma });
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
  },
};

export default AdminResolver;
