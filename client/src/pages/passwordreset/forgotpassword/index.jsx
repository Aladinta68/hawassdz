import * as Yup from "yup";
import {
  Alert,
  AlertIcon,
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
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { CheckEmail } from "../checkemail";
import { useMutation } from "@apollo/client";
import { SendEmailCode } from "../../../graphQL/mutation/user";
import { ErrorMessage, Field, Form, Formik } from "formik";

export const ForgotPassword = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("بريد إلكتروني خاطئ")
      .required("البريد الالكتروني مطلوب"),
  });
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
        {(errors) => (
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
                    <Text color={"#717070"} textAlign={"center"}>
                      لا تقلق، سوف نرسل لك تعليمات إعادة التعيين.
                    </Text>
                  </VStack>
                  <Stack justify={"center"} align={"center"} w={"full"}>
                    {error?.message ===
                      "User with this email doesn't exist." && (
                      <Alert status="error">
                        <AlertIcon />
                        هذا البريد الإلكتروني غير موجود.
                      </Alert>
                    )}
                  </Stack>
                  <Stack w={"sm"} spacing="5">
                    <FormControl w={"100%"}>
                      <FormLabel color={"#333333c5"} htmlFor="email">
                        البريد الالكتروني
                      </FormLabel>
                      <Field
                        as={Input}
                        _placeholder={{
                          fontWeight: 300,
                        }}
                        placeholder="البريد الالكتروني"
                        _focusVisible={{ border: "2px solid #FA8B02" }}
                        id="email"
                        name="email"
                        type="email"
                        border={
                          errors.errors.email && "2px solid red !important"
                        }
                      />
                      <Stack color={"red"} w={"full"} align={"flex-start"}>
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="error-message"
                        />
                      </Stack>
                    </FormControl>
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
                    color={"#333333c5"}
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
