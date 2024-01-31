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
    Input,
    Link,
    Stack,
    Text,
  } from "@chakra-ui/react";
  import { PasswordField } from "./components/PasswordField";
  import { GoogleIcon } from "./components/ProviderIcons";
  
  export const CheckEmail = () => (
    <Container minH={'100vh'} h={'100%'} maxW={"md"} display={'flex'} justifyContent={"center"} alignItems={"center"}>
      <Stack px={{ base: 10, md: 0 }} py={{ base: 0, md: 10 }} spacing="8">
        <Box
          py={{
            base: "0",
            sm: "8",
          }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel color={"#333333c5"} htmlFor="email">
                  Email
                </FormLabel>
                <Input
                  _focusVisible={{ border: "2px solid #FA8B02" }}
                  id="email"
                  type="email"
                />
              </FormControl>
              <PasswordField />
            </Stack>
            <HStack justify="space-between">
              <Checkbox>Remember me</Checkbox>
              <Button variant="text" size="sm">
                Forgot password?
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button
                color={"#ffffff"}
                _hover={{ opacity: "0.9" }}
                borderRadius={25}
                bg="#FA8B02"
              >
                Sign in
              </Button>
              <HStack>
                <Divider />
                <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                  or continue with
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
                Sign In with Google
              </Button>
            </Stack>
          </Stack>
          <Stack textAlign={"center"} py={5}>
            <Text>
              Don’t have an account ?{" "}
              <Link
                _hover={{ color: "#ff7300" }}
                fontWeight={500}
                color={"#FA8B02"}
              >
                Sign Up
              </Link>
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
  