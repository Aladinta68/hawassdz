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
import { PasswordField } from "./components/Passwordfield";
import { BiKey } from "react-icons/bi";
import { IoIosArrowRoundBack } from "react-icons/io";

export const Setnewpassword = () => {
  return (
    <Container minH={'100vh'} h={'100%'} display={'flex'} maxW={"xl"} justifyContent={"center"} alignItems={"center"}>
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
                <BiKey fontSize={22} color="#FA8B02" />
              </Flex>
              <Heading fontWeight={600} fontSize={30}>
                Set New Password{" "}
              </Heading>
              <Text color={"#717070"} textAlign={"center"}>
                Your new password must be different from previously used
                passwords.
              </Text>
            </VStack>
            <Stack spacing="5">
              <PasswordField label="New Password" />
            </Stack>
            <Stack spacing="5">
              <PasswordField label="Confirm Password" />
            </Stack>
            <Stack spacing="6">
              <Button
                variant={"unstyled"}
                color={"#ffffff"}
                _hover={{ opacity: "0.9" }}
                borderRadius={25}
                bg="#FA8B02"
              >
                Reset Password
              </Button>
            </Stack>
          </Stack>
          <Stack textAlign={"center"} py={5}>
            <Link
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              _hover={{ color: "#ff7300" }}
              fontWeight={400}
              color={"#333333c5"}
            >
              <IoIosArrowRoundBack fontSize={20} />
              <Text mx={2}>Back to Login</Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};
