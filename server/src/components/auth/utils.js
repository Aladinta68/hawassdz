import argon from "argon2";
import JWT from "jsonwebtoken";

import { ErrorTypes, throwCustomError } from "../../utils/error/ErrorHandler.js";

export const hashPassword = async (password) => {
  try {
    const hash = await argon.hash(password);
    return hash;
  } catch (error) {
    throwCustomError("INTERNAL SERVER ERROR",ErrorTypes.INTERNAL_SERVER_ERROR)
  }
};

export const comparePassword = async (hashPassword, password) => {
  try {
    const check = await argon.verify(hashPassword, password);
    if (check) {
      return true;
    } return false
  } catch (error) {
    throwCustomError("INTERNAL SERVER ERROR",ErrorTypes.INTERNAL_SERVER_ERROR)
  }
};

export const signAccessToken = async ({ id }) => {
  try {
    const payload = { id };
    const options = { expiresIn: "30d" };

    const nodeEnv = process.env.ACCESS_TOKEN_SECRET;
    const token = JWT.sign(payload, nodeEnv, options);
    return token;
  } catch (error) {
    throwCustomError("UNAUTHORIZED",ErrorTypes.UNAUTHORIZED)
  }
};

export const verifyAccessToken = async (token) => {
  try {
    const nodeEnv = process.env.ACCESS_TOKEN_SECRET;
    const payload = JWT.verify(token, nodeEnv);
    const { id } = payload;
    return { id };
  } catch (error) {
    throwCustomError("UNAUTHORIZED",ErrorTypes.UNAUTHORIZED)
  }
};
