import { ApolloError } from "apollo-server";
export const UserResolver = {
  Query: {
    getUserById: async (_, { id }, { prisma }) => {
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
    getAllUsers: async (_, {}, { prisma }) => {
      try {
        const users = await prisma.user.findMany();
        return users;
      } catch (error) {
        throw new ApolloError(
          "Failed to fetch users",
          "FETCH_USERS_ERROR",
          error
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
