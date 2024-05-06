import { Flex, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { Details } from "./components/Details";
import { About } from "./components/About";
import { ExtraDetails } from "./components/ExtraDetails";

export const TripInformation = () => {

  return (
    <Flex direction={"column"} w={"100%"}>
      <Flex w={"100%"} direction={"row"}>
        <Flex direction={"column"} w={{ md: "60%", base: "100%" }}>
          <About />
          <Details />
          <ExtraDetails />
        </Flex>
      </Flex>
    </Flex>
  );
};
