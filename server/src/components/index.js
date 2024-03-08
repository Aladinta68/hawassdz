import { UserResolver, UserSchema, UserTypeDefs } from "./user/index.js";
export const typeDefs = [UserSchema, UserTypeDefs];
export const resolvers = [UserResolver];
