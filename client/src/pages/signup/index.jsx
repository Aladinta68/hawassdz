import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { PasswordField } from "../../components/form/PasswordField";
import { GoogleIcon } from "../../assets/icons-jsx/ProviderIcons";
import { Logo } from "../../assets/icons-jsx/Logo";
import { Link as RouterLink } from "react-router-dom";

export const Signup = () => (
  <Container
    minH={"100vh"}
    display={"flex"}
    alignItems={"center"}
    justifyContent={"center"}
    h={"100%"}
    maxW={"md"}
    justify={"center"}
    align={"center"}
  >
    <Stack
      w={"100%"}
      px={{ base: 10, md: 0 }}
      py={{ base: 0, md: 0 }}
      spacing="8"
    >
      <Box
        py={{
          base: "0",
          sm: "8",
        }}
      >
        <Stack spacing="4">
          <Stack w={"100%"} align={"center"} justify={"center"}>
            <Link to={"/"} as={RouterLink}>
              <Logo color1={"#000000"} width={"100px"} color2={"#DF6951"} />
            </Link>
          </Stack>
          <Stack spacing="4">
            <FormControl>
              <FormLabel color={"#333333c5"} htmlFor="Name">
                Name 
              </FormLabel>
              <Input
                _placeholder={{
                  fontWeight: 300,
                }}
                placeholder="Name "
                _focusVisible={{ border: "2px solid #FA8B02" }}
                id="Name"
                type="text"
              />
            </FormControl>
            <FormControl>
              <FormLabel color={"#333333c5"} htmlFor="email">
                Email
              </FormLabel>
              <Input
                _placeholder={{
                  fontWeight: 300,
                }}
                placeholder="Email address "
                _focusVisible={{ border: "2px solid #FA8B02" }}
                id="email"
                type="email"
              />
            </FormControl>
            <PasswordField />
          </Stack>
          <HStack justify="space-between">
            <Checkbox>
              <Text>
                I agree with{" "}
                <Text color={"#FA8B02"} as={"span"}>
                  Terms
                </Text>{" "}
                and{" "}
                <Text color={"#FA8B02"} as={"span"}>
                  Privacy
                </Text>
              </Text>
            </Checkbox>
          </HStack>
          <Stack spacing="6">
            <Button
              color={"#ffffff"}
              _hover={{ opacity: "0.9" }}
              borderRadius={25}
              bg="#FA8B02"
            >
              Sign Up
            </Button>
            <HStack>
              <Divider />
              <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                or
              </Text>
              <Divider />
            </HStack>
            <Button
              border={"1.3px solid #3333333d"}
              fontWeight={500}
              color={"#333333a3"}
              variant={"unstyled"}
              _hover={{ backgroundColor: "#3333330f" }}
              borderRadius={25}
              leftIcon={<GoogleIcon />}
            >
              Sign Up with Google
            </Button>
          </Stack>
        </Stack>
        <Stack textAlign={"center"} py={5}>
          <Text>
            Already have an account ?
            <Link
              _hover={{ color: "#ff7300" }}
              fontWeight={500}
              color={"#FA8B02"}
              to={"/login"}
              as={RouterLink}
            >
              Log In{" "}
            </Link>
          </Text>
        </Stack>
      </Box>
    </Stack>
  </Container>
);
