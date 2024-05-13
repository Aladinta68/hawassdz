import { authTypeDefs, authResolvers } from "./auth/index.js";
import { wilayaResolvers, wilayaTypeDefs } from "./wilaya/index.js";
import { hotelResolvers, hotelTypeDefs } from "./hotel/index.js";
import { restaurantResolvers, restaurantTypeDefs } from "./restaurant/index.js";
import {
  destinationResolvers,
  destinationTypeDefs,
} from "./destination/index.js";
import { travelResolvers, travelTypeDefs } from "./travel/index.js";
import { userResolvers } from "./user/resolver.js";
import { userTypeDefs } from "./user/typedefs.js";
import { ratingResolvers } from "./rating/resolver.js";
import { ratingTypeDefs } from "./rating/typedefs.js";

import { sharedTypeDefs } from "./shared/typdefs.js";

export const typeDefs = [
  sharedTypeDefs,
  authTypeDefs,
  userTypeDefs,
  wilayaTypeDefs,
  hotelTypeDefs,
  restaurantTypeDefs,
  destinationTypeDefs,
  travelTypeDefs,
  ratingTypeDefs,
];
export const resolvers = [
  authResolvers,
  userResolvers,
  wilayaResolvers,
  hotelResolvers,
  restaurantResolvers,
  destinationResolvers,
  travelResolvers,
  ratingResolvers,
];
