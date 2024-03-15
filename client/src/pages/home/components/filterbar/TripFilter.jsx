import {
  Flex,
  HStack,
  IconButton,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { HiMiniUserGroup } from "react-icons/hi2";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { GiTreasureMap } from "react-icons/gi";
import { FaBusSimple } from "react-icons/fa6";
import { PiFlagFill } from "react-icons/pi";

export const TripFilter = () => {
  return (
    <Flex
      w={"100%"}
      justifyContent={"space-between"}
      alignItems={"center"}
      direction={{ base: "column", md: "row" }}
    >
      <Flex
        w={{ base: "100%", md: "auto" }}
        mx={3}
        my={1}
        direction={"column"}
        fontSize={15}
      >
        <HStack>
          <HiMiniUserGroup color={"#000000"} />
          <Text>Number of person</Text>
        </HStack>
        <Select
          cursor={"pointer"}
          mt={1}
          fontSize={14}
          border={"none"}
          color={"gray"}
          h={{ base: 10, md: 8 }}
          placeholder="Chose number"
        ></Select>
      </Flex>
      <Flex
        w={{ base: "100%", md: "auto" }}
        m={1}
        direction={"column"}
        fontSize={15}
      >
        <HStack>
          <BsFillCalendarDateFill width={15} height={15} color={"#000000"} />
          <Text>Date</Text>
        </HStack>
        <Input
          cursor={"pointer"}
          mt={1}
          fontSize={14}
          type="date"
          border={"none"}
          color={"gray"}
          h={{ base: 10, md: 8 }}
        />
      </Flex>
      <Flex
        w={{ base: "100%", md: "auto" }}
        m={1}
        direction={"column"}
        fontSize={15}
      >
        <HStack>
          <GiTreasureMap color={"#000000"} />
          <Text>Types</Text>
        </HStack>
        <Select
          cursor={"pointer"}
          mt={1}
          fontSize={14}
          border={"none"}
          color={"gray"}
          h={{ base: 10, md: 8 }}
          placeholder="Select Types"
        ></Select>
      </Flex>
      <Flex
        w={{ base: "100%", md: "auto" }}
        m={1}
        direction={"column"}
        fontSize={15}
      >
        <HStack>
          <PiFlagFill color={"#000000"} />
          <Text>Destination</Text>
        </HStack>
        <Select
          cursor={"pointer"}
          mt={1}
          fontSize={14}
          border={"none"}
          color={"gray"}
          h={{ base: 10, md: 8 }}
          placeholder="Select destination"
        ></Select>
      </Flex>
      <Flex
        w={{ base: "100%", md: "auto" }}
        m={1}
        direction={"column"}
        fontSize={15}
      >
        <HStack>
          <FaBusSimple color={"#000000"} />
          <Text>Transportation</Text>
        </HStack>
        <Select
          my={1}
          cursor={"pointer"}
          fontSize={14}
          border={"none"}
          color={"gray"}
          h={{ base: 10, md: 8 }}
        >
          <option>Select Transportation</option>
        </Select>
      </Flex>
      <IconButton
        _hover={{ opacity: 0.8 }}
        transition={"ease-in-out 0.3"}
        bg={"#FA8B02"}
        variant={"unstyled"}
        color={"#ffffff"}
        h={"55px"}
        w={{ base: "100%", md: "55px" }}
        fontSize={20}
        aria-label="Search"
        icon={<SearchIcon />}
      />
    </Flex>
  );
};
