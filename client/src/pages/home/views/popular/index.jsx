import {
  Box,
  Flex,
  IconButton,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { CustomCard } from "../../components/card";
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

const cards = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
];

export const Popular = ({ title, description }) => {
  const slidesPerView = useBreakpointValue({ base: 1, md: 3 });

  return (
    <Flex direction={"column"} justifyContent={"center"} alignItems={"center"}>
      <Flex
        py={5}
        w={"100%"}
        justifyContent={{ base: "center", md: "space-between" }}
        alignItems={"center"}
        direction={{ base: "column", md: "row" }}
      >
        <Text
          textAlign={{ base: "center", md: "start" }}
          w={{ base: "100%", md: "15%" }}
          color={"#0C111F"}
          fontSize={22}
          fontWeight={600}
        >
          {title}
        </Text>
        <Text
          w={{ base: "100%", md: "40%" }}
          fontWeight={500}
          color={"#0c111faa"}
          my={{ base: "8", md: 0 }}
          textAlign={"center"}
        >
          {description}
        </Text>
        <Flex
          justifyContent={"space-between"}
          w={{ base: "30%", md: "8%" }}
          mb={5}
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
        </Flex>
      </Flex>
      <Flex w={"100%"} justify={"center"} align={"center"}>
        <Swiper
          autoplay={{
            delay: 2500,
          }}
          loop={true}
          slidesPerView={slidesPerView}
        >
          {cards.map((card, index) => (
            <SwiperSlide
              key={index}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Box w={{ base: "", md: "95%" }}>
                <CustomCard />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </Flex>
  );
};
