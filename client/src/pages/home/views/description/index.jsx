import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import description from "../../../../assets/image/description.png";
export const Description = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Flex
        align={"center"}
        justifyContent={"center"}
        w={{ base: "100%", md: "50%" }}
      >
        <Image w={"50%"} src={description} />
      </Flex>
      <Flex
        alignItems={{base:"center",md:"flex-start"}}
        justifyContent={"center"}
        w={{ base: "100%", md: "50%" }}
        direction={"column"}
      >
        <Text  fontWeight={500} color={"#0000007e"} py={2}>
          WELCOME TO OUR SITE!
        </Text>
        <Text fontSize={22} fontWeight={600} pb={5}>
          We are the best company for your visit
        </Text>
        <Text pb={5} color={"#333333"}>
          After decades of experience, and a whole life in Lucca, we offer you
          the most complete tourism service in the city. In addition to having
          bikes and rickshaws to have as much fun as you want, you have the
          choice of tour guides with whom to tour and drivers for your every
          need! We offer packages in the way that you get the most at the lowest
          price. Book with us and we will always be available for you!
        </Text>
        <Flex  justifyContent={"center"} alignItems={"flex-start"} direction={"row"}>
          <VStack alignItems={"flex-start"}>
            <Text fontWeight={600} fontSize={20} color={"#FA8B02"}>
              20+
            </Text>
            <Text color={"#0000007e"}>
              Years <br /> Experience
            </Text>
          </VStack>
          <VStack mx={5} alignItems={"flex-start"}>
            <Text fontWeight={600} fontSize={20} color={"#FA8B02"}>
              100+
            </Text>
            <Text color={"#0000007e"}>
              Happy <br />
              Customer
            </Text>
          </VStack>
          <VStack mx={5} alignItems={"flex-start"}>
            <Text fontWeight={600} fontSize={20} color={"#FA8B02"}>
              15+
            </Text>
            <Text color={"#0000007e"}>
              Choice
              <br /> of Services
            </Text>
          </VStack>
          <VStack alignItems={"flex-start"}>
            <Text fontWeight={600} fontSize={20} color={"#FA8B02"}>
              10+
            </Text>
            <Text color={"#0000007e"}>
              Professional
              <br /> Guides
            </Text>
          </VStack>
        </Flex>
      </Flex>
    </Flex>
  );
};
