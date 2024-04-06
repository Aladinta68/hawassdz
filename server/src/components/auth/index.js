import { UserResolver, UserTypeDefs } from "./user/index.js";
import {AdminResolver,AdminTypeDefs} from "./admin/index.js"
export const authtypeDefs = [UserTypeDefs,AdminTypeDefs];
export const authresolvers = [UserResolver,AdminResolver];
