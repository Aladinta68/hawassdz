import {
  throwCustomError,
  ErrorTypes,
} from "../../utils/error/errorHandler.js";
import { calculateOverallRating } from "../utils/calculateOverallRating.js";
import { deleteFile, uploadFile } from "./../../utils/upload/images.js";

export const getMany = async ({
  prisma,
  page,
  perPage,
  sortBy,
  sortDirection,
}) => {
  const offset = (page - 1) * perPage;
  const restaurants = await prisma.restaurant.findMany({
    include: {
      equipements: true,
      images: true,
      ratings: true,

      mapLocation: true,
      contactInfo: true,
      wilaya: true,
    },
    skip: offset,
    take: perPage,
    orderBy: { [sortBy]: sortDirection },
  });
  return restaurants.map((restaurant) => ({
    ...restaurant,
    overallRating: calculateOverallRating(restaurant.ratings),
  }));
};
export const getOne = async ({ id, prisma }) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: { id },
    include: {
      equipements: true,
      images: true,
      ratings: {
        include: {
          user: {
            include: {
              image: true,
            },
          },
        },
      },
      mapLocation: true,
      contactInfo: true,
      wilaya: true,
    },
  });
  if (!restaurant) {
    throwCustomError("restaurant not found", ErrorTypes.NOT_FOUND);
  }
  if (restaurant.ratings) {
    return {
      ...restaurant,
      overallRating: calculateOverallRating(restaurant.ratings),
    };
  }
  return {
    restaurant,
  };
};
export const deleteOne = async ({ id, restaurant, prisma }) => {
  try {
    if (restaurant.images && restaurant.images.length > 0) {
      restaurant.images.forEach((image) => {
        deleteFile(image.url);
      });
    }
    const deletedRestaurant = await prisma.restaurant.delete({ where: { id } });
    return deletedRestaurant;
  } catch (error) {
    throwCustomError(
      error.message,
      error.extensions || ErrorTypes.INTERNAL_SERVER_ERROR
    );
  }
};

export const createOne = async ({ input, prisma }) => {
  const {
    name,
    type,
    description,
    address,
    wilayaId,
    mapLocation,
    contactInfo,
    files,
    equipements,
  } = input;

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
  const newRestaurant = await prisma.restaurant.create({
    data: {
      name,
      type,
      description,
      address,
      wilaya: {
        connect: wilayaId ? { id: wilayaId } : undefined,
      },
      mapLocation: mapLocation ? { create: mapLocation } : undefined,
      contactInfo: contactInfo ? { create: contactInfo } : undefined,
    },
    include: {
      ratings: true,

      mapLocation: true,
      contactInfo: true,
      wilaya: true,
      equipements: true,
    },
  });
  if (equipements && equipements.length > 0) {
    await prisma.equipement.createMany({
      data: equipements.map((item) => ({
        item,
        restaurantId: newRestaurant.id,
      })),
    });
  }
  const imageUrls = [];
  const createdImages = [];

  if (files) {
    for (const file of files) {
      const { url } = await uploadFile(file);
      imageUrls.push(url);
    }
    for (const url of imageUrls) {
      const newImage = await prisma.image.create({
        data: { url, restaurantId: newRestaurant.id },
      });
      createdImages.push(newImage);
    }
    await prisma.restaurant.update({
      where: { id: newRestaurant.id },
      data: {
        images: { connect: createdImages.map((image) => ({ id: image.id })) },
      },
    });
  }
  return {
    id: newRestaurant.id,
    name: newRestaurant.name,
    type: newRestaurant.type,
    description: newRestaurant.description,
    address: newRestaurant.address,
    wilaya: existingWilaya,
    ratings: newRestaurant.ratings,
    mapLocation: newRestaurant.mapLocation,
    contactInfo: newRestaurant.contactInfo,
    images: createdImages.map((image) => ({ url: image.url })),
    equipements: newRestaurant.equipements,
  };
};
export const updateOne = async ({ id, input, existingRestaurant, prisma }) => {
  try {
    const {
      name,
      type,
      description,
      address,
      wilayaId,
      mapLocation,
      contactInfo,
      files,
      equipements,
    } = input;
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
    const updatedRestaurant = await prisma.restaurant.update({
      where: { id },
      data: {
        name,
        type,
        description,
        address,
        wilaya: {
          connect: wilayaId ? { id: wilayaId } : undefined,
        },
        mapLocation: mapLocation ? { update: mapLocation } : undefined,
        contactInfo: contactInfo ? { update: contactInfo } : undefined,
      },
      include: {
        images: true,
        ratings: true,

        mapLocation: true,
        contactInfo: true,
        equipements: true,
      },
    });
    if (equipements && equipements.length > 0) {
      await prisma.equipement.deleteMany({
        where: { restaurantId: id },
      });
      await prisma.equipement.createMany({
        data: equipements.map((item) => ({
          item,
          restaurantId: id,
        })),
      });
    }

    if (files && files.length > 0) {
      if (existingRestaurant.images && existingRestaurant.images.length > 0) {
        await prisma.image.deleteMany({
          where: {
            id: { in: existingRestaurant.images.map((image) => image.id) },
          },
        });
        existingRestaurant.images.forEach((image) => {
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
      const restaurantId = existingRestaurant.id;
      const createdImages = [];
      for (const url of newImageUrls) {
        const newImage = await prisma.image.create({
          data: { url, restaurantId },
        });
        createdImages.push(newImage);
      }

      await prisma.restaurant.update({
        where: { id: restaurantId },
        data: {
          images: { connect: createdImages.map((image) => ({ id: image.id })) },
        },
      });
    }

    return updatedRestaurant;
  } catch (error) {
    throwCustomError(
      error.message,
      error.extensions || ErrorTypes.INTERNAL_SERVER_ERROR
    );
  }
};
