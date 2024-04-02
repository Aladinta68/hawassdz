import {
  ErrorTypes,
  throwCustomError,
} from "../../utils/error/ErrorHandler.js";
import { getByid } from "./services.js";

export const UserResolver = {
  Query: {
    getUserById: async (_, { id }, { prisma }) => {
      try {
        const user = await getByid({ id });
        if (!user) {
          throw { message: "User not found", type: ErrorTypes.NOT_FOUND };
        }
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
    getAllUsers: async (_, {}, { prisma }) => {
      try {
        const users = await prisma.user.findMany();
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
    createUser: async (_, { userInput }, { prisma }) => {
      try {
        const user = await prisma.user.create({ data: userInput });
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
  },
};

export default UserResolver;
