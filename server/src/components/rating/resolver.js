import {
  ErrorTypes,
  throwCustomError,
} from "../../utils/error/ErrorHandler.js";
import { default as GraphQLUpload } from "graphql-upload/GraphQLUpload.mjs";
import { createOne } from "./services.js";
import { getOne as getHotel } from "../hotel/services.js";
import { getOne as getDestination } from "../destination/services.js";
import { getOne as getRestaurant } from "../restaurant/services.js";
import { getOne as getTravel } from "../travel/services.js";

export const ratingResolvers = {
  Upload: GraphQLUpload,
  Query: {},
  Mutation: {
    addRating: async (_, { input }, { prisma, user: authUser }) => {
      try {
        if (
          !authUser ||
          (authUser.type !== "ADMIN" && authUser.type !== "USER")
        ) {
          throwCustomError("Unauthorized", ErrorTypes.UNAUTHENTICATED);
        }
        const userId = authUser.id;
        const { tableName, tableId } = input;
        let existTable;
        if (tableName === "Hotel") {
          existTable = await getHotel({ id: tableId, prisma });
        } else if (tableName === "Destination") {
          existTable = await getDestination({ id: tableId, prisma });
        } else if (tableName === "Restaurant") {
          existTable = await getRestaurant({ id: tableId, prisma });
        } else if (tableName === "Travel") {
          existTable = await getTravel({ id: tableId, prisma });
        }
        if (!existTable) {
          throwCustomError("Entity not found", ErrorTypes.NOT_FOUND);
        }
        return await createOne({
          userId,
          input,
          prisma,
        });
      } catch (error) {
        throwCustomError(
          error.message,
          error.extensions || ErrorTypes.BAD_USER_INPUT
        );
      }
    },
  },
};

export default ratingResolvers;
