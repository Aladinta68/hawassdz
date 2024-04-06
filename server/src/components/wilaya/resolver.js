import * as yup from 'yup';
import {
  addWilayaSchema,
  updateWilayaSchema,
} from './validations.js';
import {
  getOne,
  getAll,
  createOne,
  deleteOne,
  updateOne,
} from './services.js';
import {
  ErrorTypes,
  throwCustomError,
} from '../../utils/error/ErrorHandler.js';

export const WilayaResolver = {
  Query: {
    getWilayaById: async (_, { id }, { prisma }) => {
      try {
        const wilaya = await getOne({ id, prisma });
        if (!wilaya) {
          throw { message: 'Wilaya not found', type: ErrorTypes.NOT_FOUND };
        }
        return wilaya;
      } catch (error) {
        throwCustomError(
          error.message || 'Internal server error',
          error.type || ErrorTypes.INTERNAL_SERVER_ERROR
        );
      }
    },
    getAllWilaya: async (_, {}, { prisma }) => {
      try {
        const wilayas = await getAll({ prisma });
        return wilayas;
      } catch (error) {
        throwCustomError(
          'Failed to fetch all Wilayas',
          ErrorTypes.INTERNAL_SERVER_ERROR
        );
      }
    },
  },
  Mutation: {
    addWilaya: async (_, { input }, { prisma, user: authUser }) => {
      try {
        if (!authUser || authUser.type !== 'ADMIN') {
          throw { message: 'Unauthorized', type: ErrorTypes.UNAUTHORIZED };
        }
        await addWilayaSchema.validate(input, { abortEarly: false });
        const wilaya = await createOne({ input, prisma });
        return wilaya;
      } catch (error) {
        if (error instanceof yup.ValidationError) {
          const errors = {};
          error.inner.reverse().forEach((error) => {
            const field = error.path;
            const message = error.message;
            if (!errors[field]) {
              errors[field] = message;
            }
          });
          throwCustomError(
            'Bad User Input',
            ErrorTypes.BAD_USER_INPUT,
            errors
          );
        }
        throwCustomError(
          error.message || 'Internal server error',
          error.type || ErrorTypes.INTERNAL_SERVER_ERROR
        );
      }
    },
    updateWilaya: async (_, { id, input }, { prisma, user: authUser }) => {
      try {
        if (!authUser || authUser.type !== 'ADMIN') {
          throw { message: 'Unauthorized', type: ErrorTypes.UNAUTHORIZED };
        }
        await updateWilayaSchema.validate(input, { abortEarly: false });
        const updatedWilaya = await updateOne({ id, input, prisma });
        return updatedWilaya;
      } catch (error) {
        if (error instanceof yup.ValidationError) {
          const errors = {};
          error.inner.reverse().forEach((error) => {
            const field = error.path;
            const message = error.message;
            if (!errors[field]) {
              errors[field] = message;
            }
          });
          throwCustomError(
            'Bad User Input',
            ErrorTypes.BAD_USER_INPUT,
            errors
          );
        }
        throwCustomError(
          error.message || 'Internal server error',
          error.type || ErrorTypes.INTERNAL_SERVER_ERROR
        );
      }
    },
    deleteWilaya: async (_, { id }, { prisma, user: authUser }) => {
      try {
        if (!authUser || authUser.type !== 'ADMIN') {
          throw { message: 'Unauthorized', type: ErrorTypes.UNAUTHORIZED };
        }
        const deletedWilaya = await deleteOne({ id, prisma });
        return {
          message: `Wilaya with ID ${deletedWilaya.id} deleted successfully`,
        };
      } catch (error) {
        throwCustomError(
          error.message || 'Internal server error',
          error.type || ErrorTypes.INTERNAL_SERVER_ERROR
        );
      }
    },
  },
};
export default WilayaResolver;
