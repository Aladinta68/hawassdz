import {
  throwCustomError,
  ErrorTypes,
} from "../../utils/error/ErrorHandler.js";
import { createWilayaSchema, updateWilayaSchema } from "./validations.js";
import {
  getAll,
  getOne,
  deleteOne,
  addWilaya,
  uploadFiles,
} from "./services.js";

export const wilayaResolvers = {
  Query: {
    getWilayaById: async (_, { id }, { prisma }) => {
      try {
        const wilaya = await getOne(id, prisma);
        if (!wilaya) {
          throw { message: "wilaya not found", type: ErrorTypes.NOT_FOUND };
        }
        return wilaya;
      } catch (error) {
        throwCustomError(
          error.message || "Failed to fetch Wilaya",
          ErrorTypes.INTERNAL_SERVER_ERROR
        );
      }
    },
    getAllWilaya: async (_, {}, { prisma }) => {
      try {
        return await getAll(prisma);
      } catch (error) {
        throwCustomError(
          error.message || "Failed to fetch  Wilayas",
          ErrorTypes.INTERNAL_SERVER_ERROR
        );
      }
    },
  },
  Mutation: {
    createWilaya: async (_, { input }, { prisma }) => {
      try {
        const uploadedImages = await uploadFiles(input.images);
        const wilaya = await addWilaya({ input, uploadedImages, prisma });
        return wilaya;
      } catch (error) {
        throwCustomError(
          error.message || "Failed to create wilaya",
          error.type || ErrorTypes.INTERNAL_SERVER_ERROR
        );
      }
    },
    deleteWilaya: async (_, { id }, { prisma, user: authUser }) => {
      try {
        if (!authUser || authUser.type !== "ADMIN") {
          throwCustomError("Unauthorized", ErrorTypes.UNAUTHORIZED);
        }
        const deletedWilaya = await deleteOne(id, prisma);
        return {
          message: `Wilaya with ID ${deletedWilaya.id} deleted successfully`,
        };
      } catch (error) {
        throwCustomError(
          error.message || "Failed to delete Wilaya",
          ErrorTypes.INTERNAL_SERVER_ERROR
        );
      }
    },
  },
};

export default wilayaResolvers;
