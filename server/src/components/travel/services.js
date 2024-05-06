import {
  throwCustomError,
  ErrorTypes,
} from "../../utils/error/ErrorHandler.js";
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
  const travels = await prisma.travel.findMany({
    include: {
      images: true,
      ratings: true,
      mapLocation: true,
      contactInfo: true,
      user: true,
    },
    skip: offset,
    take: perPage,
    orderBy: { [sortBy]: sortDirection },
  });
  return travels.map((travel) => ({
    ...travel,
    overallRating: calculateOverallRating(travel.ratings),
  }));
};
export const getOneWithUserId = async ({ id, userId, prisma }) => {
  const travel = await prisma.travel.findUnique({
    where: { id, userId },
    include: {
      images: true,
      ratings: true,
      mapLocation: true,
      contactInfo: true,
      user: true,
    },
  });
  return {
    ...travel,
    overallRating: calculateOverallRating(travel.ratings),
  };};
export const getOne = async ({ id, prisma }) => {
  const travel = await prisma.travel.findUnique({
    where: { id },
    include: {
      images: true,
      ratings: true,
      mapLocation: true,
      contactInfo: true,
      user: true,
    },
  });
  return {
    ...travel,
    overallRating: calculateOverallRating(travel.ratings),
  };
};
export const deleteOne = async ({ id, travel, prisma }) => {
  try {
    if (travel.images && travel.images.length > 0) {
      travel.images.forEach((image) => {
        deleteFile(image.url);
      });
    }
    const deletedTravel = await prisma.travel.delete({ where: { id } });
    return deletedTravel;
  } catch (error) {
    throwCustomError(
      error.message,
      error.extensions || ErrorTypes.INTERNAL_SERVER_ERROR
    );
  }
};

export const createOne = async ({ input, userId, prisma }) => {
  const {
    name,
    type,
    description,
    destination,
    longitude,
    dateDepart,
    dateArrive,
    numberPerson,
    gender,
    ageRange,
    price,
    transportType,
    mapLocation,
    contactInfo,
    files,
  } = input;
  const newTravel = await prisma.travel.create({
    data: {
      name,
      type,
      description,
      destination,
      longitude,
      dateDepart,
      dateArrive,
      numberPerson,
      availablePlace: numberPerson,
      gender,
      ageRange,
      price,
      transportType,
      user: {
        connect: userId ? { id: userId } : undefined,
      },
      mapLocation: mapLocation ? { create: mapLocation } : undefined,
      contactInfo: contactInfo ? { create: contactInfo } : undefined,
    },
    include: {
      ratings: true,
      mapLocation: true,
      contactInfo: true,
      user: true,
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
        data: { url, travelId: newTravel.id },
      });
      createdImages.push(newImage);
    }
    await prisma.travel.update({
      where: { id: newTravel.id },
      data: {
        images: { connect: createdImages.map((image) => ({ id: image.id })) },
      },
    });
  }
  return {
    id: newTravel.id,
    name: newTravel.name,
    type: newTravel.type,
    description: newTravel.description,
    destination: newTravel.destination,
    longitude: newTravel.longitude,
    dateDepart: newTravel.dateDepart,
    dateArrive: newTravel.dateArrive,
    numberPerson: newTravel.numberPerson,
    availablePlace: newTravel.availablePlace,
    gender: newTravel.gender,
    ageRange: newTravel.ageRange,
    price: newTravel.price,
    transportType: newTravel.transportType,
    ratings: newTravel.ratings,
    mapLocation: newTravel.mapLocation,
    contactInfo: newTravel.contactInfo,
    images: createdImages.map((image) => ({ url: image.url })),
  };
};
export const updateOne = async ({
  id,
  input,
  userId,
  existingTravel,
  prisma,
}) => {
  try {
    const {
      name,
      type,
      description,
      destination,
      longitude,
      dateDepart,
      dateArrive,
      numberPerson,
      availablePlace,
      gender,
      ageRange,
      price,
      transportType,
      mapLocation,
      contactInfo,
      files,
    } = input;

    const updatedTravel = await prisma.travel.update({
      where: { id },
      data: {
        name,
        type,
        description,
        destination,
        longitude,
        dateDepart,
        dateArrive,
        numberPerson,
        availablePlace,
        gender,
        ageRange,
        price,
        transportType,
        user: {
          connect: userId ? { id: userId } : undefined,
        },
        mapLocation: mapLocation ? { update: mapLocation } : undefined,
        contactInfo: contactInfo ? { update: contactInfo } : undefined,
      },
      include: {
        images: true,
        ratings: true,
        mapLocation: true,
        contactInfo: true,
        user: true,
      },
    });
    if (files && files.length > 0) {
      if (existingTravel.images && existingTravel.images.length > 0) {
        await prisma.image.deleteMany({
          where: { id: { in: existingTravel.images.map((image) => image.id) } },
        });
        existingTravel.images.forEach((image) => {
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
      const travelId = existingTravel.id;
      const createdImages = [];
      for (const url of newImageUrls) {
        const newImage = await prisma.image.create({
          data: { url, travelId },
        });
        createdImages.push(newImage);
      }

      await prisma.travel.update({
        where: { id: travelId },
        data: {
          images: { connect: createdImages.map((image) => ({ id: image.id })) },
        },
      });
    }

    return updatedTravel;
  } catch (error) {
    throwCustomError(
      error.message,
      error.extensions || ErrorTypes.INTERNAL_SERVER_ERROR
    );
  }
};
