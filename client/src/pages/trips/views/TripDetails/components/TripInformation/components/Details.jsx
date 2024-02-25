import { HStack, Icon, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { HiMiniUserGroup } from "react-icons/hi2";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaBusSimple } from "react-icons/fa6";
import { Localisation } from "./../../../../../../../assets/icons-jsx/Localisation";
import { GiSandsOfTime } from "react-icons/gi";
import { PiGenderIntersexBold } from "react-icons/pi";
import { MdPerson4 } from "react-icons/md";
import { MdPeople } from "react-icons/md";

export const Details = () => {
  return (
    <VStack w={"100%"} align={"flex-start"} my={10}>
      <HStack h={"100%"} align={"center"}>
        <Localisation color={"#FA8B02"} height={20} />
        <Text fontWeight={600}>Destination:</Text>
        <Text>Biskra</Text>
      </HStack>
      <HStack h={"100%"} align={"center"}>
        <BsFillCalendarDateFill color={"#FA8B02"} size={18} />
        <Text fontWeight={600}>Departure Time:</Text>
        <Text>Tuesday, 02 Oct 2022 15:00PM </Text>
      </HStack>
      <HStack h={"100%"} align={"center"}>
        <GiSandsOfTime color={"#FA8B02"} size={20} />
        <Text fontWeight={600}>Duration:</Text>
        <Text>2days</Text>
      </HStack>

      <HStack h={"100%"} align={"center"}>
        <FaBusSimple color={"#FA8B02"} size={18} />
        <Text fontWeight={600}>Transport:</Text>
        <Text>Bus</Text>
      </HStack>
      <HStack h={"100%"} align={"center"}>
        <HiMiniUserGroup color={"#FA8B02"} size={18} />
        <Text fontWeight={600}>Group Number</Text>
        <Text>15-30</Text>
      </HStack>
      <HStack h={"100%"} align={"center"}>
        <PiGenderIntersexBold color="#FA8B02" size={20} />
        <Text fontWeight={600}>Gender</Text>
        <Text>Male</Text>
      </HStack>
      <HStack h={"100%"} align={"center"}>
        <MdPeople color="#FA8B02" size={20} />
        <Text fontWeight={600}>Age</Text>
        <Text>+25</Text>
      </HStack>
      <HStack h={"100%"} align={"center"}>
        <MdPerson4 color="#FA8B02" size={20} />
        <Text fontWeight={600}>Guide service</Text>
        <Text>Included</Text>
      </HStack>
    </VStack>
  );
};
