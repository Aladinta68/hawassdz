import { authTypeDefs } from "./auth/index.js";
import {authResolvers} from "./auth/index.js"
import {wilayaResolvers} from "./wilaya/index.js"
import {wilayaTypeDefs} from "./wilaya/index.js"
export const typeDefs = [authTypeDefs,wilayaTypeDefs];
export const resolvers = [authResolvers,wilayaResolvers];
