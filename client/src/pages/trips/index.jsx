import { Container, Flex, Image, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { Header } from "./components/header";
import { TriBar } from "./components/TriBar";
import { FilterBar } from "./components/FilterBar";
import Plane from "../../assets/image/trips/Plane.png";
export const Trips = () => {
  const breakpoint = useBreakpointValue({ base: "base", md: "md", lg: "lg" });

  return (
    <Flex justify={"center"} align={"center"} direction={"column"}>
      <Header />
      <TriBar />
      <Container py={20} px={0} maxW={"6xl"}>
        {breakpoint === "base" ? (
          <Flex bg={"red"} align={"center"} direction={"column"}>
            <Flex
              justify={"center"}
              align={"center"}
              h={"full"}
              w={"90%"}
              direction={"column"}
            >
              <FilterBar />
            </Flex>
            <Flex h={"full"} w={"70%"} direction={"column"}></Flex>
            <Image mt={10} src={Plane} />
          </Flex>
        ) : (
          <Flex direction={"row"}>
            <Flex h={"full"} w={"70%"} direction={"column"}></Flex>
            <Flex
              justify={"center"}
              align={"center"}
              h={"full"}
              w={"30%"}
              direction={"column"}
            >
              <FilterBar />
              <Image mt={10} src={Plane} />
            </Flex>
          </Flex>
        )}
      </Container>
    </Flex>
  );
};
