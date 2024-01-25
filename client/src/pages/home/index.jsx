import React from "react";
import { Flex } from "@chakra-ui/react";
import { Header } from "./views/header/index";
import { Popular } from "./views/popular/index";
import { Description } from "./views/description/index";
import { Steps } from "./views/steps/index";
const Home = () => {
  return (
    <Flex direction={"column"}>
      <Header />
      <Popular />
      <Popular />
      <Popular />
      <Steps />
      <Popular />
      <Description />
    </Flex>
  );
};

export default Home;
