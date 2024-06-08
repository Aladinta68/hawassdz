import { SearchIcon } from "@chakra-ui/icons";
import {
  Flex,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

export const Header = () => {
  return (
    <Flex
      mt={{ base: 20, md: 0 }}
      justifyContent={"center"}
      alignItems={"center"}
      w={"100%"}
    >
      <VStack
        w={{ base: "90%", md: "70%", lg: "60%",xl:"50%","2xl":"40%" }}
        h={250}
        align={"center"}
        justify={"center"}
        spacing={10}
      >
        <Heading
          fontSize={{ base: 24, md: 35 }}
          fontWeight={{ base: 400, md: 600 }}
          textAlign={{ base: "center" }}
        >
          احجز افضل التجارب و الفعاليات في الجزائر
        </Heading>
        <InputGroup bg={useColorModeValue("#f3f3f3", "#1d1c1c")} h={14}>
          <InputLeftElement w={"50px"} h={"full"}>
            <IconButton
              cursor={"pointer"}
              bg={useColorModeValue("#000000", "#005ff8")}
              color={"#ffffff"}
              rounded={"full"}
              aria-label="Search database"
              icon={<SearchIcon />}
            />{" "}
          </InputLeftElement>
          <Input
            border={"none"}
            w={"full"}
            h={"full"}
            dir="rtl"
            type="text"
            _placeholder={{ color: useColorModeValue("#000000", "#ffffff") }}
            placeholder=" ابحث عن افضل التجارب و الفعاليات .."
          />
        </InputGroup>
      </VStack>
    </Flex>
  );
};
