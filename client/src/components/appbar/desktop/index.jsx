import { Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "../../../assets/svg/logo.svg";
export const DesktopAppbar = ({ links }) => {
  const location = useLocation();
  return (
    <Flex
      maxW={"6xl"}
      justifyContent={"center"}
      alignItems={"center"}
      display={{ base: "none", md: "flex" }}
      w={"100%"}
      direction={"row"}
      height={"60px"}
    >
      <Flex justifyContent={"flex-start"} alignItems={"center"} w={"20%"}>
        <Image w={'100px'} src={logo} />
      </Flex>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        w={"60%"}
        direction={"row"}
      >
        {links.map((link, index) => (
          <Link
            color={location.pathname === link.url ? "#FA8B02" : "#ffffff"}
            _hover={{ color: "#FA8B02" }}
            transition={"ease-in-out 0.3s"}
            mx={{ md: 2, lg: 5 }}
            as={RouterLink}
            to={link.url}
            key={index}
          >
            {link.name}
          </Link>
        ))}
      </Flex>
      <Flex
        w={"20%"}
        justifyContent={"flex-end"}
        alignItems={"center"}
        direction={"row"}
      >
        <Link
          _hover={{ color: "#FB8B02", opacity: 0.8 }}
          transition={"ease-in-out 0.3s"}
          color={"#FA8B02"}
          as={RouterLink}
          to={"/login"}
        >
          Log in
        </Link>
        <Link
          _hover={{
            backgroundColor: "#FA8B02",
            opacity: 0.8,
          }}
          bg={"#FA8B02"}
          color={"#ffffff"}
          px={5}
          py={1.5}
          borderRadius={"20"}
          transition={"ease-in-out 0.3s"}
          ml={10}
          as={RouterLink}
          to={"/signup"}
        >
          Sign up
        </Link>
      </Flex>
    </Flex>
  );
};
