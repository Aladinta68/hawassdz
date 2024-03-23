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
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdMail } from "react-icons/md";
import logo from "../../assets/svg/logo.svg";
import { IoMdMailOpen } from "react-icons/io";

export const Footer = () => {
  const [ishoveredPhone, setishoveredPhone] = useState(false);
  const [ishoveredmail, setishoveredmail] = useState(false);
  return (
    <Flex color={"#ffffff"} direction={"column"} bg={"#333333"} bottom={0}>
      <Container maxW={"8xl"}>
        <Flex py={5}>
          <Image w={"150px"} src={logo} />
        </Flex>
        <Flex
          justifyContent={"space-between"}
          borderY={"1px solid gray"}
          py={5}
          direction={{ base: "column", md: "row" }}
        >
          <Flex  my={{ base: 0, md: 0 }} direction={"column"}>
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
          <Flex  my={{ base: 5, md: 0 }} direction={"column"}>
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
                onMouseOver={() => setishoveredPhone(true)}
                onMouseOut={() => setishoveredPhone(false)}
                display={"flex "}
                flexDirection={"row"}
                alignItems={"center"}
                py={1}
              >
                <Box
                  transition={"transform 0.2s"}
                  animation={ishoveredPhone && "vibrate 0.5s ease "}
                  css={`
                    @keyframes vibrate {
                      0% {
                        transform: translate(0);
                      }
                      20% {
                        transform: translate(-1px, 1px);
                      }
                      40% {
                        transform: translate(1px, -1px);
                      }
                      60% {
                        transform: translate(-1px, 1px);
                      }
                      80% {
                        transform: translate(1px, 1px);
                      }
                      100% {
                        transform: translate(0);
                      }
                    }
                  `}
                >
                  <FaPhoneAlt fontSize={18} color="#FA8B02" />
                </Box>
                <Text mx={2}>(213)557444857</Text>
              </ListItem>
              <ListItem
                onMouseOver={() => setishoveredmail(true)}
                onMouseOut={() => setishoveredmail(false)}
                display={"flex "}
                flexDirection={"row"}
                alignItems={"center"}
                py={1}
              >
                <Box>
                  {ishoveredmail ? (
                    <IoMdMailOpen fontSize={20} color="#FA8B02" />
                  ) : (
                    <MdMail fontSize={20} color="#FA8B02" />
                  )}
                </Box>
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
                <Box
                  transition={"transform 0.2s"}
                  _hover={{
                    transform: "scale(1.2)",
                  }}
                >
                  <FaTwitter />
                </Box>
              </Link>
              <Link mx={5} p={2} rounded={"full"} bg={"#FA8B02"}>
                <Box
                  transition={"transform 0.2s"}
                  _hover={{
                    transform: "scale(1.2)",
                  }}
                >
                  {" "}
                  <FaInstagram />
                </Box>
              </Link>
              <Link p={2} rounded={"full"} bg={"#FA8B02"}>
                <Box
                  transition={"transform 0.2s"}
                  _hover={{
                    transform: "scale(1.2)",
                  }}
                >
                  {" "}
                  <FaFacebookF />
                </Box>
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
