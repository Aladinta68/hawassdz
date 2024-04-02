// src/middleware/context.js
// import { verifyAccessToken } from "../components/auth/utils";
import { prismaClient } from "../prisma/client.js";

const prisma = prismaClient();

export const context = async ({ req, res }) => {
  try {
    if (!req.headers.authorization) {
      return { prisma, message: "Unauthorized" };
    }
    const authorizationToken = req.headers.authorization;
    const { id } = await verifyAccessToken(authorizationToken);
    return { prisma, id };
  } catch (error) {
    console.log(error);
  }
};
