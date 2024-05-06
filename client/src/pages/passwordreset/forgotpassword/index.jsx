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
  useColorModeValue,
} from "@chakra-ui/react";
import { BiKey } from "react-icons/bi";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { CheckEmail } from "../checkemail";
import { useMutation } from "@apollo/client";
import { Form, Formik } from "formik";
import { SendEmailCode } from "./../../../api/user/mutation";
import { validationSchema } from "./validationSchema";
import { CustomFormControl } from "./../../../components/form/customFormControl";
import { AlertMessage } from "./../../../components/alert/index";

export const ForgotPassword = () => {
  const [SendMail, setSendMail] = useState(false);
  const [email, setemail] = useState(null);
  const [forgetPassword, { loading, error }] = useMutation(SendEmailCode);

  const HandleSendEmail = async (values) => {
    try {
      const data = await forgetPassword({
        variables: { input: values },
      });
      if (data) {
        setemail(values);
        setSendMail(true);
      }
    } catch (errors) {
      console.log(errors);
    }
  };

  return !SendMail ? (
    <Container
      display={"flex"}
      h={"100%"}
      minH={"100vh"}
      maxW={"md"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Formik
        initialValues={{ email: "" }}
        validationSchema={validationSchema}
        onSubmit={HandleSendEmail}
      >
        {(formikProps) => (
          <Form>
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
                      <BiKey fontSize={22} color="#FA8B02" />
                    </Flex>
                    <Heading fontWeight={600} fontSize={30}>
                      هل نسيت كلمة السر
                    </Heading>
                    <Text
                      color={useColorModeValue("#333333c5", "#ffffff")}
                      textAlign={"center"}
                    >
                      لا تقلق، سوف نرسل لك تعليمات إعادة التعيين.
                    </Text>
                  </VStack>
                  <Stack justify={"center"} align={"center"} w={"full"}>
                    {error?.message ===
                    "User with this email doesn't exist." ? (
                      <AlertMessage type={"forgotPasswordInvalidEmail"} />
                    ) : (
                      error?.message && <AlertMessage type={"server"} />
                    )}
                  </Stack>
                  <Stack w={"sm"} spacing="5">
                    <CustomFormControl
                      type={"email"}
                      name="email"
                      placeholder="البريد الالكتروني"
                      label="البريد الالكتروني"
                      formikProps={formikProps}
                    />
                  </Stack>
                  <Stack spacing="6">
                    <Button
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      variant={"unstyled"}
                      color={"#ffffff"}
                      _hover={{ opacity: "0.9" }}
                      borderRadius={25}
                      bg="#FA8B02"
                      type="submit"
                      isLoading={loading}
                    >
                      إعادة تعيين كلمة المرور
                    </Button>
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
          </Form>
        )}
      </Formik>
    </Container>
  ) : (
    <CheckEmail HandleSendEmail={HandleSendEmail} email={email} />
  );
};
