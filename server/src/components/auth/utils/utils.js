import argon from "argon2";
import JWT from "jsonwebtoken";

import {
  ErrorTypes,
  throwCustomError,
} from "../../../utils/error/ErrorHandler.js";

const hashPassword = async (password) => {
  try {
    const hash = await argon.hash(password);
    return hash;
  } catch (error) {
    throwCustomError("Failed to hash password", ErrorTypes.INTERNAL_SERVER_ERROR);
  }
};

const comparePassword = async (hashPassword, password) => {
  try {
    const check = await argon.verify(hashPassword, password);
    return check;
  } catch (error) {
    throwCustomError("Failed to compare passwords", ErrorTypes.INTERNAL_SERVER_ERROR);
  }
};

const signAccessToken = async ({ id, type }) => {
  try {
    const payload = { id, type };
    const options = { expiresIn: "30d" };
    const secret = process.env.ACCESS_TOKEN_SECRET;
    const token = JWT.sign(payload, secret, options);
    return token;
  } catch (error) {
    throwCustomError("Failed to sign access token", ErrorTypes.UNAUTHORIZED);
  }
};

const verifyAccessToken = async (token) => {
  try {
    const secret = process.env.ACCESS_TOKEN_SECRET;
    const payload = JWT.verify(token, secret);
    return payload;
  } catch (error) {
    throwCustomError("Failed to verify access token", ErrorTypes.UNAUTHORIZED);
  }
};

export { hashPassword, comparePassword, signAccessToken, verifyAccessToken };
