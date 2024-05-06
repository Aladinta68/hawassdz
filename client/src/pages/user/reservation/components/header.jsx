import {
  Heading,
  Image,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import headerimg from "../../../../assets/profile/headerOrange.png";

export const MyReservationsHeader = () => {
  return (
    <VStack
      pos={"relative"}
      justify={"center"}
      align={"center"}
      borderRadius={20}
      h={{ base: 200, md: 200 }}
      w={"100%"}
    >
      <Image
        pos={"relative"}
        borderRadius={20}
        src={headerimg}
        w={"full"}
        h={"100%"}
      />{" "}
      <Heading pos={"absolute"} color={"#ffffff"}>
        حجوزاتي
      </Heading>
    </VStack>
  );
};
