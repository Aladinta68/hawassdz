import fs from "fs";
import path from "path";
import {
  throwCustomError,
  ErrorTypes,
} from "../error/errorHandler.js";
import { randomUUID } from "crypto";

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

export const deleteFile = (url) => {
  const imagePath = path.join(process.cwd(), "public", url);
  if (fs.existsSync(imagePath)) {
    fs.unlinkSync(imagePath);
  }
};
export default { uploadFile, deleteFile };
