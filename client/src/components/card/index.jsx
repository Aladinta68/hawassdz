import {
  Box,
  Card,
  CardBody,
  Flex,
  HStack,
  Heading,
  Image,
  Skeleton,
  SkeletonText,
  Spacer,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Localisation } from "../../assets/icons-jsx/Localisation";
import { FaStar } from "react-icons/fa";
import { DestinationCardBody } from "./Destination/CardBody";
import { HotelCardBody } from "./Hotel/CardBody";
import { RestaurantCardBody } from "./Restaurant/CardBody";
import { TripCardBody } from "./Trip/CardBody";
import { PiSealCheckFill } from "react-icons/pi";
import noImage from "../../assets/card/no-image.jpg";
import { Link as RouterLink } from "react-router-dom";

export const CustomCard = ({ loading, type, data, isHorizontal }) => {
  const breakpoint = useBreakpointValue({ base: "base", md: "md" });
  const renderButton = () => {
    if (breakpoint === "base") {
      return true;
    } else if (isHorizontal) {
      return true;
    }
    return false;
  };
  const RenderBody = () => {
    switch (type) {
      case "destinations":
        return (
          <DestinationCardBody
            data={data}
            renderButton={renderButton}
            isHorizontal={isHorizontal}
          />
        );
      case "hotels":
        return (
          <HotelCardBody
            data={data}
            renderButton={renderButton}
            isHorizontal={isHorizontal}
          />
        );
      case "restaurants":
        return (
          <RestaurantCardBody
            data={data}
            renderButton={renderButton}
            isHorizontal={isHorizontal}
          />
        );
      case "trips":
        return (
          <TripCardBody
            data={data}
            renderButton={renderButton}
            isHorizontal={isHorizontal}
          />
        );
      default:
        return <></>;
    }
  };
  const [isHovered, setisHovered] = useState(false);
  const RenderLink = () => {
    let link;
    if (type === "hotels") {
      link = `/hotel_details/${data.id}`;
    }
    if (type === "restaurants") {
      link = `/restaurant_details/${data.id}`;
    }
    if (type === "destinations") {
      link = `/destination_details/${data.id}`;
    }
    if (type === "trips") {
      link = `/trip_details/${data.id}`;
    }
    return link;
  };
  return (
    <>
      {loading ? (
        <Stack
          direction={isHorizontal ? "row" : "column"}
          spacing={5}
          borderRadius={25}
          h={isHorizontal ? "250px" : "395px"}
          w={isHorizontal ? "full" : "300px"}
          justify={"center"}
          align={"center"}
        >
          <Skeleton borderRadius={25} w={"full"} height="200px" />
          <SkeletonText
            w={"90%"}
            mt="4"
            noOfLines={4}
            spacing="4"
            skeletonHeight="2"
          />
        </Stack>
      ) : (
        <Card
          as={RouterLink}
          to={RenderLink()}
          w={"100%"}
          maxW={!isHorizontal && "350px"}
          onMouseOver={() => setisHovered(true)}
          onMouseOut={() => setisHovered(false)}
          bg={useColorModeValue("#ffffff", "#1d1c1c")}
          borderRadius={25}
          boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px;"}
          position={"relative"}
          cursor={!isHorizontal && "pointer"}
        >
          <CardBody
            transition="opacity 0.5s ease-in-out"
            borderTopRadius={25}
            m={0}
            p={3}
            w={"100%"}
          >
            <Stack
              align={isHorizontal && "center"}
              direction={isHorizontal ? "row" : "column"}
              w={"100%"}
              h={"100%"}
              spacing={0}
            >
              <VStack
                maxH={"180px"}
                w={isHorizontal ? "35%" : "auto"}
                borderRadius={25}
                pos={"relative"}
              >
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
                      {data && data.overallRating ? data.overallRating.toFixed(1) : "0"}
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
                      {data?.wilaya?.name}
                    </Text>
                  </Flex>
                </Flex>
                <Box
                  maxH={"180px"}
                  borderRadius={25}
                  bg={"#00000050"}
                  pos={"absolute"}
                  w={"100%"}
                  h={"100%"}
                ></Box>
                <Image
                  maxH={"180px"}
                  minH={"180px"}
                  h={"100%"}
                  borderRadius={25}
                  w={"100%"}
                  src={
                    data && data.images && data?.images[0]?.url
                      ?  data.images[0]?.url
                      : noImage
                  }
                  alt="card image"
                />
              </VStack>
              <Stack
                w={isHorizontal ? "65%" : "auto"}
                direction={"column"}
                align={"flex-start"}
                px={isHorizontal ? 5 : 2}
                mt={!isHorizontal && "6"}
              >
                <HStack>
                  <Text fontSize={"12"}>Recommended</Text>{" "}
                  <PiSealCheckFill color="#f24864" />
                </HStack>
                <Heading fontSize={18} fontWeight={600} size="md">
                  {data?.name}
                </Heading>
                {RenderBody()}
              </Stack>
            </Stack>
          </CardBody>
        </Card>
      )}
    </>
  );
};
