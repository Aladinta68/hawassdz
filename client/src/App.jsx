import { ChakraProvider } from "@chakra-ui/react";
import { Router } from "./routes";
import { Theme } from "./chakraui/Theme";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ChakraProvider theme={Theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
