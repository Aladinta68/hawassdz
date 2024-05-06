import React from "react";
import { handleDescription, handleTitle, moveLeft, moveRight } from "../utils";
import {
  HStack,
  IconButton,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { IoArrowBack } from "react-icons/io5";

export const Header = ({ type, swiperRef }) => {
  return (
    <Stack
      py={5}
      w={"100%"}
      justifyContent={{ base: "center", md: "space-between" }}
      alignItems={"center"}
      direction={{ base: "column", md: "row" }}
    >
      <Text
        textAlign={{ base: "center", md: "start" }}
        w={{ base: "100%", md: "30%" }}
        color={useColorModeValue("#0C111F", "#ffffff")}
        fontSize={22}
        fontWeight={600}
      >
        {handleTitle(type)}
      </Text>
      <Text
        fontSize={20}
        w={{ base: "100%", md: "40%" }}
        fontWeight={500}
        color={useColorModeValue("#0c111faa", "#ffffff")}
        my={{ base: "8", md: 0 }}
        textAlign={"center"}
      >
        {handleDescription(type)}
      </Text>
      <HStack
        spacing={5}
        justifyContent={{ base: "center", md: "end" }}
        w={{ base: "30%", md: "30%" }}
      >
        <IconButton
          style={{ transform: "rotate(180deg)" }}
          display={"flex"}
          fontSize={22}
          color={"#ffffff"}
          bgColor={"#0C111F"}
          borderRadius={"full"}
          border={"4px solid #F5F5F5"}
          variant={"unstyled"}
          icon={<IoArrowBack />}
          onClick={()=>moveLeft(swiperRef)}
        />
        <IconButton
          display={"flex"}
          fontSize={22}
          color={"##0C111F"}
          borderRadius={"full"}
          border={"4px solid #F5F5F5"}
          variant={"unstyled"}
          icon={<IoArrowBack />}
          onClick={()=>moveRight(swiperRef)}
        />
      </HStack>
    </Stack>
  );
};
