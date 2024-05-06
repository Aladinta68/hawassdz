import { Alert, AlertIcon, Container, HStack, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import { MyTripsHeader } from "./components/header";
import { MyCustomTable } from "../../../components/table";
import { colDefs } from "./components/tableColumns";

export const MyTrips = () => {
  const rowData = [];

  return (
    <Container maxW={"8xl"}>
      <VStack my={{ base: "100px", md: 50 }} spacing={20} w={"full"} h={"full"}>
        <MyTripsHeader />
        {rowData && rowData.length > 0 ? (
          <Stack w={"full"} h={"500"}>
            <MyCustomTable rowData={rowData} colDefs={colDefs} />
          </Stack>
        ) : (
          <Alert status="warning">
            <AlertIcon />
            لا يوجد لديك اي رحلات  حاليا{" "}
          </Alert>
        )}
      </VStack>
    </Container>
  );
};
