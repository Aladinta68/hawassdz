import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  IconButton,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Localisation } from "../../assets/icons-jsx/Localisation";
import { FaStar } from "react-icons/fa";
import { DestinationCardBody } from "./Destination/CardBody";
import { HotelCardBody } from "./Hotel/CardBody";
import { RestaurantCardBody } from "./Restaurant/CardBody";
import { TripCardBody } from "./Trip/CardBody";
import { MdRemoveRedEye } from "react-icons/md";

export const CustomCard = ({ type, data }) => {
  const RenderBody = () => {
    switch (type) {
      case "destinations":
        return <DestinationCardBody />;
      case "hotels":
        return <HotelCardBody />;
      case "restaurants":
        return <RestaurantCardBody />;
      case "trips":
        return <TripCardBody />;
      default:
        return <></>;
    }
  };
  const [isHovered, setisHovered] = useState(false);

  return (
    <Card
      onMouseOver={() => setisHovered(true)}
      onMouseOut={() => setisHovered(false)}
      bg={"#ffffff"}
      borderRadius={25}
      boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px;"}
      position={"relative"}
      cursor={"pointer"}
    >
      {isHovered && (
        <Stack
          pos={"absolute"}
          w={"100%"}
          h={"100%"}
          align={"center"}
          justify={"center"}
          zIndex={10}
        >
          <IconButton
            p={2}
            boxShadow={"rgba(0, 0, 0, 0.56) 0px 22px 70px 10px;"}
            cursor={"pointer"}
            borderRadius={"full"}
            as={MdRemoveRedEye}
          />
        </Stack>
      )}

      <CardBody
        transition="opacity 0.5s ease-in-out"
        opacity={isHovered ? 0.3 : 1}
        borderTopRadius={25}
        m={0}
        p={3}
        w={"100%"}
      >
        <VStack borderRadius={25} pos={"relative"}>
          <Flex
            borderRadius={25}
            justifyContent={"space-between"}
            p={3}
            m={0}
            position={"absolute"}
            w={"100%"}
            direction={"row"}
          >
            <Flex
              borderRadius={25}
              zIndex={1}
              backdropBlur={10}
              bg={"#5f6166c9"}
              py={1}
              px={2}
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Flex bg={"#e6bc15"} borderRadius={"full"} p={1}>
                <FaStar color="#ffffff" />
              </Flex>
              <Text color={"#ffffff"} mx={2}>
                {data.rate}
              </Text>
            </Flex>
            <Flex
              zIndex={1}
              backdropBlur={10}
              borderRadius={25}
              bg={"#5f6166c9"}
              py={1}
              px={2}
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Localisation color={"#ffffff"} width={20} height={20} />
              <Text color={"#ffffff"} mx={2}>
                {data.location}
              </Text>
            </Flex>
          </Flex>
          <Box
            borderRadius={25}
            bg={"#00000050"}
            pos={"absolute"}
            w={"100%"}
            h={"100%"}
          ></Box>
          <Image
            h={"180px"}
            borderRadius={25}
            w={"100%"}
            src={data.image}
            alt="Green double couch with wooden legs"
          />
        </VStack>
        <Stack mt="6" spacing="3">
          <Heading px={2} fontSize={18} fontWeight={600} size="md">
            {data.title}
          </Heading>
          {RenderBody()}
        </Stack>
      </CardBody>
    </Card>
  );
};
