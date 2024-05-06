import { ChakraProvider, Stack } from "@chakra-ui/react";
import { ApolloProvider } from "@apollo/client";
import { Theme } from "./chakraui/theme";
import Router from "./routes";
import { client } from "./api/AppoloClient";
import { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3200);
  }, []);

  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={Theme}>
        {loading ? (
          <Stack align={"center"} justify={"center"} w={"100%"} h={"100vh"}>
            <HashLoader color="#ff9c00" size={90} />{" "}
          </Stack>
        ) : (
          <Router />
        )}
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;
