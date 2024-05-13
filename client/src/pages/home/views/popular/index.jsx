import {
  Flex,
  Skeleton,
  SkeletonText,
  Spacer,
  Stack,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { CustomCard } from "../../../../components/card/index";
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
import { Header } from "./components/Header";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
export const Popular = ({ loading, type, mydata }) => {
  const slidesPerView = useBreakpointValue({ base: 1, md: 2, lg: 3, xl: 4 });
  const swiperRef = React.useRef(null);

  return (
    <Flex direction={"column"} justifyContent={"center"} alignItems={"center"}>
      {mydata && mydata.length > 0 && (
        <Header swiperRef={swiperRef} type={type} />
      )}
      <Flex
        w={"100%"}
        alignItems={"center"}
        justify={"center"}
        align={"center"}
      >
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          autoplay={{
            delay: 2500,
          }}
          loop={true}
          slidesPerView={slidesPerView}
        >
          {mydata &&
            mydata.length > 0 &&
            mydata.map((item, index) => (
              <SwiperSlide
                key={index}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Stack
                  align={"center"}
                  justify={"center"}
                  px={2}
                  py={20}
                  w={{ base: "95%", md: "95%" }}
                >
                  <CustomCard loading={loading} type={type} data={item} />
                </Stack>
              </SwiperSlide>
            ))}
        </Swiper>
      </Flex>
    </Flex>
  );
};
