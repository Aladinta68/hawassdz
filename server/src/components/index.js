import { authTypeDefs } from "./auth/index.js";
import { authResolvers } from "./auth/index.js";
import { wilayaResolvers } from "./wilaya/resolver.js";
import { wilayaTypeDefs } from "./wilaya/typedefs.js";
import { hotelResolvers } from "./hotel/resolver.js";
import { hotelTypeDefs } from "./hotel/typedefs.js";
import { destinationResolvers } from "./destination/resolver.js";
import { destinationTypeDefs } from "./destination/typedefs.js";

import { sharedTypeDefs } from "./shared/typdefs.js";

export const typeDefs = [
  sharedTypeDefs,
  authTypeDefs,
  wilayaTypeDefs,
  hotelTypeDefs,
  destinationTypeDefs,
];
export const resolvers = [
  authResolvers,
  wilayaResolvers,
  hotelResolvers,
  destinationResolvers,
];
