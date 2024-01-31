import {  Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { BsCalendar2Check } from "react-icons/bs";
import { GiTreasureMap } from "react-icons/gi";
import { MdDirectionsWalk } from "react-icons/md";
import steps from "../../../../assets/image/steps.png"
export const Steps = () => {
  return (
    <Flex
      w={"100%"}
      justify={"center"}
      align={"center"}
      direction={{  md: "row" }}
    >
      <Flex
        w={{ base: "100%", md: "50%" }}
        direction={"column"}
        justify={"center"}
        align={{ base: "center", md: "start" }}
      >
        <Text fontWeight={600} color={"#DF6951"}>Fast & Easy</Text>
        <Text textAlign={'center'} fontSize={30} fontWeight={600} color={"#181E4B"} mb={5}>
          Get Your Favourite Resort Bookings
        </Text>
        <Flex  align={"center"} direction={"row"}>
          <Flex
            mr={5}
            h={"50px"}
            w={{base:"80px",md:"60px"}}
            borderRadius={10}
            justify={"center"}
            align={"center"}
            bg={"#F0BB1F"}
          >
            <GiTreasureMap fontSize={25} color="#ffffff" />
          </Flex>{" "}
          <Flex direction={"column"} align={"flex-start"} color={"#5E6282"}>
            <Text fontWeight={600}>Choose Trip</Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
              tortor tempus.{" "}
            </Text>
          </Flex>
        </Flex>
        <Flex align={"center"} my={5} direction={"row"}>
          <Flex
            mr={5}
            h={"50px"}
            w={{base:"80px",md:"60px"}}
            borderRadius={10}
            justify={"center"}
            align={"center"}
            bg={"#F15A2B"}
          >
            <BsCalendar2Check fontSize={25} color="#ffffff" />
          </Flex>
          <Flex direction={"column"} align={"flex-start"} color={"#5E6282"}>
            <Text fontWeight={600}>Check Availability</Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
              tortor tempus.{" "}
            </Text>
          </Flex>
        </Flex>
        <Flex align={"center"} direction={"row"}>
          <Flex
            mr={5}
            h={"50px"}
            w={{base:"80px",md:"60px"}}
            borderRadius={10}
            justify={"center"}
            align={"center"}
            bg={"#006380"}
          >
            <MdDirectionsWalk fontSize={25} color="#ffffff" />
          </Flex>{" "}
          <Flex direction={"column"} align={"flex-start"} color={"#5E6282"}>
            <Text fontWeight={600}>Let’s Go</Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
              tortor tempus.{" "}
            </Text>
          </Flex>
        </Flex>
      </Flex>{" "}
      <Flex w={{ base: "0%", md: "50%" }} justify={"center"} align={"center"}>
        <Image w={'80%'} src={steps} />
      </Flex>
    </Flex>
  );
};
