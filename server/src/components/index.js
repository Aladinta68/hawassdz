import { authTypeDefs,authResolvers } from "./auth/index.js";
import { wilayaResolvers,wilayaTypeDefs } from "./wilaya/index.js";
import { hotelResolvers ,hotelTypeDefs} from "./hotel/index.js";
import { destinationResolvers,destinationTypeDefs } from "./destination/index.js";
import { travelResolvers,travelTypeDefs } from "./travel/index.js";
import { userResolvers } from './user/resolver.js'
import { userTypeDefs } from './user/typedefs.js'

import { sharedTypeDefs } from "./shared/typdefs.js";

export const typeDefs = [
  sharedTypeDefs,
  authTypeDefs,
  userTypeDefs,
  wilayaTypeDefs,
  hotelTypeDefs,
  destinationTypeDefs,
  travelTypeDefs,
];
export const resolvers = [
  authResolvers,
  userResolvers,
  wilayaResolvers,
  hotelResolvers,
  destinationResolvers,
  travelResolvers,
];
