import {
  Avatar,
  Box,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FaUserLarge } from "react-icons/fa6";
import { Link as RouterLink } from "react-router-dom";

export const ActionMenu = () => {
  return (
    <Menu>
      <MenuButton>
        <HStack boxShadow={"md"} py={1} px={2} borderRadius={25}>
          <Box p={2} bg={"#eeeeee"} rounded={"full"}>
            <FaUserLarge color="#6d6c6c" size={12} />
          </Box>
          <ChevronDownIcon />
        </HStack>
      </MenuButton>
      <MenuList bg={useColorModeValue("#fafafa", "#141414")}>
        <MenuGroup>
          {" "}
          <MenuItem
            _hover={{backgroundColor:useColorModeValue("#eeeeee","#0b0b0b")}}
            fontWeight={500}
            bg={useColorModeValue("#fafafa", "#141414")}
            as={RouterLink}
            to={"/login"}
          >
            {" "}
            تسجيل الدخول
          </MenuItem>
          <MenuItem
                      _hover={{backgroundColor:useColorModeValue("#eeeeee","#0b0b0b")}}

            fontWeight={500}
            bg={useColorModeValue("#fafafa", "#141414")}
            as={RouterLink}
            to={"/signup"}
          >
            تسجيل{" "}
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};
