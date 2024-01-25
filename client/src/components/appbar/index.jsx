import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Link,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

export const Appbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("right");
  const links = [
    { name: "Home", url: "/" },
    { name: "Destinations", url: "/destinations" },
    { name: "Hotels", url: "/hotels" },
    { name: "Restaurants", url: "/restaurants" },
    { name: "Trips", url: "/trips" },
  ];
  return (
    <Flex
      bg={"rgba(255, 255, 255, 0.2)"}
      position={{ base: "absolute", md: "absolute" }}
      top="0"
      left="0"
      right="0"
      zIndex="10"
      justifyContent={"center"}
      alignItems={"center"}
    >
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
          <Text color={"#ffffff"} fontSize={18} fontWeight={500}>
            HawassDZ
          </Text>
        </Flex>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          w={"60%"}
          direction={"row"}
        >
          {links.map((link, index) => (
            <Link
              color={"#ffffff"}
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
      <Flex
        justifyContent={"space-between"}
        display={{ base: "flex", md: "none" }}
        w={"100%"}
        direction={"row"}
        height={"60px"}
        alignItems={"center"}
        px={5}
        bg={"rgba(255, 255, 255, 0.6)"}
      >
        <Flex justifyContent={"flex-start"} alignItems={"center"} w={"20%"}>
          <Text fontSize={18} fontWeight={500}>
            HawassDZ
          </Text>
        </Flex>
        <Flex w={"80%"} justifyContent={"space-between"}>
          <Flex></Flex>
          <IconButton
            onClick={onOpen}
            variant={"unstyled"}
            transition={"ease-in-out 0.3s"}
            _hover={{ color: "#FA8B02" }}
            icon={<HamburgerIcon fontSize={20} />}
          />
        </Flex>
      </Flex>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            h={"60px"}
            alignItems={"center"}
            display={"flex"}
            justifyContent={"space-between"}
            borderBottomWidth="1px"
          >
            HawassDZ
            <IconButton
              onClick={onClose}
              variant={"unstyled"}
              transition={"ease-in-out 0.3s"}
              _hover={{ color: "#FA8B02" }}
              icon={<CloseIcon fontSize={15} />}
            />
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
                color={"#000000"}
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
            <Link
              _hover={{ color: "#FB8B02", opacity: 0.8 }}
              transition={"ease-in-out 0.3s"}
              color={"#FA8B02"}
              to={"/login"}
              py={2}
              as={RouterLink}
            >
              Log in
            </Link>
            <Link
              my={2}
              _hover={{
                backgroundColor: "#FA8B02",
                opacity: 0.8,
              }}
              bg={"#FA8B02"}
              color={"#ffffff"}
              borderRadius={"20"}
              transition={"ease-in-out 0.3s"}
              py={2}
              px={5}
              as={RouterLink}
              to={"/signup"}
            >
              Sign up
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
