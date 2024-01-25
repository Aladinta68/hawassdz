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

export const DestinationFilter = () => {
  return (
    <Flex
      w={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      direction={{ base: "column", md: "row" }}
    >
      <Flex
        mx={3}
        my={1}
        w={{ base: "100%", md: "auto" }}
        direction={"column"}
        fontSize={15}
      >
        <HStack>
          <HiMiniUserGroup color={"#000000"} />
          <Text>Number of person</Text>
        </HStack>
        <Select
          fontSize={14}
          border={"none"}
          color={"gray"}
          h={8}
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
          <HiMiniUserGroup width={15} height={15} color={"#000000"} />
          <Text>Date</Text>
        </HStack>
        <Input fontSize={14} type="date" border={"none"} color={"gray"} h={8} />
      </Flex>
      <Flex
        w={{ base: "100%", md: "auto" }}
        m={1}
        direction={"column"}
        fontSize={15}
      >
        <HStack>
          <HiMiniUserGroup color={"#000000"} />
          <Text>Types</Text>
        </HStack>
        <Select
          fontSize={14}
          border={"none"}
          color={"gray"}
          h={8}
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
          <HiMiniUserGroup color={"#000000"} />
          <Text>Destination</Text>
        </HStack>
        <Select
          fontSize={14}
          border={"none"}
          color={"gray"}
          h={8}
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
          <HiMiniUserGroup color={"#000000"} />
          <Text>Transportation</Text>
        </HStack>
        <Select fontSize={14} border={"none"} color={"gray"} h={8}>
          <option>Select Transportation</option>
        </Select>
      </Flex>
      <IconButton
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
