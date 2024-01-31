import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Localisation } from "../../../../assets/icons-jsx/Localisation";
import { FaStar } from "react-icons/fa";

export const CustomCard = ({ type, data }) => {
  return (
    <Card boxShadow={"none"} bg={"#F7F7F7"} borderRadius={"30"} maxW="sm">
      <CardBody bg={"#ffffff"} borderRadius={30} m={0} p={0} w={"100%"}>
        <Flex
          justifyContent={"space-between"}
          p={3}
          m={0}
          position={"absolute"}
          w={"100%"}
          direction={"row"}
        >
          <Flex
            backdropBlur={10}
            borderRadius={"25"}
            bg={"#5f616686"}
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
            backdropBlur={10}
            borderRadius={"25"}
            bg={"#5f616686"}
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

        <Image
          borderTopRadius={25}
          src={data.image}
          alt="Green double couch with wooden legs"
        />
        <Stack pb={3} px={3} mt="6" spacing="3">
          <Heading size="md">{data.title}</Heading>
          <Text color={"#0c111f97"}>{data.description} </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Flex
          pr={3}
          align={"center"}
          w={"100%"}
          direction={"row"}
          justify={"space-between"}
        >
          {type === "destinations" && (
            <Flex direction={"row"} align={"center"} justify={"center"}>
              <Text fontSize={20} fontWeight={600}>
                {data.numberTrip}
              </Text>
              <Text color={"#6f6e6e"} fontWeight={400} ml={1}>
                Trip
              </Text>
            </Flex>
          )}
          {type === "hotels" && (
            <Flex direction={"column"}>
              <Text color={"#6f6e6e"}>Price</Text>
              <Text fontWeight={600}>
                from $ {data.price}
                <Text as={"span"} color={"#6f6e6e"}>
                  /night
                </Text>
              </Text>
            </Flex>
          )}
          {type === "restaurants" && <></>}
          <Text></Text>
          <Button
            px={3}
            borderRadius={25}
            color={"#ffffff"}
            fontWeight={400}
            variant="unstyled"
            bg={"#8482FF"}
            boxShadow={"20px 10px 15px #8482ff73"}
          >
            {" "}
            View
          </Button>
        </Flex>
      </CardFooter>
    </Card>
  );
};
