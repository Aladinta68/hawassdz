import argon from "argon2";
import JWT from "jsonwebtoken";

import {
  ErrorTypes,
  throwCustomError,
} from "../../../utils/error/ErrorHandler.js";

export const hashPassword = async (password) => {
  try {
    const hash = await argon.hash(password);
    return hash;
  } catch (error) {
    throwCustomError("INTERNAL SERVER ERROR", ErrorTypes.INTERNAL_SERVER_ERROR);
  }
};

export const comparePassword = async (hashPassword, password) => {
  try {
    const check = await argon.verify(hashPassword, password);
    if (check) {
      return true;
    }
    return false;
  } catch (error) {
    throwCustomError("INTERNAL SERVER ERROR", ErrorTypes.INTERNAL_SERVER_ERROR);
  }
};

export const signAccessToken = async ({ id, type }) => {
  try {
    const payload = { id, type };
    const options = { expiresIn: "30d" };
    const nodeEnv = process.env.ACCESS_TOKEN_SECRET;
    const token = JWT.sign(payload, nodeEnv, options);
    return token;
  } catch (error) {
    throwCustomError("UNAUTHORIZED", ErrorTypes.UNAUTHORIZED);
  }
};

export const verifyAccessToken = async (token, type) => {
  try {
    let nodeEnv;
    nodeEnv = process.env.ACCESS_TOKEN_SECRET;
    const payload = JWT.verify(token, nodeEnv);
    const { id, type } = payload;
    return { id, type };
  } catch (error) {
    throwCustomError("UNAUTHORIZED", ErrorTypes.UNAUTHORIZED);
  }
};
