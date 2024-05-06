import {
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  Spacer,
  Stack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "../../../assets/svg/logo.svg";
import logo2 from "../../../assets/svg/logo2.svg";
import { ProfileMenu } from "../ProfileMenu/index";
import { ActionMenu } from "../ActionsMenu";
import { IoMoon } from "react-icons/io5";
import { IoSunnySharp } from "react-icons/io5";

export const DesktopAppbar = ({ links, isLogin }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const location = useLocation();
  return (
    <Flex
      maxW={"8xl"}
      justifyContent={"space-between"}
      alignItems={"flex-end"}
      display={{ base: "none", sm: "none", md: "flex" }}
      w={"100%"}
      direction={"row"}
      height={"80px"}
    >
      <HStack
        borderRadius={10}
        p={5}
        border={useColorModeValue("1.5px solid #f4f1f1", "1.5px solid #333333")}
        w={"full"}
        h={"80%"}
      >
        <Stack pl={10}>
          <Image w={"150px"} src={useColorModeValue(logo2, logo)} />
        </Stack>
        {links.map((link, index) => (
          <Link
            fontWeight={500}
            p={2}
            borderBottom={
              location.pathname === link.url ? "2px solid #FA8B02" : ""
            }
            color={
              location.pathname === link.url
                ? "#FA8B02"
                : useColorModeValue("#000000", "#ffffff")
            }
            _hover={{ color: "#FA8B02" }}
            transition={"ease-in-out 0.3s"}
            as={RouterLink}
            to={link.url}
            key={index}
          >
            {link.name}
          </Link>
        ))}
        <Spacer />
        <HStack spacing={5}>
          <IconButton
            onClick={toggleColorMode}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            fontSize={18}
            icon={colorMode === "light" ? <IoMoon /> : <IoSunnySharp />}
            variant={"ghost"}
          />
          <Button fontWeight={500} variant={"unstyled"}>
            English
          </Button>
          {isLogin ? <ProfileMenu /> : <ActionMenu />}
        </HStack>{" "}
      </HStack>
    </Flex>
  );
};
