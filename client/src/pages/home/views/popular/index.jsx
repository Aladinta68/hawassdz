import {
  Box,
  Flex,
  HStack,
  IconButton,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { CustomCard } from "../../../../components/card/index";
import { IoArrowBack } from "react-icons/io5";
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
export const Popular = ({ type, mydata }) => {
  const slidesPerView = useBreakpointValue({ base: 1,md: 2,lg:3,xl:4 });

  return (
    <Flex
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Flex
        py={5}
        w={"100%"}
        justifyContent={{ base: "center", md: "space-between" }}
        alignItems={"center"}
        direction={{ base: "column", md: "row" }}
      >
        <Text
        
          textAlign={{ base: "center", md: "start" }}
          w={{ base: "100%", md: "30%" }}
          color={"#0C111F"}
          fontSize={22}
          fontWeight={600}
        >
          {mydata.title}
        </Text>
        <Text
          w={{ base: "100%", md: "40%" }}
          fontWeight={500}
          color={"#0c111faa"}
          my={{ base: "8", md: 0 }}
          textAlign={"center"}
        >
          {mydata.description}
        </Text>
        <HStack
          spacing={5}
          justifyContent={"end"}
          w={{ base: "30%", md: "30%" }}
        >
          <IconButton
            display={"flex"}
            fontSize={22}
            color={"##0C111F"}
            borderRadius={"full"}
            border={"4px solid #F5F5F5"}
            variant={"unstyled"}
            icon={<IoArrowBack />}
          />
          <IconButton
            style={{ transform: "rotate(180deg)" }}
            display={"flex"}
            fontSize={22}
            color={"#ffffff"}
            bgColor={"#0C111F"}
            borderRadius={"full"}
            border={"4px solid #F5F5F5"}
            variant={"unstyled"}
            icon={<IoArrowBack />}
          />
        </HStack>
      </Flex>
      <Flex
        w={"100%"}
        alignItems={"center"}
        justify={"center"}
        align={"center"}
      >
        <Swiper
          autoplay={{
            delay: 2500,
          }}
          loop={true}
          slidesPerView={slidesPerView}
        >
          {mydata.carddata.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Box py={2} w={{ base: "100%", md: "95%" }}>
                <CustomCard type={type} data={item} />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </Flex>
  );
};
