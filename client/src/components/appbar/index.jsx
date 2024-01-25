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
    <Flex px={5}>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        display={{ base: "none", md: "flex" }}
        w={"100%"}
        direction={"row"}
        height={"60px"}
      >
        <Flex justifyContent={"flex-start"} alignItems={"center"} w={"20%"}>
          <Text fontSize={18} fontWeight={500}>
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
          <Link as={RouterLink} to={"/login"}>
            Log in
          </Link>
          <Link ml={10} as={RouterLink} to={"/signup"}>
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
              <Link py={2} as={RouterLink} to={link.url} key={index}>
                {link.name}
              </Link>
            ))}
          </DrawerBody>
          <DrawerFooter
            display={"flex"}
            flexDirection={"column"}
            borderTopWidth="1px"
          >
            <Link py={2} as={RouterLink} to={"/login"}>
              Log in
            </Link>
            <Link py={2} as={RouterLink} to={"/signup"}>
              Sign up
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
