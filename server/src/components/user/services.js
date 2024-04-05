import {
  throwCustomError,
  ErrorTypes,
} from "../../utils/error/ErrorHandler.js";

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

export const updateUserById = async ({ id, userInput, prisma }) => {
  try {
    const updatedUser = await prisma.user.update({
      where: { id },
      data: userInput,
    });
    return updatedUser;
  } catch (error) {
    throwCustomError(
      "Something went wrong while updating user, Try again",
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
