import {
  Button,
  Grid,
  GridItem,
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
import { GrRestaurant } from "react-icons/gr";
import { ViewIcon } from "@chakra-ui/icons";
import { RiParkingBoxFill } from "react-icons/ri";
import { MdOutlineTakeoutDining } from "react-icons/md";
import { MdDeliveryDining } from "react-icons/md";
import { FaWheelchair } from "react-icons/fa";

export const RestaurantCardBody = ({ data, renderButton, isHorizontal }) => {
  const features = [
    {
      icon: MdDeliveryDining,
      contains:
        data?.equipements &&
        data?.equipements?.some((equipment) => equipment.item === "التوصيل"),
    },
    {
      icon: MdOutlineTakeoutDining,
      contains:
        data?.equipements &&
        data?.equipements?.some((equipment) => equipment.item === "التيك أواي"),
    },
    {
      icon: RiParkingBoxFill,
      contains:
        data?.equipements &&
        data?.equipements?.some(
          (equipment) => equipment.item === "مواقف السيارات متاحة"
        ),
    },
    {
      icon: FaWheelchair,
      contains:
        data?.equipements &&
        data?.equipements?.some(
          (equipment) => equipment.item === "مدخل للكراسي المتحركة"
        ),
    },
  ];
  return (
    <VStack pt={2} align={"flex-start"} w={"100%"}>
      <List fontSize={13}>
        <Grid
          templateColumns={isHorizontal ? "repeat(2,1fr)" : "repeat(1,1fr)"}
        >
          <GridItem>
            <ListItem>
              <HStack>
                <Icon as={GrRestaurant} />
                <Text>{data?.type}</Text>
              </HStack>
            </ListItem>
          </GridItem>
        </Grid>
      </List>
      <HStack py={2} w={"100%"}>
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
        align={"center"}
        direction={!isHorizontal ? "column" : "row"}
        w={"100%"}
      >
        <Spacer />
        {renderButton() && (
          <Stack
            w={!isHorizontal && "100%"}
            pt={{ base: 2, md: 0 }}
            align={"end"}
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
