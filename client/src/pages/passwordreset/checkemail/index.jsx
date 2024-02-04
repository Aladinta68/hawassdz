import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { IoMailOutline } from "react-icons/io5";
import { IoIosArrowRoundBack } from "react-icons/io";

export const CheckEmail = () => (
  <Container
    display={"flex"}
    h={"100%"}
    minH={"100vh"}
    maxW={"md"}
    justifyContent={"center"}
    alignItems={"center"}
  >
    <Stack
      w={"100%"}
      justify={"center"}
      align={"center"}
      h={"100%"}
      px={{ base: 10, md: 0 }}
      py={{ base: 0, md: 10 }}
    >
      <Box
        w={"100%"}
        borderRadius={20}
        py={{
          base: "0",
          sm: "8",
        }}
      >
        <Stack w={"100%"} spacing="6">
          <VStack spacing={5}>
            <Flex borderRadius={"full"} p={3} bg={"#fa8a0268"}>
              <IoMailOutline fontSize={22} color="#FA8B02" />
            </Flex>
            <Heading fontWeight={600} fontSize={30}>
              Check your email{" "}
            </Heading>
            <Text color={"#717070"} textAlign={"center"}>
              We sent a password reset link to <br />
              <Text color={"#000000"} fontWeight={500}>
                loremipsum@gmail.com
              </Text>
            </Text>
          </VStack>
          <Stack spacing="6">
            <Button
              variant={"unstyled"}
              color={"#ffffff"}
              _hover={{ opacity: "0.9" }}
              borderRadius={25}
              bg="#FA8B02"
            >
              Open email app{" "}
            </Button>
          </Stack>
          <Stack align={"center"}>
            <Text textAlign={"center"}>
              Didn't receive the email?{" "}
              <Button cursor={'pointer'} variant={'unstyled'} fontWeight={500} color={"#FA8B02"} as={"span"}>
                Click to resend
              </Button>
            </Text>
          </Stack>
        </Stack>
        <Stack align={"center"} justify={"center"} textAlign={"center"} py={5}>
          <Link
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            _hover={{ color: "#ff7300" }}
            fontWeight={400}
            color={"#333333c5"}
            to={"/login"}
            as={RouterLink}
          >
            <IoIosArrowRoundBack fontSize={20} />
            <Text mx={2}>Back to Login</Text>
          </Link>
        </Stack>
      </Box>
    </Stack>
  </Container>
);
