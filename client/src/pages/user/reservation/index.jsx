import { Alert, AlertIcon, Container, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import { MyCustomTable } from "../../../components/table";
import { MyReservationsHeader } from "./components/header";
import { colDefs } from "./components/tableColumns";

export const MyReservation = () => {
  const rowData = [];

  return (
    <Container maxW={"8xl"}>
      <VStack spacing={20} my={{ base: "100px", md: 50 }} w={"full"} h={"full"}>
        <MyReservationsHeader />
        {rowData && rowData.length > 0 ? (
          <Stack w={"full"} h={"500"}>
            <MyCustomTable rowData={rowData} colDefs={colDefs} />
          </Stack>
        ) : (
          <Alert status="warning">
            <AlertIcon />
            لا يوجد لديك اي حجوزات حاليا{" "}
          </Alert>
        )}
      </VStack>
    </Container>
  );
};
