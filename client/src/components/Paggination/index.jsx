import {
  Button,
  HStack,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { GoChevronLeft } from "react-icons/go";

export const Paggination = ({ SelectedPage, MaxPage, setSelectedPage }) => {
  const handleClick = (Index) => {
    setSelectedPage(Index + 1);
  };
  const handlePrevious = () => {
    setSelectedPage(SelectedPage - 1);
  };
  const handleNext = () => {
    setSelectedPage(SelectedPage + 1);
  };
  return (
    <HStack>
      <IconButton
        onClick={handlePrevious}
        isDisabled={SelectedPage === 1}
        fontSize={20}
        variant={"unstyled"}
        transform="rotate(180deg)"
        icon={<GoChevronLeft />}
        mx={2}
      />
      {Array.from({ length: MaxPage }, (_, index) => (
        <Button
          onClick={() => handleClick(index)}
          transition={"ease-in-out 0.4s"}
          _hover={{ backgroundColor: "#b5b3f6" }}
          borderRadius={"100%"}
          fontWeight={400}
          variant={"unstyled"}
          key={index}
          color={
            SelectedPage === index + 1
              ? "#ffffff"
              : useColorModeValue("#000000", "#ffffff")
          }
          bg={
            SelectedPage === index + 1
              ? "#7d79f6"
              : useColorModeValue("#e1dfdf", "#2e2d41")
          }
        >
          {index + 1}
        </Button>
      ))}
      <IconButton
        onClick={handleNext}
        mx={2}
        fontSize={20}
        variant={"unstyled"}
        icon={<GoChevronLeft />}
        isDisabled={SelectedPage === MaxPage}
      />
    </HStack>
  );
};
