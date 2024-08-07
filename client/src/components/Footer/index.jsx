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
  useColorModeValue,
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
    <Flex
      color={"#ffffff"}
      direction={"column"}
      bg={useColorModeValue("#333333", "#000000")}
      bottom={0}
    >
      <Container maxW={"8xl"}>
        <Flex py={5}>
          <Image w={"150px"} src={logo} />
        </Flex>
        <Flex
          justifyContent={"space-between"}
          borderY={useColorModeValue("1px solid gray", "1px solid #202020")}
          py={5}
          direction={{ base: "column", md: "row" }}
        >
          <Flex my={{ base: 5, md: 0 }} direction={"column"}>
            <Text fontWeight={600} py={2}>
              الصفحات
            </Text>
            <List>
              <ListItem py={1}>
                <Link
                  _hover={{ color: "#FA8B02" }}
                  transition={"ease-in-out 0.3s"}
                  as={RouterLink}
                  to={""}
                >
                  الرئيسية
                </Link>
              </ListItem>
              <ListItem py={1}>
                <Link
                  _hover={{ color: "#FA8B02" }}
                  transition={"ease-in-out 0.3s"}
                  as={RouterLink}
                  to={""}
                >
                  المناطق السياحيه
                </Link>
              </ListItem>
              <ListItem py={1}>
                <Link
                  _hover={{ color: "#FA8B02" }}
                  transition={"ease-in-out 0.3s"}
                  as={RouterLink}
                  to={""}
                >
                  المطاعم
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  _hover={{ color: "#FA8B02" }}
                  transition={"ease-in-out 0.3s"}
                  as={RouterLink}
                  to={""}
                >
                  الفنادق
                </Link>
              </ListItem>
              <ListItem py={1}>
                <Link
                  _hover={{ color: "#FA8B02" }}
                  transition={"ease-in-out 0.3s"}
                  as={RouterLink}
                  to={""}
                >
                  الفعاليات والرحلات
                </Link>
              </ListItem>
            </List>
          </Flex>
          <Flex my={{ base: 5, md: 0 }} direction={"column"}>
            <Text fontWeight={600} py={2}>
              المساعده
            </Text>
            <List>
              <ListItem py={1}>
                <Link
                  _hover={{ color: "#FA8B02" }}
                  transition={"ease-in-out 0.3s"}
                  as={RouterLink}
                  to={""}
                >
                  شروط الاستخدام
                </Link>
              </ListItem>
              <ListItem py={1}>
                <Link
                  _hover={{ color: "#FA8B02" }}
                  transition={"ease-in-out 0.3s"}
                  as={RouterLink}
                  to={""}
                >
                  سياسة الخصوصية{" "}
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
                <Text dir="ltr" mx={2}>
                  (213)557444857
                </Text>
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
                <Text dir="ltr" mx={2}>
                  HawassDZ@gmail.com
                </Text>
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
              وسائل التواصل الاجتماعي{" "}
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
          <Text>حقوق الطبع والنشر © 2024. جميع الحقوق محفوظة. </Text>
        </Flex>
      </Container>
    </Flex>
  );
};
