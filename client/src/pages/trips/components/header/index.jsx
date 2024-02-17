import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
export const Header = ({ image, text1, text2 }) => {
  return (
    <Flex
      top="0"
      left="0"
      zIndex="1"
      justifyContent={"center"}
      alignItems={"center"}
      bgImg={image}
      bgSize={"cover"}
      bgPos={"center"}
      h={{ base: "40vh", md: "80vh" }}
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
            {text1}
          </Text>
          <Heading mb={6} fontWeight={600} fontSize={60} color={"#ffffff"}>
            {text2}
          </Heading>
        </Flex>
      </Container>
    </Flex>
  );
};
