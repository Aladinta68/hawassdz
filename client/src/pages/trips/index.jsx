import {
  Box,
  Container,
  Flex,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Header } from "./components/header";
import { TriBar } from "./components/TriBar";
import { FilterBar } from "./components/FilterBar";
import Plane from "../../assets/image/trips/Plane.png";
import { TripCard } from "./components/card";
import { Paggination } from "./../../components/Paggination/index";
import { TripcardData } from "../../data/tripdata";

export const Trips = () => {
  const breakpoint = useBreakpointValue({ base: "base", md: "md", lg: "lg" });
  const [TripData, setTripData] = useState(TripcardData[0]);
  const handlePage = (Pnumber) => {
    setTripData(TripcardData[Pnumber]);
  };
  return (
    <Flex justify={"center"} align={"center"} direction={"column"}>
      <Header />
      <TriBar />
      <Container py={20} px={0} maxW={"6xl"}>
        {breakpoint === "base" ? (
          <Flex align={"center"} direction={"column"}>
            <Flex
              justify={"center"}
              align={"center"}
              h={"full"}
              w={"90%"}
              direction={"column"}
            >
              <FilterBar />
            </Flex>
            <Flex h={"100%"} w={"70%"} direction={"column"}></Flex>
            <Image mt={10} src={Plane} />
          </Flex>
        ) : (
          <Flex direction={"row"}>
            <Flex align={"center"} pr={5} w={"70%"} direction={"column"}>
              <Flex direction={"column"}>
                {TripData.data.map((Trip, index) => (
                  <Box my={5} key={index}>
                    <TripCard data={Trip} />
                  </Box>
                ))}
              </Flex>
              <Flex py={10}>
                <Paggination
                  DataLength={TripcardData.length}
                  Selected={TripData.PageNumber}
                  onPageChange={handlePage}
                />
              </Flex>
            </Flex>
            <Flex
              justify={"center"}
              align={"center"}
              h={"full"}
              w={"30%"}
              direction={"column"}
            >
              <FilterBar />
              <Image mt={10} src={Plane} />
            </Flex>
          </Flex>
        )}
      </Container>
    </Flex>
  );
};
