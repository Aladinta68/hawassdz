import {
  throwCustomError,
  ErrorTypes,
} from "../../utils/error/ErrorHandler.js";

export const createOne = async ({ input, prisma }) => {
    try {
      const { name, description, location, typeGeographies } = input;  
      const createdWilaya = await prisma.wilaya.create({
        data: {
          name,
          description,
          location,
          typeGeographies: {
            connect: typeGeographies.map((typeGeographyId) => ({ id: typeGeographyId })),
          },
        },
      });
  
      return createdWilaya;
    } catch (error) {
      throwCustomError(
        'Failed to create Wilaya',
        ErrorTypes.INTERNAL_SERVER_ERROR
      );
    }
  };
  
export const getAll = async ({ prisma }) => {
  try {
    const wilayas = await prisma.wilaya.findMany();
    return wilayas;
  } catch (error) {
    throwCustomError(
      "Something went wrong while fetching users, Try again",
      ErrorTypes.INTERNAL_SERVER_ERROR
    );
  }
};
export const getOne = async ({ id, prisma }) => {
  try {
    const wilaya = await prisma.wilaya.findUnique({ where: { id } });
    return wilaya;
  } catch (error) {
    throwCustomError(
      "Something went wrong, Try again",
      ErrorTypes.INTERNAL_SERVER_ERROR
    );
  }
};
export const deleteOne = async ({ id, prisma }) => {
  try {
    const deletedWilya = await prisma.wilaya.delete({ where: { id } });
    return deletedWilya;
  } catch (error) {
    throwCustomError(
      "Something went wrong while deleting user, Try again",
      ErrorTypes.INTERNAL_SERVER_ERROR
    );
  }
};

export const updateOne = async ({ id, input, prisma }) => {
    try {
      const { name, description, location, typeGeographies } = input;
      const updatedWilaya = await prisma.wilaya.update({
        where: { id },
        data: {
          name,
          description,
          location,
          typeGeographies: {
            set: typeGeographies.map((typeGeographyId) => ({ id: typeGeographyId })),
          },
        },
      });
  
      return updatedWilaya;
    } catch (error) {
      throwCustomError(
        'Failed to update Wilaya',
        ErrorTypes.INTERNAL_SERVER_ERROR
      );
    }
  };
  