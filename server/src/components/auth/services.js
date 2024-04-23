import crypto from "crypto";
import { comparePassword, hashPassword } from "./utils/utils.js";
import {
  throwCustomError,
  ErrorTypes,
} from "../../utils/error/ErrorHandler.js";
import { HtmlTemplate } from "../../utils/mail/mail.template.js";
import { sendMailTest } from "../../utils/mail/nodemailer.config.js";
import { deleteFile, uploadFile } from "./../../utils/upload/images.js";

const getUserOrAdminByEmail = async (email, prisma) => {
  const admin = await prisma.admin.findUnique({ where: { email } });
  const user = await prisma.user.findUnique({ where: { email } });
  return { admin, user };
};

export const findByEmailandPassword = async ({ input, prisma }) => {
  const { email, password } = input;
  const { admin, user } = await getUserOrAdminByEmail(email, prisma);

  if (!user && !admin) {
    throwCustomError("Invalid Credentials", ErrorTypes.BAD_USER_INPUT);
  }

  const existUser = user || admin;
  const type = user ? "USER" : "ADMIN";

  const match = await comparePassword(existUser.password, password);
  if (!match) {
    throwCustomError("Invalid Credentials", ErrorTypes.BAD_USER_INPUT);
  }

  return { existUser, type };
};

export const createAdmin = async ({ input, prisma }) => {
  const { email, userName, password } = input;
  const {
    admin: existingAdminEmail,
    user: existingUser,
    admin: existingAdminUserName,
  } = await getUserOrAdminByEmail(email, prisma);

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
};

export const createUser = async ({ input, prisma }) => {
  const { email, firstName, lastName, password } = input;
  const { user: existingUser, admin: existingAdminEmail } =
    await getUserOrAdminByEmail(email, prisma);

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
};

export const getAllUsers = async ({ prisma }) => {
  const users = await prisma.user.findMany();
  return users;
};

export const getUserInfo = async ({ id, prisma }) => {
  const user = await prisma.user.findUnique({
    where: { id },
    include: { image: true },
  });
  return user;
};

export const deleteUserById = async ({ id, prisma }) => {
  try {
    const deletedUser = await prisma.user.delete({ where: { id } });
    return deletedUser;
  } catch (error) {
    throwCustomError(
      error.message,
      error.extension || ErrorTypes.INTERNAL_SERVER_ERROR
    );
  }
};

export const resetPassword = async ({ input, prisma }) => {
  const { email } = input;
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    throwCustomError(
      "User with this email doesn't exist.",
      ErrorTypes.NOT_FOUND
    );
  }

  const codePIN = crypto.randomInt(100000, 999999);
  await prisma.restPasswordOTP.upsert({
    where: { email },
    create: { codePIN, email },
    update: { codePIN },
  });

  const HTMLScript = HtmlTemplate(codePIN);
  await sendMailTest({ email, HTMLScript });

  return true;
};

export const verifyCodePin = async ({ input, prisma }) => {
  const { email, codePIN } = input;
  const user = await prisma.restPasswordOTP.findUnique({ where: { email } });

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
      where: { email },
      data: { canChange: true },
    });
    return true;
  }

  return false;
};

export const updateForgetPassword = async ({ input, prisma }) => {
  const { email, password } = input;
  const result = await prisma.$transaction(async (prisma) => {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      throwCustomError(
        "User with this email doesn't exist.",
        ErrorTypes.NOT_FOUND
      );
    }

    const otp = await prisma.restPasswordOTP.findUnique({ where: { email } });

    if (!otp) {
      throwCustomError(
        "The user with this email didn't forget password",
        ErrorTypes.UNAUTHORIZED
      );
    }

    if (!otp.canChange) {
      throwCustomError("Can't change password", ErrorTypes.UNAUTHORIZED);
    }

    const hashedPassword = await hashPassword(password);
    await prisma.user.update({
      where: { email },
      data: { password: hashedPassword },
    });

    await prisma.restPasswordOTP.update({
      where: { email },
      data: { canChange: false },
    });

    return true;
  });

  return result;
};

export const addUserImage = async ({ userId, file, prisma }) => {
  const existingImage = await prisma.image.findFirst({ where: { userId } });
  if (existingImage) {
    deleteFile(existingImage.url);
  }
  const { url } = await uploadFile(file);
  let updatedImage;
  if (existingImage) {
    updatedImage = await prisma.image.update({
      where: { id: existingImage.id },
      data: { url },
    });
  } else {
    updatedImage = await prisma.image.create({
      data: { url, userId },
    });
  }

  await prisma.user.update({
    where: { id: userId },
    data: { image: { connect: { id: updatedImage.id } } },
  });

  return { url };
};
