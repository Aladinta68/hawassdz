import { authtypeDefs } from "./auth/index.js";
import {authresolvers} from "./auth/index.js"
import {WilayaResolver} from "./wilaya/index.js"
import {WilayatypeDefs} from "./wilaya/index.js"
export const typeDefs = [authtypeDefs,WilayatypeDefs];
export const resolvers = [authresolvers,WilayaResolver];
