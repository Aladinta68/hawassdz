import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaFontAwesomeFlag } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import { DestinationFilter } from "./DestinationFilter";
import { TripFilter } from "./TripFilter";

export const Filterbar = () => {
  return (
    <Flex
      my={10}
      borderRadius={15}
      bg={"rgba(255, 255, 255, 0.2)"}
      p={3}
      w={{ base: "90%", md: "100%" }}
    >
      <Tabs borderRadius={15} w={"100%"} variant="enclosed">
        <TabList border={"none"}>
          <Tab
            bg={"rgba(255, 255, 255, 0.4)"}
            mb={0}
            color={"#ffffff"}
            fontWeight={500}
            fontSize={16}
            _selected={{ color: "#FA8B02", bg: "#ffffff" }}
          >
            <HiMiniUserGroup _selected={{ color: "#FA8B02" }} />
            <Text mx={1}>Trips</Text>
          </Tab>
          <Tab
            bg={"rgba(255, 255, 255, 0.4)"}
            mb={0}
            color={"#ffffff"}
            fontWeight={500}
            fontSize={16}
            _selected={{ color: "#FA8B02", bg: "#ffffff" }}
          >
            <FaFontAwesomeFlag _selected={{ color: "#FA8B02" }} />
            <Text mx={1}> Destinations</Text>
          </Tab>
        </TabList>
        <TabPanels
          borderRightRadius={15}
          borderBottomRadius={15}
          bg={"#ffffff"}
        >
          <TabPanel>
            <TripFilter />
          </TabPanel>
          <TabPanel>
            <DestinationFilter />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};
