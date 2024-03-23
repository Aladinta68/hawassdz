import { ViewIcon } from "@chakra-ui/icons";
import { Button, HStack, Icon, Spacer, Stack, Text, VStack, useBreakpoint } from "@chakra-ui/react";
import React from "react";
import { FaPersonHiking } from "react-icons/fa6";
import { MdHotel } from "react-icons/md";
import { MdRestaurantMenu } from "react-icons/md";

export const DestinationCardBody = ({renderButton,isHorizontal }) => {
  const features = [
    { icon: MdHotel, number: "5", color: "#e37e18" },
    { icon: MdRestaurantMenu, number: "2", color: "#127e24" },
    { icon: FaPersonHiking, number: "10", color: "#8213be" },
  ];
  return (
    <VStack  align={isHorizontal&&'flex-start'} h={isHorizontal && "100%"} w={"100%"}>
      <Text w={"100%"}>
        azer sfqf zaefsferfdjkcd fzezd azefzrazer azer sfqf zaefsferfdjkcd fzezd
        azefzrazer 
      </Text>
      {isHorizontal && <Spacer />}
      <HStack justifyContent={!isHorizontal && "space-between"} w={"100%"}>
        {features.map((feature, index) => (
          <HStack
            px={4}
            py={1}
            spacing={3}
            bg={"#f4f2f2"}
            borderRadius={5}
            key={index}
          >
            <Icon color={feature.color} fontSize={20} as={feature.icon} />
            <Text>{feature.number}</Text>
          </HStack>
        ))}
      </HStack>
      {renderButton() && (
              <Stack pt={{ base: 2, md: 0 }} align={"end"} w={"100%"}>
                <Button
                  variant={"unstyled"}
                  _hover={{ opacity: 0.8 }}
                  color={"#ffffff"}
                  bg={"#608aff"}
                  w={{ base: "100%", md: "120px" }}
                >
                  <HStack
                    w={"100%"}
                    h={"100%"}
                    align={"center"}
                    justify={"center"}
                  >
                    <Text fontWeight={{ base: "600", md: "500" }}>View</Text>
                    <ViewIcon />
                  </HStack>
                </Button>
              </Stack>
            )}
    </VStack>
  );
};
