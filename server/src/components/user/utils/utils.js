import argon from "argon2";

import {
  ErrorTypes,
  throwCustomError,
} from "../../../utils/error/ErrorHandler.js";
const comparePassword = async (hashPassword, password) => {
  try {
    const check = await argon.verify(hashPassword, password);
    return check;
  } catch (error) {
    throwCustomError("Failed to compare passwords", ErrorTypes.INTERNAL_SERVER_ERROR);
  }
};
const hashPassword = async (password) => {
  try {
    const hash = await argon.hash(password);
    return hash;
  } catch (error) {
    throwCustomError(
      "Failed to hash password",
      ErrorTypes.INTERNAL_SERVER_ERROR
    );
  }
};

export { hashPassword,comparePassword };
