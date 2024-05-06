import crypto from "crypto";
import { comparePassword, hashPassword } from "./utils/utils.js";
import {
  throwCustomError,
  ErrorTypes,
} from "../../utils/error/ErrorHandler.js";
import { HtmlTemplate } from "../../utils/mail/mail.template.js";
import { sendMailTest } from "../../utils/mail/nodemailer.config.js";
import { deleteFile, uploadFile } from "./../../utils/upload/images.js";

export const findPassword = async ({ userPassword, oldpassword }) => {
  const match = await comparePassword(userPassword, oldpassword);
  if (!match) {
    throwCustomError("Invalid Credentials", ErrorTypes.BAD_USER_INPUT);
  }
  return true;
};
export const updateUser = async ({ id, input, prisma }) => {
  const { firstName, lastName, phone, dateOfBirth, gender } = input;
  const updatedUser = await prisma.user.update({
    where: { id },
    data: {
      firstName,
      lastName,
      phone,
      dateOfBirth,
      gender,
    },
  });
  return updatedUser;
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

  if (user) {
    const { firstName, lastName, email, phone, password, dateOfBirth, gender } =
      user;
    const allFieldsPopulated =
      firstName &&
      lastName &&
      email &&
      password &&
      phone &&
      dateOfBirth &&
      gender;

    if (allFieldsPopulated) {
      await prisma.user.update({
        where: { id },
        data: { complete: true },
      });
    }
  }

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
  console.log("codePIN",codePIN)
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

export const updateUserPassword = async ({ existUser, input, prisma }) => {
  const { oldPassword, newPassword } = input;
  const oldPasswordMatch = await comparePassword(
    existUser.password,
    oldPassword
  );
  if (!oldPasswordMatch) {
    throwCustomError("Invalid old password", ErrorTypes.BAD_USER_INPUT);
  }
  if (newPassword === oldPassword) {
    throwCustomError("Please Enter  new password", ErrorTypes.BAD_USER_INPUT);
  }
  const hashedPassword = await hashPassword(newPassword);

  const updatedUser = await prisma.user.update({
    where: { id: existUser.id },
    data: { password: hashedPassword },
  });
  return updatedUser;
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
