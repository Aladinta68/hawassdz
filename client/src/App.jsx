import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ApolloProvider } from "@apollo/client";
import { Theme } from "./chakraui/theme";
import { client } from "./api/AppoloClient";
import { LoadingSpinner } from "./components/LoadingSpinner";
const Router = React.lazy(() => import("./routes"));

function App() {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={Theme}>
        <React.Suspense fallback={<LoadingSpinner />}>
          <Router />
        </React.Suspense>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;
