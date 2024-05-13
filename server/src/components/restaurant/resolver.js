import {
  ErrorTypes,
  throwCustomError,
} from "../../utils/error/ErrorHandler.js";
import { default as GraphQLUpload } from "graphql-upload/GraphQLUpload.mjs";
import {
  createOne,
  deleteOne,
  getMany,
  getOne,
  updateOne,
} from "./services.js";
export const restaurantResolvers = {
  Upload: GraphQLUpload,
  Query: {
    getRestaurantById: async (_, { id }, { prisma }) => {
      try {
        const restaurant = await getOne({ id, prisma });
        if (!restaurant) {
          throwCustomError("restaurant not found", ErrorTypes.NOT_FOUND);
        }
        return restaurant;
      } catch (error) {
        throwCustomError(
          error.message,
          error.extensions || ErrorTypes.INTERNAL_SERVER_ERROR
        );
      }
    },
    getAllRestaurants: async (
      _,
      { page = 1, perPage = 10, sortBy = "id", sortDirection = "asc" },
      { prisma }
    ) => {
      try {
        const restaurants = await getMany({
          prisma,
          page,
          perPage,
          sortBy,
          sortDirection,
        });
        const totalCount = await prisma.restaurant.count();
        const maxPage = Math.ceil(totalCount / perPage);

        return { restaurants, maxPage };
      } catch (error) {
        throwCustomError(
          error.message,
          error.extensions || ErrorTypes.INTERNAL_SERVER_ERROR
        );
      }
    },
  },
  Mutation: {
    addRestaurant: async (_, { input }, { prisma, user: authUser }) => {
      try {
        if (!authUser || authUser.type !== "ADMIN") {
          throwCustomError("Unauthorized", ErrorTypes.UNAUTHENTICATED);
        }
        const restaurant = await createOne({
          input,
          prisma,
        });
        return restaurant;
      } catch (error) {
        throwCustomError(
          error.message,
          error.extensions || ErrorTypes.BAD_USER_INPUT
        );
      }
    },
    deleteRestaurantById: async (_, { id }, { prisma, user: authUser }) => {
      try {
        if (!authUser || authUser.type !== "ADMIN") {
          throwCustomError("Unauthorized", ErrorTypes.UNAUTHENTICATED);
        }
        const restaurant = await getOne({ id, prisma });
        if (!restaurant) {
          throwCustomError("restaurant not found", ErrorTypes.NOT_FOUND);
        }
        const deletedRestaurant = await deleteOne({ id, restaurant, prisma });
        return {
          message: `restaurant with ID ${deletedRestaurant.id} deleted successfully`,
        };
      } catch (error) {
        throwCustomError(
          error.message,
          error.extensions || ErrorTypes.UNAUTHENTICATED
        );
      }
    },
    updateRestaurantById: async (_, { id, input }, { prisma, user: authUser }) => {
      try {
        if (!authUser || authUser.type !== "ADMIN") {
          throwCustomError("Unauthorized", ErrorTypes.UNAUTHENTICATED);
        }
        const existingRestaurant = await getOne({ id, prisma });
        if (!existingRestaurant) {
          throwCustomError("restaurant not found", ErrorTypes.NOT_FOUND);
        }
        const updatedRestaurant = await updateOne({
          id,
          input,
          existingRestaurant,
          prisma,
        });
        return updatedRestaurant;
      } catch (error) {
        throwCustomError(
          error.message,
          error.extensions || ErrorTypes.INTERNAL_SERVER_ERROR
        );
      }
    },
  },
};

export default restaurantResolvers;
