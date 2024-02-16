import { Container, Flex, Image } from "@chakra-ui/react";
import React, { useState } from "react";

import { Header } from "./../../components/header/index";
import { NavigationBar } from "./../../components/NavigationBar/index";
import { BookNow } from "../../components/BookNow";

import Plane from "../../../../assets/image/trips/Plane.png";
import HeaderTripdetails from "../../../../assets/image/trips/HeaderTripdetails.png";
import HeaderTripGallery from "../../../../assets/image/trips/HeaderTripGallery.png";
import HeaderTripLocation from "../../../../assets/image/trips/HeaderTripLocation.png";
import HeaderTripPlan from "../../../../assets/image/trips/HeaderTripPlan.png";

import { TripGallery } from "./components/TripGallery/index";
import { TripPlan } from "./components/TripPlan/index";
import { TripInformation } from "./components/TripInformation/index";
import { TripLocation } from "./components/TripLocation/index";

export const TripDetails = () => {
  const [Triplink, setTriplink] = useState("tripinformation");
  const HandleTripLink = (path) => {
    setTriplink(path);
  };
  let headerImage;
  if (Triplink === "tripinformation") {
    headerImage = HeaderTripdetails;
  } else if (Triplink === "tripplan") {
    headerImage = HeaderTripPlan;
  } else if (Triplink === "tripgallery") {
    headerImage = HeaderTripGallery;
  } else if (Triplink === "triplocation") {
    headerImage = HeaderTripLocation;
  }

  let contentComponent;
  if (Triplink === "tripinformation") {
    contentComponent = <TripInformation HandleTripLink={HandleTripLink} />;
  } else if (Triplink === "tripplan") {
    contentComponent = <TripPlan />;
  } else if (Triplink === "tripgallery") {
    contentComponent = <TripGallery />;
  } else if (Triplink === "triplocation") {
    contentComponent = <TripLocation />;
  }
  return (
    <Flex justify={"center"} align={"center"} direction={"column"}>
      <Header image={headerImage} />
      <NavigationBar Triplinkstate={Triplink} HandleTripLink={HandleTripLink} />
      <Container py={20} px={0} maxW={"6xl"}>
        <Flex direction={"row"}>
          <Flex
            align={"center"}
            pr={5}
            pl={{ base: 5, md: 0 }}
            w={{ base: "100%", md: "100%" }}
            direction={"column"}
          >
            {contentComponent}
            {/* <Flex
            visibility={{ md: "visible", base: "hidden" }}
            justify={"flex-start"}
            align={"center"}
            w={{ base: "0", md: "30%" }}
            direction={"column"}
          >
            <BookNow />
            <Image mt={10} src={Plane} />
          </Flex> */}
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};
