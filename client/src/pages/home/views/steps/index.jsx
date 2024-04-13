import { Flex, Image, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { BsCalendar2Check } from "react-icons/bs";
import { GiTreasureMap } from "react-icons/gi";
import { MdDirectionsWalk } from "react-icons/md";
import steps from "../../../../assets/image/steps.png";
export const Steps = () => {
  return (
    <Flex
      w={"100%"}
      justify={"center"}
      align={"center"}
      direction={{ md: "row-reverse" }}
    >
      <Flex
        w={{ base: "100%", md: "50%" }}
        direction={"column"}
        justify={"center"}
        align={{ base: "center", md: "start" }}
      >
        <Text fontWeight={600} color={"#DF6951"}>
          Fast & Easy
        </Text>
        <Text
          textAlign={"center"}
          fontSize={30}
          fontWeight={600}
          color={useColorModeValue("#181E4B", "#485cf9")}
          mb={5}
        >
          احصل على حجوزات منتجعك المفضل{" "}
        </Text>
        <Flex align={"center"} direction={"row"}>
          <Flex
            ml={5}
            h={"50px"}
            w={{ base: "80px", md: "60px" }}
            borderRadius={10}
            justify={"center"}
            align={"center"}
            bg={"#F0BB1F"}
          >
            <GiTreasureMap fontSize={25} color="#ffffff" />
          </Flex>{" "}
          <Flex direction={"column"} align={"flex-start"} color={useColorModeValue("#5E6282","#ffffff")}>
            <Text fontWeight={600}> اختر مغامرتك</Text>
            <Text>
              اكتشف عالم الإمكانيات! اختر من مجموعة متنوعة من الفعاليات والوجهات
              والمغامرات المصممة وفقًا لاهتماماتك.{" "}
            </Text>
          </Flex>
        </Flex>
        <Flex align={"center"} my={5} direction={"row"}>
          <Flex
            ml={5}
            h={"50px"}
            w={{ base: "80px", md: "60px" }}
            borderRadius={10}
            justify={"center"}
            align={"center"}
            bg={"#F15A2B"}
          >
            <BsCalendar2Check fontSize={25} color="#ffffff" />
          </Flex>
          <Flex direction={"column"} align={"flex-start"} color={useColorModeValue("#5E6282","#ffffff")}>
            <Text fontWeight={600}>تحقق من التوفر</Text>
            <Text>
              أكد تواريخك وتوافرك بسهولة. يتيح لك نظام الحجز الذكي لدينا التحقق
              بسلاسة من التواريخ المتاحة و الإقامة المفضلة  .
            </Text>
          </Flex>
        </Flex>
        <Flex align={"center"} direction={"row"}>
          <Flex
            ml={5}
            h={"50px"}
            w={{ base: "80px", md: "60px" }}
            borderRadius={10}
            justify={"center"}
            align={"center"}
            bg={"#006380"}
          >
            <MdDirectionsWalk fontSize={25} color="#ffffff" />
          </Flex>{" "}
          <Flex direction={"column"} align={"flex-start"} color={useColorModeValue("#5E6282","#ffffff")}>
            <Text fontWeight={600}>لنذهب</Text>
            <Text>
              حان الوقت للانطلاق في رحلتك! بعد حجز كل شيء وتأكيد كل التفاصيل، كل
              ما تبقى هو تحضير حقائبك والانطلاق في الطريق.
            </Text>
          </Flex>
        </Flex>
      </Flex>{" "}
      <Flex w={{ base: "0%", md: "50%" }} justify={"center"} align={"center"}>
        <Image w={"80%"} src={steps} />
      </Flex>
    </Flex>
  );
};
