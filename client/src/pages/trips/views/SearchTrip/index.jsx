import { Box, Container, Flex, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import { Header } from "../../components/header";
import { TriBar } from "../../components/TriBar";
import { FilterBar } from "../../components/FilterBar";
import Plane from "../../../../assets/image/trips/Plane.png";
import { TripCard } from "../../components/card";
import { Paggination } from "../../../../components/Paggination/index";
import { TripcardData } from "../../../../data/tripdata";
import header from "../../../../assets//image/trips/header.png";

export const Trips = () => {
  const [TripData, setTripData] = useState(TripcardData[0]);
  const handlePage = (Pnumber) => {
    setTripData(TripcardData[Pnumber]);
  };
  return (
    <Flex justify={"center"} align={"center"} direction={"column"}>
      <Header image={header} text1={"SEARCH TRIP"} text2={"Travel With Us"} />
      <TriBar />
      <Container py={20} px={0} maxW={"6xl"}>
        <Flex  direction={"row"}>
          <Flex
            align={"center"}
            pr={5}
            pl={{ base: 5, md: 0 }}
            w={{ base: "100%", md: "70%" }}
            direction={"column"}
          >
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
            visibility={{ md: "visible", base: "hidden" }}
            justify={"center"}
            align={"center"}
            h={"full"}
            w={{ base: "0", md: "30%" }}
            direction={"column"}
          >
            <FilterBar />
            <Image mt={10} src={Plane} />
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};
