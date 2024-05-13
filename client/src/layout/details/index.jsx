import { Container, VStack } from "@chakra-ui/react";
import React from "react";
import { DetailsHeader } from "./components/header";
import { DetailsImages } from "./components/images";
import { DetailsRating } from "./components/ratings/index";
import { DetailsMap } from "./components/map";
import { DetailsDescription } from "./components/description/index";
import { Navigate } from "react-router-dom";
import { DetailsEquipement } from './components/equipement/index';

export const DetailsLayout = ({ type, data }) => {
  if (!data) {
    return <Navigate to="/" />;
  } else {
    return (
      <Container py={{ base: "120px", md: "150px" }} maxW={"8xl"}>
        <VStack
          justify={"flex-start"}
          align={"flex-start"}
          w={"full"}
          h={"full"}
          spacing={10}
        >
          <DetailsHeader type={type} data={data} />
          <DetailsImages data={data.images} />
          <DetailsDescription data={data} />
          {type === "hotel" || (type === "restaurant" && <DetailsEquipement />)}
          <DetailsRating type={type} data={data} />
          <DetailsMap />
        </VStack>
      </Container>
    );
  }
};
