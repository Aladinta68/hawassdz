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
import { HiMiniUserGroup } from "react-icons/hi2";
import { DestinationFilter } from "./DestinationFilter";
import { TripFilter } from "./TripFilter";
import { PiFlagFill } from "react-icons/pi";

export const Filterbar = () => {
  return (
    <Flex
      top={{ md: "75vh", base: "35vh" }}
      my={{ base: 5, sm: 5, md: 10 }}
      bg={"rgba(255, 255, 255, 0.2)"}
      p={3}
      w={{ base: "90%", md: "100%" }}
      maxW={{ base: "400px", sm: "400px", md: "full" }}
    >
      <Tabs borderRadius={15} w={"100%"} variant="enclosed">
        <TabList border={"none"}>
          <Tab
            borderRadius={0}
            bg={"rgba(255, 255, 255, 0.4)"}
            color={"#ffffff"}
            fontWeight={500}
            fontSize={16}
            _selected={{ color: "#FA8B02", bg: "#ffffff" }}
          >
            <HiMiniUserGroup _selected={{ color: "#FA8B02" }} />
            <Text mx={1}>Trips</Text>
          </Tab>
          <Tab
            borderRadius={0}
            bg={"rgba(255, 255, 255, 0.4)"}
            mb={0}
            color={"#ffffff"}
            fontWeight={500}
            fontSize={16}
            _selected={{ color: "#FA8B02", bg: "#ffffff" }}
          >
            <PiFlagFill _selected={{ color: "#FA8B02" }} />
            <Text mx={1}> Destinations</Text>
          </Tab>
        </TabList>
        <TabPanels bg={"#ffffff"}>
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
