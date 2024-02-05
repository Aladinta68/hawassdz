import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import header from "../../../../assets/image/trips/header.png";
export const Header = () => {
  return (
    <Flex
      top="0"
      left="0"
      zIndex="1"
      justifyContent={"center"}
      alignItems={"center"}
      bgImg={header}
      bgSize={"cover"}
      bgPos={"center"}
      h={{ base: "80vh", md: "80vh" }}
      w={"100%"}
      position={"relative"}
    >
      <Box
        opacity={"0.4"}
        bg={"#000000"}
        w={"100%"}
        h={"100%"}
        position={"absolute"}
      ></Box>
      <Container
        zIndex={99}
        mt={{ base: "100px", md: "60px" }}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        maxW={"6xl"}
      >
        <Flex direction={"column"} textAlign={"center"}>
          <Text fontSize={16} color={"#ffffff"}>
            SEARCH TRIP{" "}
          </Text>
          <Heading mb={6} fontWeight={600} fontSize={60} color={"#ffffff"}>
            Travel With Us{" "}
          </Heading>
        </Flex>
      </Container>
    </Flex>
  );
};
