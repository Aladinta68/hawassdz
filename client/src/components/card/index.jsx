import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Localisation } from "../../assets/icons-jsx/Localisation";
import { FaStar } from "react-icons/fa";
import { DestinationCardFooter } from "./Destination/CardFooter";
import { DestinationCardBody } from "./Destination/CardBody";
import { HotelCardFooter } from "./Hotel/CardFooter";
import { HotelCardBody } from "./Hotel/CardBody";
import { RestaurantCardFooter } from "./Restaurant/CardFooter";
import { RestaurantCardBody } from "./Restaurant/CardBody";
import { TripCardFooter } from "./Trip/CardFooter";
import { TripCardBody } from "./Trip/CardBody";

export const CustomCard = ({ type, data }) => {
  const RenderBody = () => {
    switch (type) {
      case "destinations":
        return <DestinationCardBody />;
      case "Hotels":
        return <HotelCardBody />;
      case "restaurants":
        return <RestaurantCardBody />;
      case "trips":
        return <TripCardBody />;
      default:
        return <></>;
    }
  };
  const RenderFooter = () => {
    switch (type) {
      case "destinations":
        return <DestinationCardFooter />;
      case "Hotels":
        return <HotelCardFooter />;
      case "restaurants":
        return <RestaurantCardFooter />;
      case "trips":
        return <TripCardFooter />;
      default:
        return <></>;
    }
  };
  const [isHovered, setisHovered] = useState(false);
  return (
    <Card
      onMouseOver={() => setisHovered(true)}
      onMouseOut={() => setisHovered(false)}
      boxShadow={"sm"}
      bg={"#ffffff"}
      borderRadius={"0"}
    >
      <CardBody borderRadius={0} m={0} p={3} w={"100%"}>
        <VStack pos={"relative"}>
          <Flex
            justifyContent={"space-between"}
            p={3}
            m={0}
            position={"absolute"}
            w={"100%"}
            direction={"row"}
          >
            <Flex
              zIndex={1}
              backdropBlur={10}
              borderRadius={"25"}
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
              borderRadius={"25"}
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
          <Box bg={"#00000050"} pos={"absolute"} w={"100%"} h={"100%"}></Box>
          <Image
            w={"100%"}
            src={data.image}
            alt="Green double couch with wooden legs"
          />
        </VStack>
        <Stack pb={3} mt="6" spacing="3">
          <Heading fontSize={18} fontWeight={500} size="md">
            {data.title}
          </Heading>
          {RenderBody}
        </Stack>
      </CardBody>
      <Divider color={"#dedddd"} />
      <CardFooter  >
        {RenderFooter}
      </CardFooter>
    </Card>
  );
};
