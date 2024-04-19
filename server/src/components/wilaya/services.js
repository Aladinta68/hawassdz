import crypto from "crypto";
import fs from "fs";
import path from "path";
import {
  throwCustomError,
  ErrorTypes,
} from "../../utils/error/ErrorHandler.js";
import { randomUUID } from "crypto";

export const getMany = async ({ prisma }) => {
  const wilayas = await prisma.wilaya.findMany();
  return wilayas;
};

export const getOne = async ({ id, prisma }) => {
  const wilaya = await prisma.wilaya.findUnique({
    where: { id },
    include: { image: true },
  });
  return wilaya;
};

export const deleteOne = async ({ id, prisma }) => {
  try {
    const wilaya = await prisma.wilaya.findUnique({ where: { id } });
    if (!wilaya) {
      throwCustomError("Wilaya not found", ErrorTypes.NOT_FOUND);
    }
    const deletedWilaya = await prisma.wilaya.delete({ where: { id } });
    return deletedWilaya;
  } catch (error) {
    throwCustomError(
      error.message,
      error.type || ErrorTypes.INTERNAL_SERVER_ERROR
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

export const createOne = async ({ name, description, url, prisma }) => {
  const wilaya = await prisma.wilaya.findUnique({ where: { name } });
  if (wilaya) {
    throwCustomError("Credential already exist", ErrorTypes.ALREADY_EXISTS);
  }
  const newWilaya = await prisma.wilaya.create({
    data: {
      name,
      description,
    },
  });
  const wilayaId = newWilaya.id;
  const newImage = await prisma.image.create({
    data: { url, wilayaId },
  });
  await prisma.wilaya.update({
    where: { id: wilayaId },
    data: { image: { connect: { id: newImage.id } } },
  });
  return { newWilaya, url };
};
