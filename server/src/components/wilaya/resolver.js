import {
  ErrorTypes,
  throwCustomError,
} from "../../utils/error/ErrorHandler.js";
import { default as GraphQLUpload } from "graphql-upload/GraphQLUpload.mjs";
import {
  createOne,
  deleteOne,
  findByName,
  getMany,
  getOne,
  uploadFile,
} from "./services.js";

export const wilayaResolvers = {
  Upload: GraphQLUpload,
  Query: {
    getWilayaById: async (_, { id }, { prisma }) => {
      try {
        const wilaya = await getOne({ id, prisma });
        if (!wilaya) {
          throwCustomError("wilaya not found", ErrorTypes.NOT_FOUND);
        }
        return wilaya;
      } catch (error) {
        throwCustomError(
          error.message,
          error.extensions || ErrorTypes.INTERNAL_SERVER_ERROR
        );
      }
    },
    getAllWilayas: async (_, {}, { prisma }) => {
      try {
        const wilayas = await getMany({ prisma });
        return wilayas;
      } catch (error) {
        throwCustomError(
          error.message,
          error.extensions || ErrorTypes.INTERNAL_SERVER_ERROR
        );
      }
    },
  },
  Mutation: {
    addWilaya: async (_, { input }, { prisma, user: authUser }) => {
      try {
        if (!authUser || authUser.type !== "ADMIN") {
          throwCustomError("Unauthorized", ErrorTypes.UNAUTHENTICATED);
        }
        const { name, description, files } = input;
        const existWilaya = await findByName({ name, prisma });
        if (existWilaya) {
          throwCustomError(
            "Credential already exist",
            ErrorTypes.ALREADY_EXISTS
          );
        }
        const imageUrls = [];
        for (const file of files) {
          const { url } = await uploadFile(file);
          imageUrls.push(url);
        }
        const wilaya = await createOne({ name, description, imageUrls, prisma });
        return wilaya;
      } catch (error) {
        throwCustomError(
          error.message,
          error.extensions || ErrorTypes.BAD_USER_INPUT
        );
      }
    },
    deleteWilayaById: async (_, { id }, { prisma, user: authUser }) => {
      try {
        if (!authUser || authUser.type !== "ADMIN") {
          throwCustomError("Unauthorized", ErrorTypes.UNAUTHENTICATED);
        }
        const deletedWilaya = await deleteOne({ id, prisma });
        return {
          message: `Wilaya with ID ${deletedWilaya.id} deleted successfully`,
        };
      } catch (error) {
        throwCustomError(
          error.message,
          error.extensions || ErrorTypes.UNAUTHENTICATED
        );
      }
    },
  },
};

export default wilayaResolvers;
