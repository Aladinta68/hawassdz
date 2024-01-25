import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Filterbar } from "../../components/filterbar";
export const Header = () => {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      bg={"red"}
      h={"100vh"}
      w={"100%"}
    >
      <Container display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} maxW={'5xl'} bg={'gray'}>
        <Flex direction={'column'} textAlign={'center'}>
          <Heading mb={6} fontWeight={600} fontSize={50} color={'#ffffff'}>Enjoy in the best way!</Heading>
          <Text fontSize={20} color={'#ffffff'}>Enjoy our services for your trip anytime</Text>
        </Flex>
        <Filterbar />
      </Container>
    </Flex>
  );
};
