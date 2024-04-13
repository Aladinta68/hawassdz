import { Flex, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Appbar } from "./../../components/appbar/index";
import { Footer } from "./../../components/Footer/index";

export const MainLayout = ({ children }) => {
  return (
    <Flex bg={useColorModeValue("#ffffff","#000000")} direction={"column"}>
      <Appbar />
      {children}
      <Footer />
    </Flex>
  );
};
