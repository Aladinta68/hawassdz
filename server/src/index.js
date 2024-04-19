import express from "express";
import { ApolloServer } from "apollo-server-express";
import cors from 'cors';
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { formatError } from "./utils/error/ErrorHandler.js";
import { typeDefs, resolvers } from "./components/index.js";
import { context } from "./middleware/context.js";
import { default as graphqlUploadExpress } from "graphql-upload/graphqlUploadExpress.mjs";

async function startServer() {
  const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    context,
    formatError,
    plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
  });

  await server.start();

  const app = express();
  app.use(cors({ origin: "http://localhost:5173" }));

  app.use(express.static("public"));

  app.use(graphqlUploadExpress());

  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;
  await new Promise((resolve) => app.listen({ port: PORT }, resolve));
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  );
}

startServer();
