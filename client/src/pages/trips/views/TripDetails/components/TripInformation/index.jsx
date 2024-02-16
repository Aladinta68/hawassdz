import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import { Header } from "./components/Header";
import { Details } from "./components/Details";
import { About } from "./components/About";
import { Images } from "./components/Images";
import { ExtraDetails } from "./components/ExtraDetails";
import Plane from "../../../../../../assets/image/trips/Plane.png";
import { BookNow } from "./../../../../components/BookNow/index";
import { Rating } from "./components/Rating";

export const TripInformation = ({ HandleTripLink }) => {
  return (
    <Flex direction={"column"} w={"100%"}>
      <Header />
      <Images HandleTripLink={HandleTripLink} />
      <Flex w={"100%"} direction={"row"}>
        <Flex direction={"column"} w={{ md: "60%", base: "100%" }}>
          <About />
          <Details />
          <ExtraDetails />
          <Rating />
        </Flex>
        <Flex
          pt={50}
          pl={10}
          direction={"column"}
          w={{ base: "0", md: "40%" }}
          align={"center"}
          justify={"flex-start"}
          visibility={{ md: "visible", base: "hidden" }}
        >
          <BookNow />
          <Image mt={10} src={Plane} />
        </Flex>
      </Flex>
    </Flex>
  );
};
