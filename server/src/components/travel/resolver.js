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
  getOneWithUserId,
  updateOne,
  getManyByUser,
} from "./services.js";
export const travelResolvers = {
  Upload: GraphQLUpload,
  Query: {
    getTravelById: async (_, { id }, { prisma }) => {
      try {
        const travel = await getOne({ id, prisma });
        if (!travel) {
          throwCustomError("travel not found", ErrorTypes.NOT_FOUND);
        }
        return travel;
      } catch (error) {
        throwCustomError(
          error.message,
          error.extensions || ErrorTypes.INTERNAL_SERVER_ERROR
        );
      }
    },
    getTravelsByUser: async (
      _,
      { page = 1, perPage = 10, sortBy = "id", sortDirection = "asc" },
      { prisma, user: authUser }
    ) => {
      if (!authUser || authUser.type !== "USER") {
        throwCustomError("Unauthorized", ErrorTypes.UNAUTHENTICATED);
      }
      const userId = authUser.id;
      try {
        const travels = await getManyByUser({
          userId,
          prisma,
          page,
          perPage,
          sortBy,
          sortDirection,
        });
        const totalCount = await prisma.travel.count();
        const maxPage = Math.ceil(totalCount / perPage);
        return { travels, maxPage };
      } catch (error) {
        throwCustomError(
          error.message,
          error.extensions || ErrorTypes.INTERNAL_SERVER_ERROR
        );
      }
    },
    getAllTravels: async (
      _,
      { page = 1, perPage = 10, sortBy = "id", sortDirection = "asc" },
      { prisma }
    ) => {
      try {
        const travels = await getMany({
          prisma,
          page,
          perPage,
          sortBy,
          sortDirection,
        });
        const totalCount = await prisma.travel.count();
        const maxPage = Math.ceil(totalCount / perPage);

        return { travels, maxPage };
      } catch (error) {
        throwCustomError(
          error.message,
          error.extensions || ErrorTypes.INTERNAL_SERVER_ERROR
        );
      }
    },
  },
  Mutation: {
    addTravel: async (_, { input }, { prisma, user: authUser }) => {
      try {
        if (!authUser || authUser.type !== "USER") {
          throwCustomError("Unauthorized", ErrorTypes.UNAUTHENTICATED);
        }
        const userId = authUser.id;
        const travel = await createOne({
          input,
          userId,
          prisma,
        });
        return travel;
      } catch (error) {
        throwCustomError(
          error.message,
          error.extensions || ErrorTypes.BAD_USER_INPUT
        );
      }
    },
    deleteTravelById: async (_, { id }, { prisma, user: authUser }) => {
      try {
        if (
          !authUser ||
          (authUser.type !== "ADMIN" && authUser.type !== "USER")
        ) {
          throwCustomError("Unauthorized", ErrorTypes.UNAUTHENTICATED);
        }
        if (authUser.type === "USER") {
          const userId = authUser.id;
          const travel = await getOneWithUserId({ id, userId, prisma });
          if (!travel) {
            throwCustomError("Unauthorized", ErrorTypes.UNAUTHENTICATED);
          }
        }
        const travel = await getOne({ id, prisma });
        if (!travel) {
          throwCustomError("travel not found", ErrorTypes.NOT_FOUND);
        }
        const deletedTravel = await deleteOne({ id, travel, prisma });
        return {
          message: `travel with ID ${deletedTravel.id} deleted successfully`,
        };
      } catch (error) {
        throwCustomError(
          error.message,
          error.extensions || ErrorTypes.UNAUTHENTICATED
        );
      }
    },
    updateTravelById: async (_, { id, input }, { prisma, user: authUser }) => {
      try {
        if (!authUser || authUser.type !== "USER") {
          throwCustomError("Unauthorized", ErrorTypes.UNAUTHENTICATED);
        }
        const userId = authUser.id;
        const travel = await getOneWithUserId({ id, userId, prisma });
        if (!travel) {
          throwCustomError("Unauthorized", ErrorTypes.UNAUTHENTICATED);
        }
        const existingTravel = await getOne({ id, prisma });
        if (!existingTravel) {
          throwCustomError("travel not found", ErrorTypes.NOT_FOUND);
        }
        const updatedTravel = await updateOne({
          id,
          input,
          userId,
          existingTravel,
          prisma,
        });
        return updatedTravel;
      } catch (error) {
        throwCustomError(
          error.message,
          error.extensions || ErrorTypes.INTERNAL_SERVER_ERROR
        );
      }
    },
  },
};

export default travelResolvers;
