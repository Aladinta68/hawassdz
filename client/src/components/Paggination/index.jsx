import { Button, HStack, IconButton } from "@chakra-ui/react";
import React from "react";
import { GoChevronLeft } from "react-icons/go";

export const Paggination = ({ DataLength = 3, Selected, onPageChange }) => {
  const handleClick = (Index) => {
    onPageChange(Index);
  };
  return (
    <HStack>
      <IconButton fontSize={20} variant={"unstyled"} icon={<GoChevronLeft />} />
      {Array.from({ length: DataLength }, (_, index) => (
        <Button
          onClick={() => handleClick(index)}
          transition={"ease-in-out 0.2s"}
          _hover={{ backgroundColor: "#eae7e7" }}
          borderRadius={"100%"}
          fontWeight={400}
          variant={"unstyled"}
          key={index}
          bg={Selected === index + 1 ? "#eae7e7" : ""}
        >
          {index + 1}
        </Button>
      ))}
      <IconButton
        fontSize={20}
        variant={"unstyled"}
        transform="rotate(180deg)"
        icon={<GoChevronLeft />}
      />
    </HStack>
  );
};
