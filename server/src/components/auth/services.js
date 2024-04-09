import crypto from "crypto";
import fs from "fs";
import path from "path";
import { comparePassword, hashPassword } from "./utils/utils.js";
import {
  throwCustomError,
  ErrorTypes,
} from "../../utils/error/ErrorHandler.js";
import { randomUUID } from "crypto";
import { HtmlTemplate } from "../../utils/mail/mail.template.js";
import { sendMailTest } from "../../utils/mail/nodemailer.config.js";

export const findByEmail = async ({ input, prisma }) => {
  try {
    const { email, password } = input;
    let existUser;
    let type;
    const admin = await prisma.admin.findUnique({
      where: {
        email,
      },
    });
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user && !admin) {
      throwCustomError("Invalid Credentials", ErrorTypes.BAD_USER_INPUT);
    }
    if (user) {
      existUser = user;
      type = "USER";
    }
    if (admin) {
      existUser = admin;
      type = "ADMIN";
    }
    const match = await comparePassword(existUser.password, password);
    if (!match) {
      throwCustomError("Invalid Credentials", ErrorTypes.BAD_USER_INPUT);
    }
    return { existUser, type };
  } catch (error) {
    throw error;
  }
};
export const createAdmin = async ({ input, prisma }) => {
  try {
    const { email, userName, password } = input;
    const existingAdminEmail = await prisma.admin.findUnique({
      where: {
        email,
      },
    });
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    const existingAdminUserName = await prisma.admin.findUnique({
      where: {
        userName,
      },
    });
    if (existingAdminEmail || existingUser || existingAdminUserName) {
      throwCustomError(
        "Credentials is already registered",
        ErrorTypes.BAD_USER_INPUT
      );
    }
    const hashedPassword = await hashPassword(password);
    const newAdmin = await prisma.admin.create({
      data: {
        email,
        userName,
        password: hashedPassword,
      },
    });
    return newAdmin;
  } catch (error) {
    throw error;
  }
};
export const createUser = async ({ input, prisma }) => {
  try {
    const { email, firstName, lastName, password } = input;
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    const existingAdminEmail = await prisma.admin.findUnique({
      where: {
        email,
      },
    });
    if (existingUser || existingAdminEmail) {
      throwCustomError(
        "Credentials is already registered",
        ErrorTypes.BAD_USER_INPUT
      );
    }
    const hashedPassword = await hashPassword(password);
    const newUser = await prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
        password: hashedPassword,
      },
    });
    return newUser;
  } catch (error) {
    throw error;
  }
};
export const getAllUsers = async ({ prisma }) => {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    throwCustomError(
      "Something went wrong while fetching users, Try again",
      ErrorTypes.INTERNAL_SERVER_ERROR
    );
  }
};
export const getUserById = async ({ id, prisma }) => {
  try {
    const user = await prisma.user.findUnique({ where: { id } });
    return user;
  } catch (error) {
    throwCustomError(
      "Something went wrong, Try again",
      ErrorTypes.INTERNAL_SERVER_ERROR
    );
  }
};
export const deleteUserById = async ({ id, prisma }) => {
  try {
    const deletedUser = await prisma.user.delete({ where: { id } });
    return deletedUser;
  } catch (error) {
    throwCustomError(
      "Something went wrong while deleting user, Try again",
      ErrorTypes.INTERNAL_SERVER_ERROR
    );
  }
};
export const resetPassword = async ({ input, prisma }) => {
  try {
    const { email } = input;
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      throwCustomError(
        "User with this email doesn't exist.",
        ErrorTypes.NOT_FOUND
      );
    }
    const codePIN = crypto.randomInt(100000, 999999);
    await prisma.restPasswordOTP.upsert({
      where: {
        email,
      },
      create: {
        codePIN,
        email,
      },
      update: {
        codePIN,
      },
    });
    const HTMLScript = HtmlTemplate(codePIN);
    await sendMailTest({ email, HTMLScript });
    return true;
  } catch (error) {
    throw error;
  }
};
export const verifyCodePin = async ({ input, prisma }) => {
  try {
    const { email, codePIN } = input;
    const user = await prisma.restPasswordOTP.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      throwCustomError(
        "User with this email doesn't exist.",
        ErrorTypes.NOT_FOUND
      );
    }
    if (!user.codePIN) {
      throwCustomError("Invalid Code Pin", ErrorTypes.UNAUTHORIZED);
    }
    if (user.codePIN === Number(codePIN)) {
      await prisma.restPasswordOTP.update({
        where: {
          email,
        },
        data: {
          canChange: true,
        },
      });
      return true;
    }
    return false;
  } catch (error) {
    throw error;
  }
};
export const updateForgetPassword = async ({ input, prisma }) => {
  try {
    const { email, password } = input;
    const result = await prisma.$transaction(async (prisma) => {
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });
      if (!user) {
        throwCustomError(
          "User with this email doesn't exist.",
          ErrorTypes.NOT_FOUND
        );
      }
      const otp = await prisma.restPasswordOTP.findUnique({
        where: {
          email,
        },
      });
      if (!otp) {
        throwCustomError(
          "the user with this email didn't forget password",
          ErrorTypes.UNAUTHORIZED
        );
      }
      if (!otp.canChange) {
        throwCustomError("Can't change password", ErrorTypes.UNAUTHORIZED);
      }
      const hashedPassword = await hashPassword(password);
      await prisma.user.update({
        where: {
          email,
        },
        data: {
          password: hashedPassword,
        },
      });
      await prisma.restPasswordOTP.update({
        where: {
          email,
        },
        data: {
          canChange: false,
        },
      });
      return true;
    });
    return result;
  } catch (error) {
    throw error;
  }
};
export const uploadFile = async (file) => {
  try {
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
  } catch (error) {
    throw error;
  }
};
export const addUserImage = async ({ userId, url, prisma }) => {
  try {
    const existingImage = await prisma.image.findFirst({
      where: {
        userId,
      },
    });
    if (existingImage) {
      const imagePath = path.join(process.cwd(), "/public", existingImage.url);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }
    let updatedImage;
    if (existingImage) {
      updatedImage = await prisma.image.update({
        where: {
          id: existingImage.id,
        },
        data: {
          url,
        },
      });
    } else {
      updatedImage = await prisma.image.create({
        data: {
          url,
          userId,
        },
      });
    }
    await prisma.user.update({
      where: { id: userId },
      data: { image: { connect: { id: updatedImage.id } } },
    });
    return { url };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

