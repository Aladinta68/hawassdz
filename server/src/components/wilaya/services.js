import {
  throwCustomError,
  ErrorTypes,
} from "../../utils/error/ErrorHandler.js";
  
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

export const uploadFiles = async (files) => {
  try {
    const uploadedImages = [];
    if (!files || !files.length) {
      return uploadedImages;
    }
    for (const file of files) {
      const { createReadStream, filename } = await file;
      if (!createReadStream || !filename) {
        throwCustomError("Invalid file", ErrorTypes.BAD_USER_INPUT);
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
          .on("finish", () => {
            uploadedImages.push(`/images/${uniqueFilename}`);
            resolve();
          })
          .on("error", (error) => reject(error));
      });
    }
    return uploadedImages;
  } catch (error) {
    throwCustomError(
      error.message || "Failed to upload files",
      error.type || ErrorTypes.INTERNAL_SERVER_ERROR
    );
  }
};

export const addWilaya = async ({ input, uploadedImages, prisma }) => {
  try {
    const { name, description, seasonIds, mapLocation } = input;
    const wilaya = await prisma.wilaya.create({
      data: {
        name,
        description,
        seasons: { connect: seasonIds.map((id) => ({ id })) },
        mapLocation: { create: mapLocation },
      },
      include: {
        images: true,
      },
    });
    return wilaya;
  } catch (error) {
    console.log("err",error)
    throwCustomError(
      error.message || "Failed to add wilaya",
      error.type || ErrorTypes.INTERNAL_SERVER_ERROR
    );
  }
};
