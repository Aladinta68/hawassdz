import {
  throwCustomError,
  ErrorTypes,
} from "../../utils/error/ErrorHandler.js";
import { deleteFile, uploadFile } from "../../utils/upload/images.js";

export const findByName = async ({ name, prisma }) => {
  const wilaya = await prisma.wilaya.findUnique({ where: { name } });
  return wilaya;
};
export const getMany = async ({ prisma }) => {
  const wilayas = await prisma.wilaya.findMany({
    include: { images: true },
  });
  return wilayas;
};

export const getOne = async ({ id, prisma }) => {
  const wilaya = await prisma.wilaya.findUnique({
    where: { id },
    include: { images: true },
  });
  return wilaya;
};

export const deleteOne = async ({ id, wilaya, prisma }) => {
  try {
    if (wilaya.images && wilaya.images.length > 0) {
      wilaya.images.forEach((image) => {
        deleteFile(image.url);
      });
    }
    const deletedWilaya = await prisma.wilaya.delete({ where: { id } });
    return deletedWilaya;
  } catch (error) {
    throwCustomError(
      error.message,
      error.extensions || ErrorTypes.INTERNAL_SERVER_ERROR
    );
  }
};

export const createOne = async ({ input, prisma }) => {
  const { name, description, files } = input;
  const newWilaya = await prisma.wilaya.create({
    data: {
      name,
      description,
    },
  });
  const wilayaId = newWilaya.id;
  const createdImages = [];

  if (files) {
    const imageUrls = [];
    for (const file of files) {
      const { url } = await uploadFile(file);
      imageUrls.push(url);
    }

    for (const url of imageUrls) {
      const newImage = await prisma.image.create({
        data: { url, wilayaId },
      });
      createdImages.push(newImage);
    }
    await prisma.wilaya.update({
      where: { id: wilayaId },
      data: {
        images: { connect: createdImages.map((image) => ({ id: image.id })) },
      },
    });
  }
  return {
    id: newWilaya.id,
    name: newWilaya.name,
    description: newWilaya.description,
    images: createdImages.map((image) => ({ url: image.url })),
  };
};

export const updateOne = async ({ id, input, existingWilaya, prisma }) => {
  try {
    const { name, description, files } = input;
    if (files && files.length > 0) {
      if (existingWilaya.images && existingWilaya.images.length > 0) {
        await prisma.image.deleteMany({
          where: { id: { in: existingWilaya.images.map((image) => image.id) } },
        });
        existingWilaya.images.forEach((image) => {
          deleteFile(image.url);
        });
      }
    }
    const newImageUrls = [];
    if (files && files.length > 0) {
      for (const file of files) {
        const { url } = await uploadFile(file);
        newImageUrls.push(url);
      }
    }
    return await prisma.wilaya.update({
      where: { id },
      data: {
        name,
        description,
        images: {
          createMany: {
            data: newImageUrls.map((url) => ({ url })),
          },
        },
      },
      include: { images: true },
    });
  } catch (error) {
    throwCustomError(
      error.message,
      error.extensions || ErrorTypes.INTERNAL_SERVER_ERROR
    );
  }
};
