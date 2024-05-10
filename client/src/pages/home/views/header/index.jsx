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
import SwiperCore from "swiper";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export const Header = () => {
  return (
    <Flex
      mt={{ base: 20, md: 0 }}
      justifyContent={"center"}
      alignItems={"center"}
      w={"100%"}
    >
      <VStack
        w={{ base: "90%", md: "40%",lg:"50%" }}
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
        <InputGroup h={14}>
          <InputLeftElement w={"10%"} h={"full"}>
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
            bg={useColorModeValue("#f3f3f3", "#1d1c1c")}
            px={16}
            border={"none"}
            borderRadius={35}
            w={"full"}
            h={"full"}
            dir="rtl"
            type="tel"
            _placeholder={{ color: useColorModeValue("#000000", "#ffffff") }}
            placeholder=" ابحث عن افضل التجارب و الفعاليات .."
          />
        </InputGroup>
      </VStack>
    </Flex>
  );
};
