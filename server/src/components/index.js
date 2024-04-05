import { UserResolver, UserTypeDefs } from "./user/index.js";
import {authResolver,authTypeDefs} from "./auth/index.js"
export const typeDefs = [ UserTypeDefs,authTypeDefs];
export const resolvers = [UserResolver,authResolver];
