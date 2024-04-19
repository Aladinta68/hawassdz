import { authTypeDefs } from "./auth/index.js";
import { authResolvers } from "./auth/index.js";
import { wilayaResolvers } from './wilaya/resolver.js'
import { wilayaTypeDefs } from './wilaya/typedefs.js'

export const typeDefs = [authTypeDefs,wilayaTypeDefs];
export const resolvers = [authResolvers,wilayaResolvers];
