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
export const hotelResolvers = {
  Upload: GraphQLUpload,
  Query: {
    getHotelById: async (_, { id }, { prisma }) => {
      try {
        const hotel = await getOne({ id, prisma });
        if (!hotel) {
          throwCustomError("hotel not found", ErrorTypes.NOT_FOUND);
        }
        return hotel;
      } catch (error) {
        throwCustomError(
          error.message,
          error.extensions || ErrorTypes.INTERNAL_SERVER_ERROR
        );
      }
    },
    getAllHotels: async (
      _,
      { page = 1, perPage = 10, sortBy = "id", sortDirection = "asc" },
      { prisma }
    ) => {
      try {
        const hotels = await getMany({
          prisma,
          page,
          perPage,
          sortBy,
          sortDirection,
        });
        const totalCount = await prisma.hotel.count();
        const maxPage = Math.ceil(totalCount / perPage);

        return { hotels, maxPage };
      } catch (error) {
        throwCustomError(
          error.message,
          error.extensions || ErrorTypes.INTERNAL_SERVER_ERROR
        );
      }
    },
  },
  Mutation: {
    addHotel: async (_, { input }, { prisma, user: authUser }) => {
      try {
        if (!authUser || authUser.type !== "ADMIN") {
          throwCustomError("Unauthorized", ErrorTypes.UNAUTHENTICATED);
        }
        const hotel = await createOne({
          input,
          prisma,
        });
        return hotel;
      } catch (error) {
        throwCustomError(
          error.message,
          error.extensions || ErrorTypes.BAD_USER_INPUT
        );
      }
    },
    deleteHotelById: async (_, { id }, { prisma, user: authUser }) => {
      try {
        if (!authUser || authUser.type !== "ADMIN") {
          throwCustomError("Unauthorized", ErrorTypes.UNAUTHENTICATED);
        }
        const hotel = await getOne({ id, prisma });
        if (!hotel) {
          throwCustomError("hotel not found", ErrorTypes.NOT_FOUND);
        }
        const deletedHotel = await deleteOne({ id, hotel, prisma });
        return {
          message: `hotel with ID ${deletedHotel.id} deleted successfully`,
        };
      } catch (error) {
        throwCustomError(
          error.message,
          error.extensions || ErrorTypes.UNAUTHENTICATED
        );
      }
    },
    updateHotelById: async (_, { id, input }, { prisma, user: authUser }) => {
      try {
        if (!authUser || authUser.type !== "ADMIN") {
          throwCustomError("Unauthorized", ErrorTypes.UNAUTHENTICATED);
        }
        const existingHotel = await getOne({ id, prisma });
        if (!existingHotel) {
          throwCustomError("hotel not found", ErrorTypes.NOT_FOUND);
        }
        const updatedHotel = await updateOne({
          id,
          input,
          existingHotel,
          prisma,
        });
        return updatedHotel;
      } catch (error) {
        throwCustomError(
          error.message,
          error.extensions || ErrorTypes.INTERNAL_SERVER_ERROR
        );
      }
    },
  },
};

export default hotelResolvers;
