import { Container, VStack } from "@chakra-ui/react";
import React from "react";
import { DetailsHeader } from "./components/header";
import { DetailsImages } from "./components/images";
import { DetailsRating } from "./components/ratings/index";

export const DetailsLayout = ({ data }) => {
  return (
    <Container py={{ base: "120px", md: "150px" }} maxW={"8xl"}>
      <VStack
        justify={"flex-start"}
        align={"flex-start"}
        w={"full"}
        h={"full"}
        spacing={10}
      >
        <DetailsHeader data={data} />
        <DetailsImages data={data.images} />
        <DetailsRating data={data}  />
      </VStack>
    </Container>
  );
};
