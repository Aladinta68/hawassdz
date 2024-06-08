import {
  Text,
  Icon,
  Grid,
  VStack,
  GridItem,
  HStack,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { IoMdFemale, IoMdMale } from "react-icons/io";
import { IoMaleFemaleOutline } from "react-icons/io5";
import { IoCalendarNumber } from "react-icons/io5";
import { MdFamilyRestroom, MdGroups } from "react-icons/md";
import { BsPersonWalking } from "react-icons/bs";
import { FaCar } from "react-icons/fa";
import { FaBus } from "react-icons/fa";
import { IoMdTrain } from "react-icons/io";
import { IoIosBicycle } from "react-icons/io";
import { PiMotorcycleFill } from "react-icons/pi";
import { IoAirplane } from "react-icons/io5";
import { FaHelicopter } from "react-icons/fa6";
import { FaTruckMoving } from "react-icons/fa";
import { FaTrainTram } from "react-icons/fa6";
import { FaCableCar } from "react-icons/fa6";
import { FaSailboat } from "react-icons/fa6";
import { FaShip } from "react-icons/fa";
import { GiCanoe } from "react-icons/gi";
import { FaHorse } from "react-icons/fa";
import { GiCamel } from "react-icons/gi";
import { MdSubway } from "react-icons/md";

export const DetailsTrip = ({ data }) => {
  const renderTransportIcon = (transportType) => {
    switch (transportType) {
      case "others":
        break;
      case "walking":
        return BsPersonWalking;
        break;
      case "car":
        return FaCar;
        break;
      case "bus":
        return FaBus;
        break;
      case "train":
        return IoMdTrain;
        break;
      case "bicycle":
        return IoIosBicycle;
        break;
      case "motorcycle":
        return PiMotorcycleFill;
        break;
      case "airplane":
        return IoAirplane;
        break;
      case "helicopter":
        return FaHelicopter;
        break;
      case "truck":
        return FaTruckMoving;
        break;
      case "tram":
        return FaTrainTram;
        break;
      case "cableCar":
        return FaCableCar;
        break;
      case "subway":
        return MdSubway;
        break;
      case "boat":
        return FaSailboat;
        break;
      case "ship":
        return FaShip;
        break;
      case "canoe":
        return GiCanoe;
        break;
      case "horse":
        return FaHorse;
        break;
      case "camel":
        return GiCamel;
        break;
      default:
        break;
    }
  };

  const tripsFeatures = [
    { label: data?.longitude && `${data?.longitude}km`, icon: "" },
    { label: data?.dateDepart, icon: IoCalendarNumber },
    { label: data?.dateArrive, icon: IoCalendarNumber },
    { label: data?.numberPerson, icon: MdGroups },
    {
      label:
        data?.gender === "All"
          ? "الكل"
          : data?.gender === "Female"
          ? "أنثى"
          : "ذكر",
      icon:
        data?.gender === "All"
          ? IoMaleFemaleOutline
          : data?.gender === "Male"
          ? IoMdMale
          : IoMdFemale,
    },
    {
      label: data?.ageRange === "all" && "كل الفئات العمرية",
      icon: MdFamilyRestroom,
    },
    {
      label: data?.TransportType,
      icon: renderTransportIcon(data?.transportType),
    },
  ];

  return (
    <VStack spacing={10} align={"flex-start"}>
      <Grid
        templateRows="repeat(4, 1fr)"
        templateColumns={{ md: "repeat(1, 1fr)" }}
        columnGap={10}
        rowGap={6}
      >
        {tripsFeatures.map(
          (item, index) =>
            item?.label?.trim() && (
              <GridItem key={index}>
                <UnorderedList>
                  <ListItem>
                    {" "}
                    <HStack fontSize={18}>
                      {item?.icon && <Icon color={"#db880c"} as={item.icon} />}{" "}
                      <Text>{item.label}</Text>
                    </HStack>
                  </ListItem>
                </UnorderedList>
              </GridItem>
            )
        )}
      </Grid>
    </VStack>
  );
};
