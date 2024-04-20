import crypto from "crypto";
import fs from "fs";
import path from "path";
import {
  throwCustomError,
  ErrorTypes,
} from "../../utils/error/ErrorHandler.js";
import { randomUUID } from "crypto";

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

export const deleteOne = async ({ id, prisma }) => {
  try {
    const wilaya = await prisma.wilaya.findUnique({
      where: { id },
      include: { images: true },
    });
    if (!wilaya) {
      throwCustomError("Wilaya not found", ErrorTypes.NOT_FOUND);
    }
    if (wilaya.images && wilaya.images.length > 0) {
      wilaya.images.forEach((image) => {
        const imagePath = path.join(process.cwd(), "public", image.url);
        if (fs.existsSync(imagePath)) {
          fs.unlinkSync(imagePath);
        }
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

export const uploadFile = async (file) => {
  const { createReadStream, filename } = await file;

  if (!createReadStream || !filename) {
    return throwCustomError(
      "Something went Wrong ",
      ErrorTypes.INTERNAL_SERVER_ERROR
    );
  }
  const stream = createReadStream();
  const uniqueFilename = `${Date.now()}-${randomUUID()} - ${filename}`;
  const uploadDir = path.join(process.cwd(), "/public/images/");
  const filePath = path.join(uploadDir, uniqueFilename);

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const writeStream = fs.createWriteStream(filePath);

  await new Promise((resolve, reject) => {
    stream
      .pipe(writeStream)
      .on("finish", () => resolve(filePath))
      .on("error", (error) => reject(error));
  });

  return { url: `/images/${uniqueFilename}` };
};

export const createOne = async ({ name, description, imageUrls, prisma }) => {
  const newWilaya = await prisma.wilaya.create({
    data: {
      name,
      description,
    },
  });
  const wilayaId = newWilaya.id;
  const createdImages = [];
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

  const wilayaOutput = {
    id: newWilaya.id,
    name: newWilaya.name,
    description: newWilaya.description,
    image: createdImages.map((image) => ({ url: image.url })),
  };

  return wilayaOutput;
};

export const updateOne = async ({ id, input, prisma }) => {
  try {
    const { name, description, files } = input;

    if (files && files.length > 0) {
      const existingWilaya = await prisma.wilaya.findUnique({
        where: { id },
        include: { images: true },
      });
      if (existingWilaya.images && existingWilaya.images.length > 0) {
        await prisma.image.deleteMany({
          where: { id: { in: existingWilaya.images.map((image) => image.id) } },
        });
        existingWilaya.images.forEach((image) => {
          const imagePath = path.join(process.cwd(), "public", image.url);
          if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
          }
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
    const updatedWilaya = await prisma.wilaya.update({
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
    return updatedWilaya;
  } catch (error) {
    throwCustomError(
      error.message,
      error.extensions || ErrorTypes.INTERNAL_SERVER_ERROR
    );
  }
};
