import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link as RouterLink } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";

export const SuccessPassword = () => {
  return (
    <Container
      minH={"100vh"}
      h={"100%"}
      display={"flex"}
      maxW={"xl"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack
        justify={"center"}
        align={"center"}
        h={"100%"}
        px={{ base: 10, md: 0 }}
        py={{ base: 0, md: 5 }}
      >
        <Box
          borderRadius={20}
          px={{ base: 0, md: 10 }}
          py={{
            base: "0",
            sm: "8",
          }}
        >
          <Stack spacing="6">
            <VStack spacing={5}>
              <Flex borderRadius={"full"} p={3} bg={"#fa8a0268"}>
                <FaCheck fontSize={22} color="#FA8B02" />
              </Flex>
              <Heading fontWeight={600} fontSize={30}>
                تمت إعادة تعيين كلمة المرور بنجاح{" "}
              </Heading>
              <Text color={"#717070"} textAlign={"center"}>
                لقد تم إعادة تعيين كلمة المرور الخاصة بك بنجاح. انقر أدناه
                لتسجيل الدخول .
              </Text>
            </VStack>
          </Stack>
          <Stack textAlign={"center"} py={5}>
            <Link
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              fontWeight={400}
              color={"#ffffff"}
              _hover={{ opacity: "0.9" }}
              borderRadius={25}
              h={'40px'}
              bg="#FA8B02"
              as={RouterLink}
              to={"/login"}
            >
              <IoIosArrowRoundBack fontSize={20} />
              <Text mx={2}> اذهب لتسجيل الدخول </Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};
