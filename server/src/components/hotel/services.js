import {
  throwCustomError,
  ErrorTypes,
} from "../../utils/error/ErrorHandler.js";
import { deleteFile, uploadFile } from "./../../utils/upload/images.js";
export const getMany = async ({ prisma }) => {
  const hotels = await prisma.hotel.findMany({
    include: {
      images: true,
      ratings: true,
      mapLocation: true,
      contactInfo: true,
      wilaya: true,
    },
  });
  return hotels;
};
export const getOne = async ({ id, prisma }) => {
  const hotel = await prisma.hotel.findUnique({
    where: { id },
    include: {
      images: true,
      ratings: true,
      mapLocation: true,
      contactInfo: true,
      wilaya: true,
    },
  });
  return hotel;
};
export const deleteOne = async ({ id, hotel, prisma }) => {
  try {
    if (hotel.images && hotel.images.length > 0) {
      hotel.images.forEach((image) => {
        deleteFile(image.url);
      });
    }
    const deletedHotel = await prisma.hotel.delete({ where: { id } });
    return deletedHotel;
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
    description,
    type,
    address,
    wilayaId,
    mapLocation,
    contactInfo,
    files,
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
  const newHotel = await prisma.hotel.create({
    data: {
      name,
      description,
      type,
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
        data: { url, hotelId: newHotel.id },
      });
      createdImages.push(newImage);
    }
    await prisma.hotel.update({
      where: { id: newHotel.id },
      data: {
        images: { connect: createdImages.map((image) => ({ id: image.id })) },
      },
    });
  }
  return {
    id: newHotel.id,
    name: newHotel.name,
    description: newHotel.description,
    type: newHotel.type,
    address: newHotel.address,
    wilaya: existingWilaya,
    ratings: newHotel.ratings,
    mapLocation: newHotel.mapLocation,
    contactInfo: newHotel.contactInfo,
    images: createdImages.map((image) => ({ url: image.url })),
  };
};
export const updateOne = async ({ id, input, existingHotel, prisma }) => {
  try {
    const {
      name,
      description,
      type,
      address,
      wilayaId,
      mapLocation,
      contactInfo,
      files,
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
    const updatedHotel = await prisma.hotel.update({
      where: { id },
      data: {
        name,
        description,
        type,
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
      },
    });
    if (files && files.length > 0) {
      if (existingHotel.images && existingHotel.images.length > 0) {
        await prisma.image.deleteMany({
          where: { id: { in: existingHotel.images.map((image) => image.id) } },
        });
        existingHotel.images.forEach((image) => {
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
      const hotelId = existingHotel.id;
      const createdImages = [];
      for (const url of newImageUrls) {
        const newImage = await prisma.image.create({
          data: { url, hotelId },
        });
        createdImages.push(newImage);
      }

      await prisma.hotel.update({
        where: { id: hotelId },
        data: {
          images: { connect: createdImages.map((image) => ({ id: image.id })) },
        },
      });
    }

    return updatedHotel;
  } catch (error) {
    throwCustomError(
      error.message,
      error.extensions || ErrorTypes.INTERNAL_SERVER_ERROR
    );
  }
};
