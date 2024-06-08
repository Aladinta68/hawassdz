import { Grid, GridItem, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { FaCheck } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa6";
import { MdCoffee, MdGroups } from "react-icons/md";
import { FaSwimmer } from "react-icons/fa";
import { IoBarbellOutline } from "react-icons/io5";
import { MdLocalBar } from "react-icons/md";
import { RiParkingBoxFill } from "react-icons/ri";
import { MdLocalTaxi } from "react-icons/md";
import { PiPark } from "react-icons/pi";
import { MdOutlineSportsTennis } from "react-icons/md";
import { FaUmbrellaBeach } from "react-icons/fa";
import { GiBowlingStrike } from "react-icons/gi";
import { GiScooter } from "react-icons/gi";
import { MdLocalAirport } from "react-icons/md";
import { RiTakeawayFill } from "react-icons/ri";
import { MdTableRestaurant } from "react-icons/md";
import { MdDeliveryDining } from "react-icons/md";
import { FaWheelchair } from "react-icons/fa";

export const DetailsEquipement = ({ data }) => {
  const handleIcon = (label) => {
    switch (label) {
      case "مواقف السيارات متاحة":
        return RiParkingBoxFill;
        break;
      case "التيك أواي":
        return RiTakeawayFill;
        break;
      case "الجلوس":
        return MdTableRestaurant;
        break;
      case "التوصيل":
        return MdDeliveryDining;
        break;
      case "مدخل للكراسي المتحركة":
        return FaWheelchair;
        break;
      case "موقف سيارات مجاني":
        return RiParkingBoxFill;
        break;
      case "مركز لياقة بدنية/صالة ألعاب رياضية":
        return IoBarbellOutline;
        break;
      case "شامل وجبة الإفطار":
        return MdCoffee;
        break;
      case "خدمة سيارات الأجرة":
        return MdLocalTaxi;
        break;
      case "غرف الإجتماعات":
        return FaCheck;
        break;
      case "إنترنت عالي السرعة مجاني (Wi-Fi)":
        return FaWifi;
        break;
      case "بار/صالة":
        return MdLocalBar;
        break;
      case "أنشطة للأطفال (الأطفال/للعائلات)":
        return PiPark;
        break;
      case "غرفة الاستقبال":
        return FaCheck;
        break;
      case "ملعب تنس":
        return MdOutlineSportsTennis;
        break;
      case "شاطئ":
        return FaUmbrellaBeach;
        break;
      case "البولينج خارج الموقع":
        return GiBowlingStrike;
        break;
      case "الدراجات المتاحة":
        return GiScooter;
        break;
      case "حمام سباحة":
        return FaSwimmer;
        break;
      case "خدمة نقل المطار":
        return MdLocalAirport;
        break;
      case "قاعات المؤتمرات":
        return MdGroups;
        break;
      default:
        return FaCheck;
        break;
    }
  };
  return (
    <VStack spacing={10} align={"flex-start"}>
      <Text fontWeight={500} fontSize={25}>
        المعدات
      </Text>
      <Grid
        templateRows="repeat(4, 1fr)"
        templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2, 1fr)" }}
        columnGap={10}
        rowGap={6}
      >
        {data.map((oneData, index) => (
          <GridItem key={index}>
            <HStack>
              <Icon as={handleIcon(oneData.item)} />
              <Text>{oneData.item}</Text>
            </HStack>
          </GridItem>
        ))}
      </Grid>
    </VStack>
  );
};
