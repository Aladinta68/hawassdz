import { verifyAccessToken } from "../components/auth/utils.js";
import { prismaClient } from "../prisma/client.js";

const prisma = prismaClient();

export const context = async ({ req, res }) => {
  try {
    if (!req.headers.authorization) {
      return { prisma, message: "Unauthorized" };
    }
    const authorizationToken = req.headers.authorization;
    const { id,type } = await verifyAccessToken(authorizationToken);
    return { prisma, user:{id,type} };
  } catch (error) {
    console.log(error);
  }
};
