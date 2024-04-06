import * as yup from "yup";
import fs from "fs";
import path from "path";
import {
  createOne,
  findByEmail,
  resetPassword,
  verifyCodePin,
  updateForgetPassword,
} from "./service.js";
import { signAccessToken } from "../utils.js";
import {
  throwCustomError,
  ErrorTypes,
} from "../../../utils/error/ErrorHandler.js";
import {
  loginSchema,
  registerSchema,
  updateForgetPasswordSchema,
  verifyCodePinSchema,
  forgetPasswordSchema,
} from "./validations.js";
import { default as GraphQLUpload } from "graphql-upload/GraphQLUpload.mjs";

export const UserResolver = {
  Upload: GraphQLUpload,
  Mutation: {
    login: async (_, { input }, { prisma }) => {
      try {
        await loginSchema.validate(input, { abortEarly: false });
        const user = await findByEmail({ input, prisma });
        const type = "USER";
        const accessToken = await signAccessToken({ id: user.id, type });
        const authOutput = {
          accessToken,
        };
        return authOutput;
      } catch (error) {
        if (error instanceof yup.ValidationError) {
          const errors = {};
          error.inner.reverse().forEach((error) => {
            const field = error.path;
            const message = error.message;
            if (!errors[field]) {
              errors[field] = message;
            }
          });
          throwCustomError("Bad User Input", ErrorTypes.BAD_USER_INPUT, errors);
        }
        throwCustomError(error.message, error.type);
      }
    },
    register: async (_, { input }, { prisma }) => {
      try {
        await registerSchema.validate(input, { abortEarly: false });
        const user = await createOne({ input, prisma });
        const type = "USER";
        const accessToken = await signAccessToken({ id: user.id, type });
        const authOutput = {
          accessToken,
        };
        return authOutput;
      } catch (error) {
        if (error instanceof yup.ValidationError) {
          const errors = {};
          error.inner.reverse().forEach((error) => {
            const field = error.path;
            const message = error.message;
            if (!errors[field]) {
              errors[field] = message;
            }
          });
          throwCustomError("Bad User Input", ErrorTypes.BAD_USER_INPUT, errors);
        }
        throwCustomError(
          error.message,
          error.type || ErrorTypes.INTERNAL_SERVER_ERROR
        );
      }
    },
    forgetPassword: async (_, { input }, { prisma }) => {
      try {
        await forgetPasswordSchema.validate(input, { abortEarly: false });
        const result = await resetPassword({ input, prisma });
        return result;
      } catch (error) {
        if (error instanceof yup.ValidationError) {
          const errors = {};
          error.inner.reverse().forEach((error) => {
            const field = error.path;
            const message = error.message;
            if (!errors[field]) {
              errors[field] = message;
            }
          });
          throwCustomError("Bad User Input", ErrorTypes.BAD_USER_INPUT, errors);
        }
        throw error;
      }
    },
    verifyCodePin: async (_, { input }, { prisma }) => {
      try {
        await verifyCodePinSchema.validate(input, { abortEarly: false });
        const check = await verifyCodePin({ input, prisma });
        return check;
      } catch (error) {
        if (error instanceof yup.ValidationError) {
          const errors = {};
          error.inner.reverse().forEach((error) => {
            const field = error.path;
            const message = error.message;
            if (!errors[field]) {
              errors[field] = message;
            }
          });
          throwCustomError("Bad User Input", ErrorTypes.BAD_USER_INPUT, errors);
        }
        throw error;
      }
    },
    updateForgetPassword: async (_, { input }, { prisma }) => {
      try {
        await updateForgetPasswordSchema.validate(input, { abortEarly: false });
        const result = await updateForgetPassword({ input, prisma });
        return result;
      } catch (error) {
        if (error instanceof yup.ValidationError) {
          const errors = {};
          error.inner.reverse().forEach((error) => {
            const field = error.path;
            const message = error.message;
            if (!errors[field]) {
              errors[field] = message;
            }
          });
          throwCustomError("Bad User Input", ErrorTypes.BAD_USER_INPUT, errors);
        }
        throw error;
      }
    },
    uploadUserImage: async (_, { userId, file }) => {
      try {
        const { createReadStream, filename } = await file;
        if (!createReadStream || !filename) {
          return throwCustomError(
            "Something went Wrong ",
            ErrorTypes.INTERNAL_SERVER_ERROR
          );
        }
        const stream = createReadStream();
        const pathName = path.join(
          process.cwd(),
          `/public/images/${filename}`
        );
        const writeStream = fs.createWriteStream(pathName);

        await new Promise((resolve, reject) => {
          stream.pipe(writeStream).on("finish", resolve).on("error", reject);
        });

        return {
          url: `http://localhost:2024/uploads/${filename}`,
        };
      } catch (error) {
        console.error("Error during upload:", error);
        throw error;
      }
    },
  },
};
export default UserResolver;
