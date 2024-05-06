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
  updateOne,
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
    getAllWilayas: async (
      _,
      { page = 1, perPage = 10, sortBy = "id", sortDirection = "asc" },
      { prisma }
    ) => {
      try {
        const wilayas = await getMany({
          prisma,
          page,
          perPage,
          sortBy,
          sortDirection,
        });
        const totalCount = await prisma.wilaya.count();
        const maxPage = Math.ceil(totalCount / perPage);

        return { wilayas, maxPage };
      } catch (error) {
        throwCustomError(
          error.message,
          error.extensions || ErrorTypes.INTERNAL_SERVER_ERROR
        );
      }
    },
  },
  Mutation: {
    addAllWilaya: async (_,__, { prisma }) => {
      try {
        const wilayaNames = [
          "ولاية أدرار",
          "ولاية الشلف",
          "ولاية الأغواط",
          "ولاية أم البواقي",
          "ولاية باتنة",
          "ولاية بجاية",
          "ولاية بسكرة",
          "ولاية بشار",
          "ولاية البليدة",
          "ولاية البويرة",
          "ولاية تمنراست",
          "ولاية تبسة",
          "ولاية تلمسان",
          "ولاية تيارت",
          "ولاية تيزي وزو",
          "ولاية الجزائر",
          "ولاية الجلفة",
          "ولاية جيجل",
          "ولاية سطيف",
          "ولاية سعيدة",
          "ولاية سكيكدة",
          "ولاية سيدي بلعباس",
          "ولاية عنابة",
          "ولاية قالمة",
          "ولاية قسنطينة",
          "ولاية المدية",
          "ولاية مستغانم",
          "ولاية المسيلة",
          "ولاية معسكر",
          "ولاية ورقلة",
          "ولاية وهران",
          "ولاية البيض",
          "ولاية إليزي",
          "ولاية برج بوعريريج",
          "ولاية بومرداس",
          "ولاية الطارف",
          "ولاية تندوف",
          "ولاية تيسمسيلت",
          "ولاية الوادي",
          "ولاية خنشلة",
          "ولاية سوق أهراس",
          "ولاية تيبازة",
          "ولاية ميلة",
          "ولاية عين الدفلى",
          "ولاية النعامة",
          "ولاية عين تموشنت",
          "ولاية غرداية",
          "ولاية غليزان",
          "ولاية تيميمون",
          "ولاية برج باجي مختار",
          "ولاية أولاد جلال",
          "ولاية بني عباس",
          "ولاية إن صالح",
          "ولاية إن قزام",
          "ولاية تقرت",
          "ولاية جانت",
          "ولاية المغير",
          "ولاية المنيعة"
        ];
        
        for (const name of wilayaNames) {
          await prisma.wilaya.create({
            data: {
              name: name,
            },
          });
        }
        return "all wilaya added";
      } catch (error) {
        throwCustomError(
          error.message,
          error.extensions || ErrorTypes.BAD_USER_INPUT
        );
      }
    },
    addWilaya: async (_, { input }, { prisma, user: authUser }) => {
      try {
        if (!authUser || authUser.type !== "ADMIN") {
          throwCustomError("Unauthorized", ErrorTypes.UNAUTHENTICATED);
        }
        const { name } = input;
        const existWilaya = await findByName({ name, prisma });
        if (existWilaya) {
          throwCustomError(
            "Credential already exist",
            ErrorTypes.ALREADY_EXISTS
          );
        }
        const wilaya = await createOne({
          input,
          prisma,
        });
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
        const wilaya = await getOne({ id, prisma });
        if (!wilaya) {
          throwCustomError("Wilaya not found", ErrorTypes.NOT_FOUND);
        }
        const deletedWilaya = await deleteOne({ id, wilaya, prisma });
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
    updateWilayaById: async (_, { id, input }, { prisma, user: authUser }) => {
      try {
        if (!authUser || authUser.type !== "ADMIN") {
          throwCustomError("Unauthorized", ErrorTypes.UNAUTHENTICATED);
        }
        const existingWilaya = await getOne({ id, prisma });
        if (!existingWilaya) {
          throwCustomError("Wilaya not found", ErrorTypes.NOT_FOUND);
        }
        const updatedWilaya = await updateOne({
          id,
          input,
          existingWilaya,
          prisma,
        });
        return updatedWilaya;
      } catch (error) {
        throwCustomError(
          error.message,
          error.extensions || ErrorTypes.INTERNAL_SERVER_ERROR
        );
      }
    },
  },
};

export default wilayaResolvers;
