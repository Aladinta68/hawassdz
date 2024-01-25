import { Flex } from "@chakra-ui/react";
import React from "react";
import { Appbar } from "./../components/appbar/index";
import { Footer } from "./../components/Footer/index";

export const Layout = ({ children }) => {
  return (
    <Flex direction={'column'}>
      <Appbar />
      {children}
      <Footer />
    </Flex>
  );
};
