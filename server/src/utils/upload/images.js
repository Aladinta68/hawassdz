import cloudinary from "cloudinary";
import { throwCustomError, ErrorTypes } from "../error/errorHandler.js";

cloudinary.config({
  cloud_name: "detuiiqar",
  api_key: "514975719388813",
  api_secret: "QOpv9-15Ql70I8nAMyUqFOb8kZ0",
});
export const uploadFile = async (file) => {
  try {
    const { createReadStream, filename } = await file;

    // Invoke createReadStream to get the stream
    const stream = createReadStream();

    // Convert the stream to a Buffer
    const chunks = [];
    for await (const chunk of stream) {
      chunks.push(chunk);
    }
    const buffer = Buffer.concat(chunks);

    if (!buffer || !filename) {
      throwCustomError("Invalid file", ErrorTypes.BAD_USER_INPUT);
    }

    // Convert the Buffer to a Base64 encoded string
    const base64String = buffer.toString("base64");

    const result = await cloudinary.uploader.upload(
      `data:image/jpeg;base64,${base64String}`,
      {
        folder: "hawassDzImages",
        use_filename: true,
      }
    );

    return { url: result.secure_url };
  } catch (error) {
    throwCustomError(
      error.message || "Failed to upload image",
      ErrorTypes.INTERNAL_SERVER_ERROR
    );
  }
};

export const deleteFile = async (url) => {
  try {
    const public_id = url.substring(
      url.lastIndexOf("/") + 1,
      url.lastIndexOf(".")
    );
    const result = await cloudinary.uploader.destroy(public_id);
    if (result.result === "ok") {
      return { message: "Image deleted successfully" };
    } else {
      throwCustomError(
        "Failed to delete image",
        ErrorTypes.INTERNAL_SERVER_ERROR
      );
    }
  } catch (error) {
    throwCustomError(
      "Failed to delete image",
      ErrorTypes.INTERNAL_SERVER_ERROR
    );
  }
};
