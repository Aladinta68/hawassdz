import { Box, Button, HStack, Image, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import trip1 from "../../../../../../../assets/image/trips/data/trip1.png";
import trip2 from "../../../../../../../assets/image/trips/data/trip2.png";
import trip3 from "../../../../../../../assets/image/trips/data/trip3.png";

export const Images = ({ HandleTripLink }) => {
  return (
    <HStack gap={1} my={5} w={"100%"} h={"450px"}>
      <Stack
        borderLeftRadius={20}
        _hover={{
          opacity: 0.9,
        }}
        transition={"ease-in-out 0.3s"}
        cursor={"pointer"}
        w={"60%"}
        h={"100%"}
        bgPos={"center"}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
        bgImg={trip1}
      ></Stack>
      <VStack gap={1} w={"40%"} h={"100%"}>
        <Stack
          borderTopRightRadius={20}
          _hover={{
            opacity: 0.9,
          }}
          transition={"ease-in-out 0.3s"}
          cursor={"pointer"}
          h={"50%"}
          w={"100%"}
          bgPos={"center"}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
          bgImg={trip2}
        ></Stack>
        <Stack
          align={"flex-end"}
          justify={"flex-end"}
          pos={"relative"}
          cursor={"pointer"}
          h={"50%"}
          w={"100%"}
        >
          <Box
            borderBottomRightRadius={20}
            bgPos={"center"}
            bgSize={"cover"}
            bgRepeat={"no-repeat"}
            bgImg={trip3}
            _hover={{
              opacity: 0.9,
            }}
            transition={"ease-in-out 0.3s"}
            w={"100%"}
            h={"100%"}
          ></Box>
          <Button
            _hover={{
              backgroundColor: "#2d2d2d",
            }}
            transition={"ease-in-out 0.3s"}
            m={2}
            pos={"absolute"}
            w={"min-content"}
            fontWeight={400}
            px={5}
            borderRadius={25}
            color={"#ffffff"}
            bg={"black"}
            variant={"unstyled"}
            onClick={() => HandleTripLink("tripgallery")}
          >
            See all photos
          </Button>
        </Stack>
      </VStack>
    </HStack>
  );
};
