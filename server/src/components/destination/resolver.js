import {
  ErrorTypes,
  throwCustomError,
} from "../../utils/error/errorHandler.js";
import { default as GraphQLUpload } from "graphql-upload/GraphQLUpload.mjs";
import {
  createOne,
  deleteOne,
  getMany,
  getOne,
  updateOne,
} from "./services.js";

export const destinationResolvers = {
  Upload: GraphQLUpload,
  Query: {
    getDestinationById: async (_, { id }, { prisma }) => {
      try {
        const destination = await getOne({ id, prisma });
        if (!destination) {
          throwCustomError("destination not found", ErrorTypes.NOT_FOUND);
        }
        return destination;
      } catch (error) {
        throwCustomError(
          error.message,
          error.extensions || ErrorTypes.INTERNAL_SERVER_ERROR
        );
      }
    },
    getAllDestinations: async (
      _,
      { page = 1, perPage = 10, sortBy = "id", sortDirection = "asc" },
      { prisma }
    ) => {
      try {
        const destinations = await getMany({
          prisma,
          page,
          perPage,
          sortBy,
          sortDirection,
        });
        const totalCount = await prisma.destination.count();
        const maxPage = Math.ceil(totalCount / perPage);

        return { destinations, maxPage };
      } catch (error) {
        throwCustomError(
          error.message,
          error.extensions || ErrorTypes.INTERNAL_SERVER_ERROR
        );
      }
    },
  },
  Mutation: {
    addDestination: async (_, { input }, { prisma, user: authUser }) => {
      try {
        if (!authUser || authUser.type !== "ADMIN") {
          throwCustomError("Unauthorized", ErrorTypes.UNAUTHENTICATED);
        }
        const destination = await createOne({
          input,
          prisma,
        });
        return destination;
      } catch (error) {
        throwCustomError(
          error.message,
          error.extensions || ErrorTypes.BAD_USER_INPUT
        );
      }
    },
    deleteDestinationById: async (_, { id }, { prisma, user: authUser }) => {
      try {
        if (!authUser || authUser.type !== "ADMIN") {
          throwCustomError("Unauthorized", ErrorTypes.UNAUTHENTICATED);
        }
        const destination = await getOne({ id, prisma });
        if (!destination) {
          throwCustomError("destination not found", ErrorTypes.NOT_FOUND);
        }
        const deletedDestination = await deleteOne({ id, destination, prisma });
        return {
          message: `destination with ID ${deletedDestination.id} deleted successfully`,
        };
      } catch (error) {
        throwCustomError(
          error.message,
          error.extensions || ErrorTypes.UNAUTHENTICATED
        );
      }
    },
    updateDestinationById: async (
      _,
      { id, input },
      { prisma, user: authUser }
    ) => {
      try {
        if (!authUser || authUser.type !== "ADMIN") {
          throwCustomError("Unauthorized", ErrorTypes.UNAUTHENTICATED);
        }
        const existingDestination = await getOne({ id, prisma });
        if (!existingDestination) {
          throwCustomError("destination not found", ErrorTypes.NOT_FOUND);
        }
        const updatedDestination = await updateOne({
          id,
          input,
          existingDestination,
          prisma,
        });
        return updatedDestination;
      } catch (error) {
        throwCustomError(
          error.message,
          error.extensions || ErrorTypes.INTERNAL_SERVER_ERROR
        );
      }
    },
  },
};

export default destinationResolvers;
