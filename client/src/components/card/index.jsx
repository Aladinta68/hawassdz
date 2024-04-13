import {
  Box,
  Card,
  CardBody,
  Flex,
  HStack,
  Heading,
  IconButton,
  Image,
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
import { MdRemoveRedEye } from "react-icons/md";
import { Rating } from "../rating";
import { PiSealCheckFill } from "react-icons/pi";

export const CustomCard = ({ type, data, isHorizontal }) => {
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
            renderButton={renderButton}
            isHorizontal={isHorizontal}
          />
        );
      case "hotels":
        return (
          <HotelCardBody
            renderButton={renderButton}
            isHorizontal={isHorizontal}
          />
        );
      case "restaurants":
        return (
          <RestaurantCardBody
            renderButton={renderButton}
            isHorizontal={isHorizontal}
          />
        );
      case "trips":
        return (
          <TripCardBody
            renderButton={renderButton}
            isHorizontal={isHorizontal}
          />
        );
      default:
        return <></>;
    }
  };
  const [isHovered, setisHovered] = useState(false);
  const renderStars = () => {
    switch (type) {
      case "hotels":
        return <Rating initialRating={4} isReadOnly={true} />;
      case "restaurants":
        return <Rating initialRating={3} isReadOnly={true} />;
      default:
        return <></>;
    }
  };

  return (
    <Card
      w={"100%"}
      maxW={!isHorizontal && "350px"}
      onMouseOver={() => setisHovered(true)}
      onMouseOut={() => setisHovered(false)}
      bg={useColorModeValue("#ffffff","#1d1c1c")}
      borderRadius={25}
      boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px;"}
      position={"relative"}
      cursor={!isHorizontal && "pointer"}
    >
      {!renderButton() && (
        <>
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
                cursor={!isHorizontal && "pointer"}
                borderRadius={"full"}
                as={MdRemoveRedEye}
              />
            </Stack>
          )}
        </>
      )}
      <CardBody
        transition="opacity 0.5s ease-in-out"
        opacity={!renderButton() && isHovered ? 0.3 : 1}
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
              maxH={"180px"}
              borderRadius={25}
              bg={"#00000050"}
              pos={"absolute"}
              w={"100%"}
              h={"100%"}
            ></Box>
            <Image
              maxH={"180px"}
              h={"100%"}
              borderRadius={25}
              w={"100%"}
              src={data.image}
              alt="Green double couch with wooden legs"
            />
          </VStack>
          <Flex
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
            <HStack pb={1} w={"100%"}>
              <Heading fontSize={18} fontWeight={600} size="md">
                {data.title}
              </Heading>
              <Spacer />
              {renderStars()}
            </HStack>
            {RenderBody()}
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
};
