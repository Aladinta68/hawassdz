import {
  throwCustomError,
  ErrorTypes,
} from "../../utils/error/ErrorHandler.js";
import { deleteFile, uploadFile } from "../../utils/upload/images.js";
import { calculateOverallRating } from '../utils/calculateOverallRating.js';



export const getMany = async ({
  prisma,
  page,
  perPage,
  sortBy,
  sortDirection,
}) => {
  const offset = (page - 1) * perPage;
  const destinations = await prisma.destination.findMany({
    include: {
      images: true,
      ratings: true,
      mapLocation: true,
      wilaya: true,
    },
    skip: offset,
    take: perPage,
    orderBy: { [sortBy]: sortDirection },
  });
  return destinations.map((destination) => ({
    ...destination,
    overallRating: calculateOverallRating(destination.ratings),
  }));
};

export const getOne = async ({ id, prisma }) => {
  const destination = await prisma.destination.findUnique({
    where: { id },
    include: {
      images: true,
      ratings: true,
      mapLocation: true,
      wilaya: true,
    },
  });
  return {
    ...destination,
    overallRating: calculateOverallRating(destination.ratings),
  };
};

export const deleteOne = async ({ id, destination, prisma }) => {
  try {
    if (destination.images && destination.images.length > 0) {
      destination.images.forEach((image) => {
        deleteFile(image.url);
      });
    }
    const deletedWilaya = await prisma.destination.delete({ where: { id } });
    return deletedWilaya;
  } catch (error) {
    throwCustomError(
      error.message,
      error.extensions || ErrorTypes.INTERNAL_SERVER_ERROR
    );
  }
};

export const createOne = async ({ input, prisma }) => {
  const { name, description, wilayaId, mapLocation, files } = input;

  let existingWilaya;
  if (wilayaId) {
    existingWilaya = await prisma.wilaya.findUnique({
      where: {
        id: wilayaId,
      },
    });
    if (!existingWilaya) {
      throwCustomError(
        "Please chose a valid wilaya",
        ErrorTypes.BAD_USER_INPUT
      );
    }
  }
  const newDestination = await prisma.destination.create({
    data: {
      name,
      description,
      wilaya: {
        connect: wilayaId ? { id: wilayaId } : undefined,
      },
      mapLocation: mapLocation ? { create: mapLocation } : undefined,
    },
    include: {
      ratings: true,
      mapLocation: true,
      wilaya: true,
    },
  });
  const imageUrls = [];
  const createdImages = [];

  if (files) {
    for (const file of files) {
      const { url } = await uploadFile(file);
      imageUrls.push(url);
    }
    for (const url of imageUrls) {
      const newImage = await prisma.image.create({
        data: { url, destinationId: newDestination.id },
      });
      createdImages.push(newImage);
    }
    await prisma.destination.update({
      where: { id: newDestination.id },
      data: {
        images: { connect: createdImages.map((image) => ({ id: image.id })) },
      },
    });
  }
  return {
    id: newDestination.id,
    name: newDestination.name,
    description: newDestination.description,
    wilaya: existingWilaya,
    ratings: newDestination.ratings,
    mapLocation: newDestination.mapLocation,
    images: createdImages.map((image) => ({ url: image.url })),
  };
};

export const updateOne = async ({ id, input, existingDestination, prisma }) => {
  try {
    const { name, description, wilayaId, mapLocation, files } = input;

    if (wilayaId) {
      const existingWilaya = await prisma.wilaya.findUnique({
        where: {
          id: wilayaId,
        },
      });
      if (!existingWilaya) {
        throwCustomError(
          "Please chose a valid wilaya",
          ErrorTypes.BAD_USER_INPUT
        );
      }
    }
    const updatedDestination = await prisma.destination.update({
      where: { id },
      data: {
        name,
        description,
        wilaya: {
          connect: wilayaId ? { id: wilayaId } : undefined,
        },
        mapLocation: mapLocation ? { update: mapLocation } : undefined,
      },
      include: {
        images: true,
        ratings: true,
        mapLocation: true,
      },
    });
    if (files && files.length > 0) {
      if (existingDestination.images && existingDestination.images.length > 0) {
        await prisma.image.deleteMany({
          where: {
            id: { in: existingDestination.images.map((image) => image.id) },
          },
        });
        existingDestination.images.forEach((image) => {
          deleteFile(image.url);
        });
      }

      const newImageUrls = [];
      if (files && files.length > 0) {
        for (const file of files) {
          const { url } = await uploadFile(file);
          newImageUrls.push(url);
        }
      }
      const destinationId = existingDestination.id;
      const createdImages = [];
      for (const url of newImageUrls) {
        const newImage = await prisma.image.create({
          data: { url, destinationId },
        });
        createdImages.push(newImage);
      }

      await prisma.destination.update({
        where: { id: destinationId },
        data: {
          images: { connect: createdImages.map((image) => ({ id: image.id })) },
        },
      });
    }
    return updatedDestination;
  } catch (error) {
    throwCustomError(
      error.message,
      error.extensions || ErrorTypes.INTERNAL_SERVER_ERROR
    );
  }
};
