import { Container, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import { DetailsHeader } from "./components/header";
import { DetailsImages } from "./components/images";
import { DetailsMap } from "./components/map";
import { DetailsDescription } from "./components/description/index";
import { DetailsEquipement } from "./components/equipement/index";
import { LoadingSpinner } from "./../../components/LoadingSpinner/index";

export const DetailsLayoutNotActive = ({ loading, type, data }) => {
  return (
    <>
      {loading ? (
        <Stack align={"center"} justify={"center"} w={"full"} h={"100vh"}>
          <LoadingSpinner />
        </Stack>
      ) : (
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
            <DetailsDescription type={type} data={data} />
            {(type === "hotel" || type === "restaurant") && (
              <DetailsEquipement data={data?.equipements} />
            )}
            <DetailsMap />
          </VStack>
        </Container>
      )}
    </>
  );
};
