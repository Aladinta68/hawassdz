import crypto from "crypto";
import { hashPassword, comparePassword } from "../utils.js";
import {
  throwCustomError,
  ErrorTypes,
} from "../../../utils/error/ErrorHandler.js";
import { HtmlTemplate } from "../../../utils/mail/mail.template.js";
import { sendMailTest } from "../../../utils/mail/nodemailer.config.js";

export const findByEmail = async ({ input, prisma }) => {
  try {
    const { email, password } = input;
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!existingUser) {
      throwCustomError("Invalid Credentials", ErrorTypes.BAD_USER_INPUT);
    }
    const match = await comparePassword(existingUser.password, password);
    if (!match) {
      throwCustomError("Invalid Credentials", ErrorTypes.BAD_USER_INPUT);
    }
    return existingUser;
  } catch (error) {
    throw error;
  }
};

export const createOne = async ({ input, prisma }) => {
  
  try {
    const { email, firstName, lastName, password } = input;
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
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
    console.log(codePIN)
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
export const updateUserImage = async ({ userId, imagePath, prisma }) => {
  try {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { image: imagePath },
    });
    return updatedUser;
  } catch (error) {
    throw error;
  }
};