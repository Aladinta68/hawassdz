import {
  HStack,
  Heading,
  Icon,
  IconButton,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { TbShare2 } from "react-icons/tb";
import { PiSealCheckFill } from "react-icons/pi";
import { Rating } from "./../../../../components/rating/index";
import { FaFacebook, FaLaptop, FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
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
} from "react-icons/fa";
export const DetailsHeader = ({ type, data }) => {
  const handleShareButtonClick = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "HawassDZ",
          url: window.location.href,
        })
        .then(() => {
          console.log("URL shared successfully");
        })
        .catch((error) => {
          console.error("Error sharing URL:", error);
        });
    } else {
      console.warn("Web Share API not supported");
    }
  };
  const renderTypeTripIcon = (label) => {
    switch (label) {
      case "جولات ثقافية":
        return {
          icon: FaGlobe,
          color: "blue.500",
        };
      case "رحلات المغامرة والتسلق":
        return {
          icon: FaMountain,
          color: "green.500",
        };
      case "تجارب السينما":
        return {
          icon: FaFilm,
          color: "purple.500",
        };
      case "الإقامة الاستجمامية":
        return {
          icon: FaUmbrellaBeach,
          color: "teal.500",
        };
      case "مغامرات و الألعاب":
        return {
          icon: FaGamepad,
          color: "orange.500",
        };
      case "جولات الطعام":
        return {
          icon: FaUtensils,
          color: "pink.500",
        };
      case "سفاري الصحراء":
        return {
          icon: FaCompass,
          color: "yellow.500",
        };
      case "رحلات تاريخية":
        return {
          icon: FaHistory,
          color: "cyan.500",
        };
      case "الشواطئ":
        return {
          icon: FaSun,
          color: "red.500",
        };
      default:
        return {
          icon: null,
          color: "gray.500",
        };
    }
  };
  const { icon, color } = renderTypeTripIcon(data?.type);
  return (
    <VStack align={"flex-start"} w={"full"}>
      <HStack pb={2} w={"100%"}>
        <HStack spacing={10}>
          <Heading>{data?.name}</Heading>
        </HStack>
        <Spacer />
        <HStack>
          <IconButton
            cursor={"pointer"}
            h={7}
            variant={"unstyled"}
            as={TbShare2}
            onClick={handleShareButtonClick}
          />
        </HStack>
      </HStack>
      <HStack align={"center"}>
        <Rating isReadOnly={true} initialRating={data?.overallRating} />
        <Text>({data?.ratings.length} review)</Text>
        <Text>Recommended </Text>
        <PiSealCheckFill size={17} color="#f24864" />
      </HStack>
      <VStack align={"flex-start"} spacing={4}>
        <Stack
          justify={"center"}
          align={"flex-start"}
          flexDir={{ base: "column", md: "row" }}
          pt={5}
        >
          <HStack>
            <FaLocationDot />
            <Text fontSize={20} fontWeight={400}>
              {type === "trips" ? data?.destination : data?.wilaya?.name}
            </Text>
          </HStack>
          {data?.address && (
            <Text fontSize={20} fontWeight={400}>
              , {data?.address}
            </Text>
          )}
        </Stack>
        {data?.contactInfo?.facebook && (
          <HStack
            _hover={{ textDecor: "underline" }}
            as="a"
            href={`https://www.facebook.com/${data?.contactInfo?.facebook}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
            <Text dir="ltr">{data?.contactInfo?.facebook}</Text>
          </HStack>
        )}
        {data?.contactInfo?.website && (
          <HStack
            _hover={{ textDecor: "underline" }}
            as="a"
            href={data?.contactInfo?.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLaptop />
            <Text dir="ltr">{data?.contactInfo?.website}</Text>
          </HStack>
        )}
        {data?.contactInfo?.phone && (
          <HStack
            _hover={{ textDecor: "underline" }}
            as="a"
            href={`tel:${data?.contactInfo?.phone}`}
          >
            <FaPhone />
            <Text dir="ltr">{data?.contactInfo?.phone}</Text>
          </HStack>
        )}
        {data?.contactInfo?.email && (
          <HStack
            _hover={{ textDecor: "underline" }}
            as="a"
            href={`mailto:${data?.contactInfo?.email}`}
          >
            <MdEmail />
            <Text>{data?.contactInfo?.email}</Text>
          </HStack>
        )}
        {type === "trips" && (
          <HStack>
            <Icon color={color} as={icon} />
            <Text>{data?.type}</Text>
          </HStack>
        )}
        {type === "trips" && (
          <HStack pt={10}>
            <Text ml={3}>السعر</Text>
            <Text color={'#ff8c00'} fontSize={25}>{data?.price} DZD</Text>
          </HStack>
        )}
      </VStack>
    </VStack>
  );
};
