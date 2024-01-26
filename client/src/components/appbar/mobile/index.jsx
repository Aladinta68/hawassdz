import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
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
import { Link as RouterLink, useLocation } from "react-router-dom";
export const MobileAppbar = ({ links }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("right");
  const location = useLocation();
  return (
    <>
      <Flex
        justifyContent={"space-between"}
        display={{ base: "flex", md: "none" }}
        w={"100%"}
        direction={"row"}
        height={"60px"}
        alignItems={"center"}
        px={5}
        zIndex={99}
        bg={"rgba(255, 255, 255, 0.1)"}
      >
        <Flex justifyContent={"flex-start"} alignItems={"center"} w={"20%"}>
          <Text color={"#ffffff"} fontSize={18} fontWeight={500}>
            HawassDZ
          </Text>
        </Flex>
        <Flex w={"80%"} justifyContent={"space-between"}>
          <Flex></Flex>
          <IconButton
            color={"#ffffff"}
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
                color={location.pathname === link.url ? "#FA8B02" : "#000000"}
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
    </>
  );
};
