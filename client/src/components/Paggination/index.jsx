import {
  Button,
  HStack,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { GoChevronLeft } from "react-icons/go";

export const Paggination = ({ DataLength = 3, Selected, onPageChange }) => {
  const handleClick = (Index) => {
    onPageChange(Index);
  };
  return (
    <HStack >
      <IconButton
        fontSize={20}
        variant={"unstyled"}
        transform="rotate(180deg)"
        icon={<GoChevronLeft />}
        mx={2}
      />
      {Array.from({ length: DataLength }, (_, index) => (
        <Button
          onClick={() => handleClick(index)}
          transition={"ease-in-out 0.4s"}
          _hover={{ backgroundColor: "#b5b3f6" }}
          borderRadius={"100%"}
          fontWeight={400}
          variant={"unstyled"}
          key={index}
          color={
            Selected === index + 1
              ? "#ffffff"
              : useColorModeValue("#000000", "#ffffff")
          }
          bg={Selected === index + 1 ? "#7d79f6" :useColorModeValue("#e1dfdf","#2e2d41")}
        >
          {index + 1}
        </Button>
      ))}
      <IconButton mx={2} fontSize={20} variant={"unstyled"} icon={<GoChevronLeft />} />
    </HStack>
  );
};
