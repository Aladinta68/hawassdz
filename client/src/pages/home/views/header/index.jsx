import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import header1 from "../../../../assets/home/header1.png";
import { Filterbar } from "../../components/filterbar";
export const Header = () => {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      bgImg={header1}
      bgSize={"cover"}
      bgPos={"center"}
      h={{ base: "", md: "100vh" }}
      w={"100%"}
    >
      <Box
        opacity={"0.4"}
        bg={"#000000"}
        w={"100%"}
        h={{ base: "84%", md: "100vh" }}
        position={"absolute"}
      ></Box>
      <Container
        zIndex={99}
        mt={{ base: "100px", md: "60px" }}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        maxW={"5xl"}
      >
        <Flex direction={"column"} textAlign={"center"}>
          <Heading mb={6} fontWeight={600} fontSize={50} color={"#ffffff"}>
            Enjoy in the best way!
          </Heading>
          <Text fontSize={20} color={"#ffffff"}>
            Enjoy our services for your trip anytime
          </Text>
        </Flex>
        <Filterbar />
      </Container>
    </Flex>
  );
};
