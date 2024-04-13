import { ChakraProvider } from "@chakra-ui/react";
import { ApolloProvider } from "@apollo/client";
import { Theme } from "./chakraui/theme";
import Router from "./routes";
import { client } from "./graphQL/services";
function App() {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={Theme}>
          <Router />
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;
