import { Flex, HStack, Image, Link } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "../../../assets/svg/logo.svg";
import { ProfileMenu } from "../ProfileMenu/index";
export const DesktopAppbar = ({ links,isLogin }) => {
  const location = useLocation();
  return (
    <Flex
      maxW={"8xl"}
      justifyContent={"space-between"}
      alignItems={"center"}
      display={{ sm: "none", md: "flex" }}
      w={"100%"}
      direction={"row"}
      height={"80px"}
    >
      <Flex justifyContent={"flex-start"} alignItems={"center"} w={"20%"}>
        <Image w={"150px"} src={logo} />
      </Flex>
      <HStack
        spacing={{ md: 6, lg: 10 }}
        pr={{ md: 4, xl: 0 }}
        h={"100%"}
        justifyContent={"end"}
        alignItems={"center"}
        w={"100%"}
        direction={"row"}
      >
        {links.map((link, index) => (
          <Link
            borderBottom={
              location.pathname === link.url ? "2px solid #FA8B02" : ""
            }
            color={"#ffffff"}
            _hover={{ color: "#FA8B02" }}
            transition={"ease-in-out 0.3s"}
            as={RouterLink}
            to={link.url}
            key={index}
          >
            {link.name}
          </Link>
        ))}
        {isLogin ? (
          <ProfileMenu />
        ) : (
          <>
            <Link
              ml={{ lg: 0, xl: 10 }}
              _hover={{
                backgroundColor: "#FA8B02",
                opacity: 0.8,
              }}
              bg={"#FA8B02"}
              color={"#ffffff"}
              px={5}
              py={2}
              borderRadius={"2"}
              transition={"ease-in-out 0.3s"}
              as={RouterLink}
              to={"/signup"}
            >
              Sign up
            </Link>
            <Link
              _hover={{ color: "#FB8B02", opacity: 0.8 }}
              transition={"ease-in-out 0.3s"}
              color={"#ffffff"}
              as={RouterLink}
              to={"/login"}
            >
              Log in
            </Link>
          </>
        )}
      </HStack>
    </Flex>
  );
};
