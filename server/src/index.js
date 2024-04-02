import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import dotenv from "dotenv";
import { resolvers, typeDefs } from "./components/index.js";
import { formatError } from "./utils/error/ErrorHandler.js";
import { context } from "./middleware/context.js";

dotenv.config();

const port = process.env.PORT;

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: port },
  context,
  formatError,
});

console.log(`🚀  Server ready at: ${url}`);
