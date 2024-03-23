import React from "react";
import { Container, Divider, Flex, Spacer } from "@chakra-ui/react";
import { Header } from "./views/header/index";
import { Popular } from "./views/popular/index";
import { Description } from "./views/description/index";
import { Steps } from "./views/steps/index";
import { DestinationsData } from "../../data/destinationdata";
import { HotelsData } from "../../data/hotelsdata";
import { RestaurantsData } from "../../data/restaurantdata";
import { TripsData } from "../../data/tripdata";
const Home = () => {
  return (
    <Flex direction={"column"}>
      <Header />
      <Container maxW={"8xl"}>
        <Spacer height={50} />
        <Popular type="destinations" mydata={DestinationsData} />
        <Spacer height={50} />
        <Popular type="hotels" mydata={HotelsData} />
        <Spacer height={50} />
        <Popular type="restaurants" mydata={RestaurantsData} />
        <Spacer height={50} />
        <Steps />
        <Spacer height={0} />
        <Popular type="trips" mydata={TripsData} />
        <Spacer height={50} />
        <Description />
        <Divider height={50} />
      </Container>
    </Flex>
  );
};

export default Home;
