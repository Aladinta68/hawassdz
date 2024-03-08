import { ApolloError } from "apollo-server";
import { prismaClient } from "../../prisma/client.js";

const prisma = prismaClient();

export const UserResolver = {
  Query: {
    getUserById: async (_, { id }) => {
      try {
        const user = await prisma.user.findUnique({ where: { id } });
        if (!user) {
          throw new ApolloError("User not found", "USER_NOT_FOUND");
        }
        return user;
      } catch (error) {
        throw new ApolloError(
          "Failed to fetch user",
          "FETCH_USER_ERROR",
          error
        );
      }
    },
  },
  Mutation: {
    createUser: async (_, { userInput }) => {
      try {
        const user = await prisma.user.create({ data: userInput });
        return user;
      } catch (error) {
        console.log(error);
        throw new ApolloError(
          "Failed to create user",
          "CREATE_USER_ERROR",
          error
        );
      }
    },
  },
};

export default UserResolver;
