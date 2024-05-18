import {
  Button,
  HStack,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { GoChevronLeft } from "react-icons/go";

export const Paggination = ({
  setSelectedPage,
  currentPage,
  refetch,
  maxPage,
}) => {
  const handleClick = (pageIndex) => {
    if (refetch) {
      refetch({
        page: pageIndex + 1,
        perPage: 4,
        sortBy: "name",
        sortDirection: "asc",
      });
    }
    if (setSelectedPage) {
      setSelectedPage(pageIndex + 1);
    }
  };
  const handlePrevious = () => {
    if (currentPage > 1) {
      if (refetch) {
        refetch({
          page: currentPage - 1,
          perPage: 4,
          sortBy: "name",
          sortDirection: "asc",
        });
      }
      if (setSelectedPage) {
        setSelectedPage(currentPage - 1);
      }
    }
  };
  const handleNext = () => {
    if (currentPage < maxPage) {
      if (refetch) {
        refetch({
          page: currentPage + 1,
          perPage: 4,
          sortBy: "name",
          sortDirection: "asc",
        });
      }
      if (setSelectedPage) {
        setSelectedPage(currentPage + 1);
      }
    }
  };
  return (
    <HStack>
      <IconButton
        onClick={handlePrevious}
        isDisabled={currentPage === 1}
        fontSize={20}
        variant={"unstyled"}
        transform="rotate(180deg)"
        icon={<GoChevronLeft />}
        aria-label="Previous Page"
        mx={2}
      />
      {Array.from({ length: maxPage }, (_, index) => (
        <Button
          onClick={() => handleClick(index)}
          transition={"ease-in-out 0.4s"}
          _hover={{ backgroundColor: "#b5b3f6" }}
          borderRadius={"100%"}
          fontWeight={400}
          variant={"unstyled"}
          key={index}
          color={
            currentPage === index + 1
              ? "#ffffff"
              : useColorModeValue("#000000", "#ffffff")
          }
          bg={
            currentPage === index + 1
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
        aria-label="Next Page"
        isDisabled={currentPage === maxPage}
      />
    </HStack>
  );
};
