import {
  HStack,
  Icon,
  Text,
  Wrap,
  WrapItem,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import {
  FaGlobe,
  FaMountain,
  FaFilm,
  FaUmbrellaBeach,
  FaGamepad,
  FaUtensils,
  FaCompass,
  FaHistory,
  FaSun,
  FaLeaf,
} from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

export const Categories = () => {
  const tripTypes = [
    {
      label: "جولات ثقافية",
      icon: FaGlobe,
      color: "blue.500",
    },
    {
      label: "رحلات المغامرة والتسلق",
      icon: FaMountain,
      color: "green.500",
    },
    {
      label: "تجارب السينما",
      icon: FaFilm,
      color: "purple.500",
    },
    {
      label: "الإقامة الاستجمامية",
      icon: FaUmbrellaBeach,
      color: "teal.500",
    },
    {
      label: "مغامرات و الألعاب ",
      icon: FaGamepad,
      color: "orange.500",
    },
    {
      label: "جولات الطعام",
      icon: FaUtensils,
      color: "pink.500",
    },
    {
      label: "سفاري الصحراء",
      icon: FaCompass,
      color: "yellow.500",
    },
    {
      label: "رحلات تاريخية",
      icon: FaHistory,
      color: "cyan.500",
    },
    {
      label: "الشواطئ",
      icon: FaSun,
      color: "red.500",
    },
  ];

  return (
    <Wrap justify="center">
      {tripTypes.map((item, index) => (
        <WrapItem key={index}>
          <HStack
           as={RouterLink}
            to={`/trips`}
           
            cursor="pointer"
            borderRadius={20}
            h={20}
            p={5}
            bg={useColorModeValue("#ebebeb", "#141414")}
            spacing={2}
            transition="transform 0.2s ease-in-out" // Apply transition effect
            _hover={{ transform: "scale(1.03)" }} // Scale up by 10% on hover
          >
            <Text fontSize={20}>{item.label}</Text>
            <Icon color={item.color} fontSize={25} as={item.icon} />
          </HStack>
        </WrapItem>
      ))}
    </Wrap>
  );
};
