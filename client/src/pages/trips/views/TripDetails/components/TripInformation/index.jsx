import { Flex, Image, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { Header } from "./components/Header";
import { Details } from "./components/Details";
import { About } from "./components/About";
import { Images } from "./components/Images";
import { ExtraDetails } from "./components/ExtraDetails";
import Plane from "../../../../../../assets/image/trips/Plane.png";
import { BookNow } from "./../../../../components/BookNow/index";
import { Reviews } from "./components/Reviews";

export const TripInformation = ({ HandleTripLink }) => {
  const breakpoint = useBreakpointValue({ base: "base", md: "md" });

  return (
    <Flex direction={"column"} w={"100%"}>
      <Header />
      <Images HandleTripLink={HandleTripLink} />
      <Flex w={"100%"} direction={"row"}>
        <Flex direction={"column"} w={{ md: "60%", base: "100%" }}>
          <About />
          <BookNow />
          <Details />
          <ExtraDetails />
          <Reviews />
        </Flex>
        {breakpoint === "md" ? (
          <Flex
            pt={{ md: 50, base: 0 }}
            pl={{ base: 0, md: 10 }}
            direction={"column"}
            w={{ base: "0", md: "40%" }}
            align={"center"}
            justify={"flex-start"}
            visibility={{ md: "visible", base: "hidden" }}
          >
            <Flex direction={"column"} position={"sticky"} top={0}>
              <BookNow />
              <Image mt={10} src={Plane} />
            </Flex>
          </Flex>
        ) : (
          <></>
        )}
      </Flex>
    </Flex>
  );
};
