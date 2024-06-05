import { ApolloClient, InMemoryCache } from "@apollo/client";
import { default as createUploadLink } from "apollo-upload-client/createUploadLink.mjs";

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createUploadLink({
   //  uri:"http://localhost:3000/graphql"
    uri:" https://hawassdz.onrender.com/graphql"
  }),
});
