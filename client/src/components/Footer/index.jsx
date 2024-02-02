import {
  Box,
  Container,
  Flex,
  HStack,
  Image,
  Link,
  List,
  ListItem,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdMail } from "react-icons/md";
import logo from "../../assets/svg/logo.svg";
export const Footer = () => {
  return (
    <Flex color={"#ffffff"} direction={"column"} bg={"#333333"} bottom={0}>
      <Container maxW={"6xl"}>
        <Flex py={5}>
          <Image w={"100px"} src={logo} />
        </Flex>
        <Flex
          justifyContent={"space-between"}
          borderY={"1px solid gray"}
          py={5}
          direction={{ base: "column", md: "row" }}
        >
          <Flex my={{ base: 5, md: 0 }} direction={"column"}>
            <Text fontWeight={600} py={2}>
              Services
            </Text>
            <List>
              <ListItem py={1}>
                <Link
                  _hover={{ color: "#FA8B02" }}
                  transition={"ease-in-out 0.3s"}
                  as={RouterLink}
                  to={""}
                >
                  Bike and Rickshaw rental
                </Link>
              </ListItem>
              <ListItem py={1}>
                <Link
                  _hover={{ color: "#FA8B02" }}
                  transition={"ease-in-out 0.3s"}
                  as={RouterLink}
                  to={""}
                >
                  Bike and Rickshaw
                </Link>
              </ListItem>
              <ListItem py={1}>
                <Link
                  _hover={{ color: "#FA8B02" }}
                  transition={"ease-in-out 0.3s"}
                  as={RouterLink}
                  to={""}
                >
                  Bike and Rickshaw rental
                </Link>
              </ListItem>
            </List>
          </Flex>
          <Flex my={{ base: 5, md: 0 }} direction={"column"}>
            <Text fontWeight={600} py={2}>
              Pages
            </Text>
            <List>
              <ListItem py={1}>
                <Link
                  _hover={{ color: "#FA8B02" }}
                  transition={"ease-in-out 0.3s"}
                  as={RouterLink}
                  to={""}
                >
                  Home
                </Link>
              </ListItem>
              <ListItem py={1}>
                <Link
                  _hover={{ color: "#FA8B02" }}
                  transition={"ease-in-out 0.3s"}
                  as={RouterLink}
                  to={""}
                >
                  Destinations
                </Link>
              </ListItem>
              <ListItem py={1}>
                <Link
                  _hover={{ color: "#FA8B02" }}
                  transition={"ease-in-out 0.3s"}
                  as={RouterLink}
                  to={""}
                >
                  Restaurants
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  _hover={{ color: "#FA8B02" }}
                  transition={"ease-in-out 0.3s"}
                  as={RouterLink}
                  to={""}
                >
                  Hotels
                </Link>
              </ListItem>
              <ListItem py={1}>
                <Link
                  _hover={{ color: "#FA8B02" }}
                  transition={"ease-in-out 0.3s"}
                  as={RouterLink}
                  to={""}
                >
                  Trips
                </Link>
              </ListItem>
            </List>
          </Flex>
          <Flex my={{ base: 5, md: 0 }} direction={"column"}>
            <Text fontWeight={600} py={2}>
              Help
            </Text>
            <List>
              <ListItem py={1}>
                <Link
                  _hover={{ color: "#FA8B02" }}
                  transition={"ease-in-out 0.3s"}
                  as={RouterLink}
                  to={""}
                >
                  Terms of Use
                </Link>
              </ListItem>
              <ListItem py={1}>
                <Link
                  _hover={{ color: "#FA8B02" }}
                  transition={"ease-in-out 0.3s"}
                  as={RouterLink}
                  to={""}
                >
                  Provicy Policy
                </Link>
              </ListItem>
            </List>
          </Flex>
          <Flex my={{ base: 5, md: 0 }} direction={"column"}>
            <Text fontWeight={600} py={2}>
              Contacts
            </Text>
            <List>
              <ListItem
                display={"flex "}
                flexDirection={"row"}
                alignItems={"center"}
                py={1}
              >
                <FaPhoneAlt fontSize={18} color="#FA8B02" />
                <Text mx={2}>(213)557444857</Text>
              </ListItem>
              <ListItem
                display={"flex "}
                flexDirection={"row"}
                alignItems={"center"}
                py={1}
              >
                <MdMail fontSize={20} color="#FA8B02" />
                <Text mx={2}>HawassDZ@gmail.com</Text>
              </ListItem>
            </List>
          </Flex>
          <Flex
            my={{ base: 5, md: 0 }}
            px={3}
            alignItems={"center"}
            direction={"column"}
          >
            <Text fontWeight={600} py={2}>
              Social Media
            </Text>
            <HStack py={1}>
              <Link p={2} rounded={"full"} bg={"#FA8B02"}>
                <FaTwitter />
              </Link>
              <Link mx={5} p={2} rounded={"full"} bg={"#FA8B02"}>
                <FaInstagram />
              </Link>
              <Link p={2} rounded={"full"} bg={"#FA8B02"}>
                <FaFacebookF />
              </Link>
            </HStack>
          </Flex>
        </Flex>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={"center"}
          py={5}
        >
          <Text>Copyright © 2024. All rights reserved. </Text>
        </Flex>
      </Container>
    </Flex>
  );
};
