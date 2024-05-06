import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import { TripInformation } from "./components/TripInformation/index";

export const TripDetails = () => {
  return (
    <Flex justify={"center"} align={"center"} direction={"column"}>
      <Container py={20} px={0} maxW={"6xl"}>
        <Flex direction={"row"}>
          <Flex
            align={"center"}
            pr={5}
            pl={{ base: 5, md: 0 }}
            w={{ base: "100%", md: "100%" }}
            direction={"column"}
          >
            <TripInformation />
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};
