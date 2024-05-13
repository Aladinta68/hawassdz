import {
  HStack,
  Heading,
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
              {data?.wilaya?.name}
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
      </VStack>
    </VStack>
  );
};
