import {
  ErrorTypes,
  throwCustomError,
} from "../../utils/error/ErrorHandler.js";
import {getAllUsers, getUserById, updateUserById, deleteUserById } from "./services.js"; 

export const UserResolver = {
  Query: {
    getUserById: async (_, { id }, { prisma }) => {
      try {
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
    getAllUsers: async (_, {}, { prisma }) => {
      try {
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
    deleteUserById: async (_, { id }, { prisma }) => {
      try {
        const deletedUser = await deleteUserById({ id, prisma }); 
        return { message: `User with ID ${deletedUser.id} deleted successfully` };
      } catch (error) {
        throwCustomError(
          "INTERNAL_SERVER_ERROR",
          ErrorTypes.INTERNAL_SERVER_ERROR
        );
      }
    },
  },
};

export default UserResolver;
