import {
  Avatar,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { MdLogout } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { IoTicketSharp } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
import { Link as RouterLink } from "react-router-dom";
import useProfileStore from "../../../store/profile";

export const ProfileMenu = () => {
  const setProfileData = useProfileStore((state) => state.setProfileData);
  const ProfileData = useProfileStore((state) => state.ProfileData);

  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove("accessToken");
    setProfileData(null);
    navigate("/login");
  };
  const imageUrl = "http://localhost:3000" + ProfileData?.image?.url;

  return (
    <Menu>
      <MenuButton>
        <HStack boxShadow={"md"} py={1} px={2} borderRadius={25}>
          <Avatar boxSize={8} bg="red.500" src={imageUrl} />
          <ChevronDownIcon />
        </HStack>
      </MenuButton>
      <MenuList bg={useColorModeValue("#fafafa", "#141414")}>
        <MenuGroup bg={useColorModeValue("#fafafa", "#141414")} title="">
          <MenuItem
            as={RouterLink}
            to={"/profile"}
            _hover={{
              backgroundColor: useColorModeValue("#eeeeee", "#0b0b0b"),
            }}
            bg={useColorModeValue("#fafafa", "#141414")}
          >
            {" "}
            <HStack spacing={3}>
              <Icon as={MdManageAccounts} />
              <Text> الحساب الشخصي</Text>
            </HStack>
          </MenuItem>
          <MenuItem
          as={RouterLink}
            to={"/my_trips"}
            _hover={{
              backgroundColor: useColorModeValue("#eeeeee", "#0b0b0b"),
            }}
            bg={useColorModeValue("#fafafa", "#141414")}
          >
            {" "}
            <HStack spacing={3}>
              <Icon as={FaMapLocationDot} />
              <Text> رحلاتي</Text>
            </HStack>
          </MenuItem>
          <MenuItem
          as={RouterLink}
            to={"/my_reservations"}
            _hover={{
              backgroundColor: useColorModeValue("#eeeeee", "#0b0b0b"),
            }}
            bg={useColorModeValue("#fafafa", "#141414")}
          >
            {" "}
            <HStack spacing={3}>
              <Icon as={IoTicketSharp} />
              <Text> حجوزاتي </Text>
            </HStack>{" "}
          </MenuItem>
          <MenuItem
            _hover={{
              backgroundColor: useColorModeValue("#eeeeee", "#0b0b0b"),
            }}
            bg={useColorModeValue("#fafafa", "#141414")}
            onClick={handleLogout}
          >
            <HStack spacing={3}>
              <Icon as={MdLogout} />
              <Text> تسجيل الخروج</Text>
            </HStack>
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};
