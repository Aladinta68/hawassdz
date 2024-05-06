import { comparePassword, hashPassword } from "./utils/utils.js";
import {
  throwCustomError,
  ErrorTypes,
} from "../../utils/error/ErrorHandler.js";
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

