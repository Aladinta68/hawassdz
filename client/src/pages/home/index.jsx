import React from "react";
import { Container, Divider, Flex, Spacer } from "@chakra-ui/react";
import { Header } from "./views/header/index";
import { Popular } from "./views/popular/index";
import { Description } from "./views/description/index";
import { Steps } from "./views/steps/index";
import {
  DestinationsPopularData,
  HotelsPopularData,
  RestaurantsPopularData,
} from "../../data/populardata";
const Home = () => {
  return (
    <Flex direction={"column"}>
      <Header />
      <Container maxW={"6xl"}>
        <Spacer height={50} />
        <Popular
          title={DestinationsPopularData.title}
          description={DestinationsPopularData.description}
        />
        <Spacer height={50} />
        <Popular
          title={HotelsPopularData.title}
          description={HotelsPopularData.description}
        />
        <Spacer height={50} />
        <Popular
          title={RestaurantsPopularData.title}
          description={RestaurantsPopularData.description}
        />
        <Spacer height={50} />
        <Steps />
        <Spacer height={0} />
        <Popular />
        <Spacer height={50} />
        <Description />
        <Divider height={50} />
      </Container>
    </Flex>
  );
};

export default Home;
