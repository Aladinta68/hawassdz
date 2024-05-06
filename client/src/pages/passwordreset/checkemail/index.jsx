import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Link,
  PinInput,
  PinInputField,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { IoMailOutline } from "react-icons/io5";
import { IoIosArrowRoundBack } from "react-icons/io";
import { VerifyCodePin } from "../../../api/user/mutation";
import { useMutation } from "@apollo/client";

export const CheckEmail = ({ email, HandleSendEmail }) => {
  const navigate = useNavigate();
  const [verifyCodePin, { error }] = useMutation(VerifyCodePin);
  const HandleVerifyCodepin = async (value) => {
    const sendemail = email && email.email;
    try {
      const data = await verifyCodePin({
        variables: { input: { email: sendemail, codePIN: value } },
      });
      if (data.data.verifyCodePin) {
        navigate("/setnewpassword");
      }
      if (error) {
        console.log(error);
      }
    } catch (errors) {
      console.log(errors);
    }
  };

  return (
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
              <Heading fontWeight={500} fontSize={25}>
                أدخل الرمز المرسل إلى بريدك الإلكتروني
              </Heading>
              <Text
                color={useColorModeValue("#717070", "#ffffff")}
                textAlign={"center"}
              >
                لقد أرسلنا رمز إعادة التعيين إلى
                <br />
                <Text
                  color={useColorModeValue("#333333c5", "#ffffff")}
                  fontWeight={500}
                >
                  {email && email.email}
                </Text>
              </Text>
            </VStack>
            <Stack spacing="6">
              <HStack w={"100%"} align={"center"} justify={"center"}>
                <PinInput
                  onChange={(e) => HandleVerifyCodepin(e)}
                  size="lg"
                  otp
                >
                  {[...Array(6)].map((_, index) => (
                    <PinInputField key={index} />
                  ))}
                </PinInput>
              </HStack>
            </Stack>
            <Stack align={"center"}>
              <Text textAlign={"center"}>
                لم تتلق الرمز؟{" "}
                <Button
                  cursor={"pointer"}
                  variant={"unstyled"}
                  fontWeight={500}
                  color={"#FA8B02"}
                  as={"span"}
                  onClick={() => HandleSendEmail(email)}
                >
                  انقر لإعادة الإرسال
                </Button>
              </Text>
            </Stack>
          </Stack>
          <Stack
            align={"center"}
            justify={"center"}
            textAlign={"center"}
            py={5}
          >
            <Link
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              _hover={{ color: "#ff7300" }}
              fontWeight={400}
              color={useColorModeValue("#333333c5", "#ffffff")}
              to={"/login"}
              as={RouterLink}
            >
              <IoIosArrowRoundBack fontSize={20} />
              <Text mx={2}>العودة إلى تسجيل الدخول</Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};
