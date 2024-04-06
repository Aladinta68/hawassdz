import {
  throwCustomError,
  ErrorTypes,
} from "../../../utils/error/ErrorHandler.js";
import { comparePassword, hashPassword } from "../utils.js";

export const findByEmail = async ({ input, prisma }) => {
  try {
    const { email, password } = input;
    const existingAdmin = await prisma.admin.findUnique({
      where: {
        email,
      },
    });
    if (!existingAdmin) {
      throwCustomError("Invalid Credentials", ErrorTypes.BAD_USER_INPUT);
    }
    const match = await comparePassword(existingAdmin.password, password);
    if (!match) {
      throwCustomError("Invalid Credentials", ErrorTypes.BAD_USER_INPUT);
    }
    return existingAdmin;
  } catch (error) {
    throw error;
  }
};
export const createOne = async ({ input, prisma }) => {
  
  try {
    const { email, userName, password } = input;
    const existingAdminEmail = await prisma.admin.findUnique({
      where: {
        email,
      },
    });
    const existingAdminUserName = await prisma.admin.findUnique({
      where: {
        userName,
      },
    });
    if (existingAdminEmail) {
      throwCustomError(
        "Credentials is already registered",
        ErrorTypes.BAD_USER_INPUT
      );
    }
    if (existingAdminUserName) {
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
