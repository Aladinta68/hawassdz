import { Flex } from "@chakra-ui/react";
import React from "react";
import { Appbar } from "../../components/appbar/index";
import { Footer } from "../../components/Footer/index";
import { useLocation } from "react-router-dom";

export const MainLayout = ({ children }) => {
  const location = useLocation();

  return (
    <Flex direction={"column"}>
      {location.pathname === "/forgotpassword" ||
      location.pathname === "/setnewpassword" ||
      location.pathname === "/login" ||
      location.pathname === "/signup" ? (
        ""
      ) : (
        <Appbar type={location.pathname} />
      )}
      {children}
      {location.pathname === "/forgotpassword" ||
      location.pathname === "/setnewpassword" ||
      location.pathname === "/login" ||
      location.pathname === "/signup" ? (
        ""
      ) : (
        <Footer />
      )}
    </Flex>
  );
};