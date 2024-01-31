import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BiKey } from "react-icons/bi";
import { IoIosArrowRoundBack } from "react-icons/io";

export const ForgotPassword = () => (
  <Container
  display={'flex'}
    h={"100%"}
    minH={"100vh"}
    maxW={"xl"}
    justifyContent={"center"}
    alignItems={"center"}
  >
    <Stack
      justify={"center"}
      align={"center"}
      h={"100%"}
      px={{ base: 10, md: 0 }}
      py={{ base: 0, md: 10 }}
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
              Forgot Password
            </Heading>
            <Text color={"#717070"} textAlign={"center"}>
              No worries, we'll send you reset instructions.
            </Text>
          </VStack>
          <Stack spacing="5">
            <FormControl>
              <FormLabel color={"#333333c5"} htmlFor="email">
                Email Address
              </FormLabel>
              <Input
                _focusVisible={{ border: "2px solid #FA8B02" }}
                id="email"
                type="email"
              />
            </FormControl>
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
        <Stack align={"center"} justify={"center"} textAlign={"center"} py={5}>
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
