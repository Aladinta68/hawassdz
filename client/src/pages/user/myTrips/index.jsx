import {
  Alert,
  AlertIcon,
  Container,
  Skeleton,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { MyTripsHeader } from "./components/header";
import { MyCustomTable } from "../../../components/table";
import { colDefs } from "./components/tableColumns";
import { useQuery } from "@apollo/client";
import { GetALLTravelsByUser } from "../../../api/travel/query";
import Cookies from "js-cookie";

export const MyTrips = () => {
  const accessToken = Cookies.get("accessToken");

  const { loading, error, data } = useQuery(GetALLTravelsByUser, {
    context: {
      headers: {
        Authorization: accessToken,
      },
    },
  });
  if (error) {
    console.log("error", error);
  }

  return (
    <Container maxW={"8xl"}>
      <VStack my={{ base: "100px", md: 50 }} spacing={20} w={"full"} h={"full"}>
        <MyTripsHeader />
        {loading && (
          <Stack w={"full"}>
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
          </Stack>
        )}
        {data?.getTravelsByUser?.travels && (
          <Stack w={"full"} h={"500"}>
            <MyCustomTable
              rowData={data?.getTravelsByUser?.travels}
              colDefs={colDefs}
            />
          </Stack>
        )}
        {!data?.getTravelsByUser?.travels && !loading && (
          <Alert status="warning">
            <AlertIcon />
            لا يوجد لديك اي رحلات او فعاليات حاليا{" "}
          </Alert>
        )}
      </VStack>
    </Container>
  );
};
