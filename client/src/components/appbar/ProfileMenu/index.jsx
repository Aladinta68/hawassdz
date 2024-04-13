import {
  Avatar,
  Box,
  HStack,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { FaUserLarge } from "react-icons/fa6";
import { ChevronDownIcon } from "@chakra-ui/icons";

export const ProfileMenu = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("accessToken");
    navigate("/login");
  };

  return (
    <Menu>
      <MenuButton>
        <HStack boxShadow={"md"} py={1} px={2} borderRadius={25}>
          <Avatar
            boxSize={8}
            bg="red.500"
            icon={<AiOutlineUser/>}
          />
          <ChevronDownIcon />
        </HStack>
      </MenuButton>
      <MenuList>
        <MenuGroup title="Profile">
          <MenuItem>My Account</MenuItem>
          <MenuItem>Payments </MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};
