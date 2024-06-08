import {
  Button,
  HStack,
  Icon,
  List,
  ListItem,
  Spacer,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { IoMaleFemaleOutline } from "react-icons/io5";
import { MdTimer } from "react-icons/md";
import { IoCalendarNumber } from "react-icons/io5";
import { BsPersonRaisedHand } from "react-icons/bs";
import { MdEventAvailable } from "react-icons/md";
import { HiMiniUserGroup } from "react-icons/hi2";
import { MdFamilyRestroom } from "react-icons/md";
import { ViewIcon } from "@chakra-ui/icons";
import { CgUnavailable } from "react-icons/cg";
import { IoMdMale } from "react-icons/io";
import { IoMdFemale } from "react-icons/io";
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

export const TripCardBody = ({ data, renderButton, isHorizontal }) => {
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
  const features = [
    { icon: BsPersonRaisedHand },
    {
      icon:
        data?.gender === "All"
          ? IoMaleFemaleOutline
          : data?.gender === "Male"
          ? IoMdMale
          : IoMdFemale,
    },
    { icon: MdFamilyRestroom },
    { icon: renderTransportIcon(data?.transportType) },
  ];
  const getDifferentTime = (depart, retur) => {
    const departTime = new Date(depart);
    const returnTime = new Date(retur);
    const differentTime = returnTime - departTime;
    const dayDifference = differentTime / (1000 * 60 * 60 * 24);
    return dayDifference;
  };
  return (
    <VStack align={"flex-start"} w={"100%"}>
      <Text fontWeight={"600"} fontSize={13} w={"100%"}>
        {data?.type}
      </Text>
      <List fontSize={14}>
        <ListItem>
          <HStack>
            <Icon as={IoCalendarNumber} />
            <Text>{data?.dateDepart}</Text>
          </HStack>
        </ListItem>
        <ListItem>
          <HStack>
            <Icon as={MdTimer} />
            <Text>
              {getDifferentTime(data?.dateDepart, data?.dateArrive)}
              <Text mr={2} as={"span"}>
                {getDifferentTime(data?.dateDepart, data?.dateArrive) === 1 ||
                getDifferentTime(data?.dateDepart, data?.dateArrive) > 10
                  ? "يوم"
                  : "أيام"}
              </Text>
            </Text>{" "}
          </HStack>
        </ListItem>
        <ListItem>
          <HStack>
            <Icon as={HiMiniUserGroup} />
            <Text>{data?.numberPerson}</Text>{" "}
          </HStack>
        </ListItem>
      </List>
      <HStack
        py={2}
        justifyContent={!isHorizontal && "space-between"}
        w={"100%"}
      >
        {features.map((feature, index) => (
          <HStack
            px={4}
            py={1}
            spacing={3}
            bg={useColorModeValue("#f4f2f2", "#141414")}
            borderRadius={5}
            key={index}
          >
            <Icon color={feature.color} fontSize={20} as={feature.icon} />
          </HStack>
        ))}
      </HStack>
      <Stack
        direction={!isHorizontal ? "column" : "row"}
        justify={"flex-start"}
        align={"center"}
        w={"100%"}
      >
        <HStack>
          <Text fontSize={14} fontWeight={600}>
            {data?.price === "Free" ? (
              <Text as={"span"}>مجاني </Text>
            ) : (
              <>
                <Text as={"span"}>من</Text>
                <Text as={"span"} mx={1}>
                  {" "}
                  {data?.price}{" "}
                </Text>
                <Text as={"span"}>دج</Text>
              </>
            )}
          </Text>
          <Spacer />
          {parseInt(data?.availablePlace) > 0 ? (
            <HStack color={"green"}>
              <MdEventAvailable />
              <Text fontSize={13}>متاح - {data?.availablePlace} أماكن</Text>
            </HStack>
          ) : (
            <HStack color={"red"}>
              <CgUnavailable />
              <Text fontSize={13}>غير متاح</Text>
            </HStack>
          )}
        </HStack>
        <Spacer />
        {renderButton() && (
          <Stack
            pt={{ base: 2, md: 0 }}
            align={"end"}
            w={!isHorizontal && "100%"}
          >
            <Button
              variant={"unstyled"}
              _hover={{ opacity: 0.8 }}
              color={"#ffffff"}
              bg={"#608aff"}
              w={{ base: "100%", md: "120px" }}
            >
              <HStack w={"100%"} h={"100%"} align={"center"} justify={"center"}>
                <Text fontWeight={{ base: "600", md: "500" }}>عرض </Text>
                <ViewIcon />
              </HStack>
            </Button>
          </Stack>
        )}
      </Stack>
    </VStack>
  );
};
