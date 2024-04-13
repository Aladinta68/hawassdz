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
import { FaCheck } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa6";
import { MdCoffee } from "react-icons/md";
import { LuBedDouble } from "react-icons/lu";
import { FaSwimmer } from "react-icons/fa";
import { ViewIcon } from "@chakra-ui/icons";
export const HotelCardBody = ({ renderButton, isHorizontal }) => {
  const features = [
    { icon: LuBedDouble },
    { icon: MdCoffee },
    { icon: FaWifi },
    { icon: FaSwimmer },
  ];
  return (
    <VStack align={"flex-start"} w={"100%"}>
      <Text fontWeight={"600"} fontSize={13} w={"100%"}>
        غرفة مزدوجة ديلوكس{" "}
      </Text>
      <List color={"#04741b"} fontSize={12}>
        <Grid
          templateColumns={isHorizontal ? "repeat(2,1fr)" : "repeat(1,1fr)"}
        >
          <GridItem>
            <ListItem>
              <HStack>
                <Icon as={FaCheck} />
                <Text>الإلغاء مجانا</Text>
              </HStack>
            </ListItem>
          </GridItem>
          <GridItem>
            <ListItem>
              <HStack>
                <Icon as={FaCheck} />
                <Text>لا يتطلب الدفع المسبق</Text>{" "}
              </HStack>
            </ListItem>
          </GridItem>
        </Grid>
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
          <Text fontSize={13}>
            1 ليلة
            <Text px={1} as={"span"}>
              ,1 بالغ{" "}
            </Text>
          </Text>
          <Text
            textDecor={"line-through"}
            color={"red"}
            fontSize={16}
            fontWeight={400}
          >
            3000 DA
          </Text>
          <Text fontSize={20} fontWeight={600}>
            2500 DA
          </Text>
        </HStack>
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
