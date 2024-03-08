import { PrismaClient } from "@prisma/client";

export const prismaClient = () => {
  try {
    return new PrismaClient();
  } catch (error) {
    console.log(error);
  }
};