import { CloseIcon, HamburgerIcon, Icon } from "@chakra-ui/icons";
import {
  Avatar,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
  Image,
  Link,
  Spacer,
  Text,
  VStack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../assets/svg/logo.svg";
import logo2 from "../../../assets/svg/logo2.svg";
import { IoMoon, IoSunnySharp, IoTicketSharp } from "react-icons/io5";
import Cookies from "js-cookie";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
export const MobileAppbar = ({ links, isLogin,ProfileData }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("right");
  const location = useLocation();

  const imageUrl =  ProfileData?.image?.url;

  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove("accessToken");
    navigate("/login");
  };
  return (
    <>
      <HStack
        justifyContent={"center"}
        display={{ base: "flex", sm: "flex", md: "none" }}
        w={"100%"}
        height={"60px"}
        alignItems={"center"}
        px={5}
        zIndex={99}
        boxShadow={"sm"}
        position={"fixed"}
        top={0}
        left={0}
        borderBottom={useColorModeValue("none", "1px solid #333333")}
        bg={useColorModeValue("#ffffff", "#000000")}
      >
        <IconButton
          color={useColorModeValue("#434343", "#ffffff")}
          onClick={onOpen}
          variant={"unstyled"}
          transition={"ease-in-out 0.3s"}
          _hover={{ color: "#FA8B02" }}
          icon={<HamburgerIcon fontSize={20} />}
        />
        <Spacer />
        <Image w={"130px"} src={useColorModeValue(logo2, logo)} />
        <Spacer />
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
      </HStack>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <DrawerContent bg={useColorModeValue("#ffffff", "#000000")}>
          <DrawerHeader
            h={"60px"}
            alignItems={"center"}
            display={"flex"}
            justifyContent={"space-between"}
            borderBottomWidth="1px"
          >
            <IconButton
              onClick={onClose}
              variant={"unstyled"}
              transition={"ease-in-out 0.3s"}
              _hover={{ color: "#FA8B02" }}
              icon={<CloseIcon fontSize={15} />}
            />
            <Text color={useColorModeValue("#000000", "#ffffff")}>
              Hawass
              <Text as={"span"} color={"#FA8B02"}>
                DZ
              </Text>
            </Text>
          </DrawerHeader>
          <DrawerBody
            py={10}
            display={"flex"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            {links.map((link, index) => (
              <Link
                fontWeight={500}
                color={
                  location.pathname === link.url
                    ? "#FA8B02"
                    : useColorModeValue("#000000", "#fffff")
                }
                _hover={{ color: "#FA8B02" }}
                transition={"ease-in-out 0.3s"}
                py={2}
                as={RouterLink}
                to={link.url}
                key={index}
              >
                {link.name}
              </Link>
            ))}
          </DrawerBody>
          <DrawerFooter
            display={"flex"}
            flexDirection={"column"}
            borderTopWidth="1px"
          >
            {isLogin ? (
              <VStack p={5} spacing={4} w={"full"} h={"full"}>
                <Link
                  h={14}
                  px={2}
                  borderRadius={5}
                  _hover={{
                    backgroundColor: useColorModeValue("#ebebeb", "#141414"),
                  }}
                  w={"full"}
                  to={"/profile"}
                  as={RouterLink}
                >
                  <HStack
                    spacing={5}
                    w={"full"}
                    h={"full"}
                    justify={"flex-start"}
                    align={"center"}
                  >
                    <Avatar boxSize={10} bg="red.500" src={imageUrl} />
                    <Text> الحساب الشخصي</Text>
                  </HStack>
                </Link>
                <Link
                  h={12}
                  px={2}
                  borderRadius={5}
                  _hover={{
                    backgroundColor: useColorModeValue("#ebebeb", "#141414"),
                  }}
                  w={"full"}
                  to={"/my_trips"}
                  as={RouterLink}
                >
                  <HStack
                    spacing={5}
                    w={"full"}
                    h={"full"}
                    justify={"flex-start"}
                    align={"center"}
                  >
                    <Icon as={FaMapLocationDot} />
                    <Text> رحلاتي</Text>
                  </HStack>
                </Link>
                <Link
                  h={12}
                  px={2}
                  borderRadius={5}
                  _hover={{
                    backgroundColor: useColorModeValue("#ebebeb", "#141414"),
                  }}
                  w={"full"}
                  to={"/my_reservations"}
                  as={RouterLink}
                >
                  <HStack
                    spacing={5}
                    w={"full"}
                    h={"full"}
                    justify={"flex-start"}
                    align={"center"}
                  >
                    <Icon as={IoTicketSharp} />
                    <Text> حجوزاتي </Text>
                  </HStack>
                </Link>
                <Link
                  h={12}
                  px={2}
                  borderRadius={5}
                  _hover={{
                    backgroundColor: useColorModeValue("#ebebeb", "#141414"),
                  }}
                  w={"full"}
                  onClick={handleLogout}
                >
                  <HStack
                    spacing={5}
                    w={"full"}
                    h={"full"}
                    justify={"flex-start"}
                    align={"center"}
                  >
                    <Icon as={MdLogout} />
                    <Text> تسجيل الخروج</Text>
                  </HStack>
                </Link>
              </VStack>
            ) : (
              <>
                <Link
                  fontWeight={500}
                  _hover={{ color: "#FB8B02", opacity: 0.8 }}
                  transition={"ease-in-out 0.3s"}
                  color={"#FA8B02"}
                  to={"/login"}
                  py={2}
                  as={RouterLink}
                >
                  تسجيل الدخول
                </Link>
                <Link
                  fontWeight={500}
                  my={2}
                  _hover={{
                    backgroundColor: "#FA8B02",
                    opacity: 0.8,
                  }}
                  bg={"#FA8B02"}
                  color={"#ffffff"}
                  borderRadius={"2"}
                  transition={"ease-in-out 0.3s"}
                  py={2}
                  px={5}
                  as={RouterLink}
                  to={"/signup"}
                >
                  تسجيل
                </Link>
              </>
            )}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
