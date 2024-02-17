import { Button, Flex, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { TbArrowUpRight } from "react-icons/tb";

export const BookNow = () => {
  return (
    <Flex
      my={{ base: 10, md: 0 }}
      p={5}
      borderRadius={20}
      border={"1px solid #dcdada"}
    >
      <VStack align={"flex-start"} spacing={5} w={"100%"}>
        <Heading color={"#181E4B"} fontWeight={600} fontSize={30}>
          Book This Trip
        </Heading>
        <HStack justify={"space-between"} w={"100%"}>
          <VStack align={"flex-start"} spacing={0}>
            <Text fontSize={17}>from</Text>
            <Text fontSize={20} fontWeight={600}>
              $85.60
            </Text>
            <Text fontSize={17}>per adult</Text>
          </VStack>
          <Button
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            rightIcon={<TbArrowUpRight />}
            borderRadius={20}
            boxShadow={"md"}
            variant={"unstyled"}
            bg={"#FDC735"}
            px={10}
            fontWeight={500}
            _hover={{ opacity: 0.9 }}
            color={"#000000"}
          >
            Book Now
          </Button>
        </HStack>
      </VStack>
    </Flex>
  );
};
