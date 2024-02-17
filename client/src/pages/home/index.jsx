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
  TripssPopularData
} from "../../data/populardata";
const Home = () => {
  return (
    <Flex direction={"column"}>
      <Header />
      <Container maxW={"6xl"}>
        <Spacer height={50} />
        <Popular type="destinations" mydata={DestinationsPopularData} />
        <Spacer height={50} />
        <Popular type="hotels" mydata={HotelsPopularData} />
        <Spacer height={50} />
        <Popular type="restaurants" mydata={RestaurantsPopularData} />
        <Spacer height={50} />
        <Steps />
        <Spacer height={0} />
        <Popular type="Trips" mydata={TripssPopularData} />
        <Spacer height={50} />
        <Description />
        <Divider height={50} />
      </Container>
    </Flex>
  );
};

export default Home;
