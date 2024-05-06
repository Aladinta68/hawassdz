import { Stack } from "@chakra-ui/react";
import React from "react";
import HashLoader from "react-spinners/HashLoader";

export const LoadingSpinner = () => {
  return (
    <Stack align={"center"} justify={"center"} w={"100%"} h={"100vh"}>
      <HashLoader color="#ff9c00" size={90} />{" "}
    </Stack>
  );
};
