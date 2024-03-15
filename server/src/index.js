import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import dotenv from "dotenv";
import { resolvers, typeDefs } from "./components/index.js";
import { prismaClient } from "./prisma/client.js";

dotenv.config();

const port = process.env.PORT;
const prisma = prismaClient();

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: port },
  context: async ({ req, res }) => ({
    prisma,
  }),
});

console.log(`🚀  Server ready at: ${url}`);
