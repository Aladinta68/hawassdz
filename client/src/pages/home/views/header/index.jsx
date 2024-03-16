import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import header1 from "../../../../assets/home/header2.png";
import header3 from "../../../../assets/home/header3.png";
import { Filterbar } from "../../components/filterbar";
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

const HeaderImages = [header1, header3];
export const Header = () => {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      h={{ base: "100vh", md: "100vh" }}
      w={"100%"}
      position={"relative"}
    >
      <Swiper
        loop={true}
        slidesPerView={1}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{ delay: 5000 }}
        style={{ width: "100%", height: "100%", position: "absolute" }}
      >
        {HeaderImages.map((image, index) => (
          <SwiperSlide key={index}>
            <Image position={"absolute"} w={"100%"} h={"100%"} src={image} />
            <Box
              opacity={"0.4"}
              bg={"#3d3b3b"}
              w={"100%"}
              h={"100%"}
              position={"absolute"}
            ></Box>
          </SwiperSlide>
        ))}
      </Swiper>
      <Container
        zIndex={99}
        mt={{ base: "100px", md: "60px" }}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        maxW={"6xl"}
      >
        <Flex direction={"column"} textAlign={"center"}>
          <Heading
            mb={6}
            fontWeight={600}
            fontSize={{ base: "30", sm: "40", md: "50" }}
            color={"#ffffff"}
          >
            Enjoy in the best way!
          </Heading>
          <Text fontSize={{ base: "15", sm: "18", md: "20" }} color={"#ffffff"}>
            Enjoy our services for your trip anytime
          </Text>
        </Flex>
        <Filterbar />
      </Container>
    </Flex>
  );
};
