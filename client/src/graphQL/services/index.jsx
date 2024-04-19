import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://hawassdz-server.vercel.app/",
  cache: new InMemoryCache(),
});
