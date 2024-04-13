import { Container, Stack } from "@chakra-ui/react";
import  LoginForm  from "./components/LoginForm";
export const Login = () => (
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
      <LoginForm />
    </Stack>
  </Container>
);
