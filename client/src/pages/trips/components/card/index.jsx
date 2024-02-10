import {
  Button,
  Card,
  CardBody,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Link,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Rating } from "../../../../components/rating";
import { HiMiniUserGroup } from "react-icons/hi2";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaBusSimple } from "react-icons/fa6";
import { Localisation } from "./../../../../assets/icons-jsx/Localisation";
import { GiSandsOfTime } from "react-icons/gi";
import { PiGenderIntersexBold } from "react-icons/pi";
import { Link as RouterLink } from "react-router-dom";

export const TripCard = ({ data }) => {
  return (
    <Card
      borderRadius={20}
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      border={"none"}
      p={2}
      boxShadow={" rgba(0, 0, 0, 0.04) 0px 3px 5px"}
    >
      <Image
        borderRadius={20}
        maxW={{ base: "100%", sm: "200px" }}
        src={data.image}
        alt="Trip"
      />
      <CardBody p={2}>
        <VStack align={"flex-start"} w={"100%"}>
          <HStack w={"100%"} justify={"space-between"}>
            <Heading size="md">{data.title}</Heading>
            <Rating initialRating={data.rating} isReadOnly={true} />
          </HStack>
          <Text w={"100%"} maxW={"100%"}>
            {data.description}
          </Text>
        </VStack>
        <HStack pt={5} h={"min-content"} align={"flex-end"}>
          <HStack align={"flex-end"} h={"100%"}>
            <VStack align={"flex-start"}>
              <HStack>
                <Localisation color={"#FA8B02"} width={20} height={20} />
                <Text>{data.destination}</Text>
              </HStack>
              <HStack>
                <BsFillCalendarDateFill color={"#FA8B02"} fontSize={16} />
                <Text>{data.date}</Text>
              </HStack>
              <HStack>
                <GiSandsOfTime color={"#FA8B02"} fontSize={18} />
                <Text>{data.duration}</Text>
              </HStack>
            </VStack>
            <Spacer w={5} />
            <VStack align={"flex-start"}>
              <HStack>
                <HiMiniUserGroup color={"#FA8B02"} fontSize={18} />
                <Text>{data.personNumber}</Text>
              </HStack>
              <HStack>
                <PiGenderIntersexBold color={"#FA8B02"} fontSize={18} />
                <Text>
                  {data.gender === "All" ? "Male/Female" : data.gender}{" "}
                </Text>
              </HStack>
              <HStack>
                <FaBusSimple color={"#FA8B02"} fontSize={16} />
                <Text>{data.transport}</Text>
              </HStack>
            </VStack>{" "}
          </HStack>
          <Spacer />
          <Flex
            direction={"column"}
            align={"flex-end"}
            justify={"space-between"}
          >
            <HStack pb={5}>
              <Text>from</Text>
              <Text>{data.price}DA</Text>
            </HStack>
            <Link
              _hover={{ opacity: 0.8 }}
              transition={"ease-in-out 0.3s"}
              color={"#ffffff"}
              bg={"#8482FF"}
              to={"/tripdetails"}
              borderRadius={25}
              as={RouterLink}
              px={4}
              py={2}
              fontWeight={400}
            >
              View
            </Link>
          </Flex>
        </HStack>
      </CardBody>
    </Card>
  );
};
