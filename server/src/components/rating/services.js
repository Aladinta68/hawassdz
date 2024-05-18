import {
  throwCustomError,
  ErrorTypes,
} from "../../utils/error/errorHandler.js";

export const createOne = async ({ userId, input, prisma }) => {
  try {
    const { stars, feedback, tableName, tableId } = input;
    return await prisma.rating.create({
      data: {
        stars,
        feedback,
        [tableName]: {
          connect: {
            id: tableId,
          },
        },
        user: {
          connect: {
            id: userId,
          },
        },
      },
      include: {
        user: true,
      },
    });
  } catch (error) {
    throwCustomError(
      error.message,
      error.extensions || ErrorTypes.INTERNAL_SERVER_ERROR
    );
  }
};
