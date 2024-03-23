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
} from "@chakra-ui/react";
import React from "react";
import { GrRestaurant } from "react-icons/gr";
import { MdDeliveryDining } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { ViewIcon } from '@chakra-ui/icons';

export const RestaurantCardBody = ({ renderButton, isHorizontal }) => {
  const features = [{ icon: MdDeliveryDining }];
  return (
    <VStack align={"flex-start"} w={"100%"}>
      <Text fontWeight={"600"} fontSize={13} w={"100%"}>
        Chambre Double Deluxe
      </Text>
      <List fontSize={13}>
        <Grid
          templateColumns={isHorizontal ? "repeat(2,1fr)" : "repeat(1,1fr)"}
        >
          <GridItem>
            <ListItem>
              <HStack>
                <Icon as={GrRestaurant} />
                <Text>French, European</Text>
              </HStack>
            </ListItem>
          </GridItem>
          <GridItem>
            <ListItem>
              <HStack>
                <Icon as={IoTimeOutline} />
                <Text>7j 12:00 PM - 9:30 PM</Text>
              </HStack>
            </ListItem>
          </GridItem>
          <GridItem>
            <ListItem>
              <HStack>
                <Icon as={FaCheck} />
                <Text>Parking</Text>
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
            bg={"#f4f2f2"}
            borderRadius={5}
            key={index}
          >
            <Icon color={feature.color} fontSize={20} as={feature.icon} />
          </HStack>
        ))}
      </HStack>
      <HStack w={"100%"}>
        <Text fontSize={14} fontWeight={600}>
          PRICE RANGE <Text fontWeight={500} as={"span"}> 1500DA - 20000DA</Text>
        </Text>
        <Spacer />
        {renderButton() && (
          <Stack pt={{ base: 2, md: 0 }} align={"end"}>
            <Button
              variant={"unstyled"}
              _hover={{ opacity: 0.8 }}
              color={"#ffffff"}
              bg={"#608aff"}
              w={{ base: "100%", md: "120px" }}
            >
              <HStack w={"100%"} h={"100%"} align={"center"} justify={"center"}>
                <Text fontWeight={{ base: "600", md: "500" }}>View</Text>
                <ViewIcon />
              </HStack>
            </Button>
          </Stack>
        )}
      </HStack>
    </VStack>
  );
};
