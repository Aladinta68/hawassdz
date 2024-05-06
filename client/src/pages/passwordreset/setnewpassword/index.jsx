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
import { SuccessPassword } from "../success";
import { Link as RouterLink } from "react-router-dom";
import { Form, Formik } from "formik";
import { CustomFormControl } from "./../../../components/form/customFormControl";
import { validationSchema } from "./validationSchema";

export const Setnewpassword = () => {
  const [Reseted, setReseted] = useState(false);
  const HandleResetpassword = () => {
    setReseted(true);
  };
  return !Reseted ? (
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
        <Formik
          initialValues={{ password: "", confirmedPassword: "" }}
          validationSchema={validationSchema}
          onSubmit={HandleResetpassword}
        >
          {(formikProps) => (
            <Form>
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
                      تعيين كلمة مرور جديدة{" "}
                    </Heading>
                    <Text
                      color={useColorModeValue("#717070", "#ffffff")}
                      textAlign={"center"}
                    >
                      يجب أن تكون كلمة المرور الجديدة مختلفة عن كلمات المرور
                      المستخدمة سابقًا.
                    </Text>
                  </VStack>
                  <Stack spacing="5">
                    <CustomFormControl
                      type={"password"}
                      name="password"
                      label="كلمة المرور الجديدة"
                      placeholder="كلمة المرور الجديدة"
                      formikProps={formikProps}
                    />
                  </Stack>
                  <Stack spacing="5">
                    <CustomFormControl
                      type={"password"}
                      name="confirmedPassword"
                      placeholder="تأكيد كلمة المرور الجديدة"
                      label="تأكيد كلمة المرور الجديدة"
                      formikProps={formikProps}
                    />
                  </Stack>
                  <Stack spacing="6">
                    <Button
                      variant={"unstyled"}
                      color={"#ffffff"}
                      _hover={{ opacity: "0.9" }}
                      borderRadius={25}
                      bg="#FA8B02"
                      type="submit"
                    >
                      إعادة تعيين كلمة المرور
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
                    as={RouterLink}
                    to={"/login"}
                  >
                    <IoIosArrowRoundBack fontSize={20} />
                    <Text
                      color={useColorModeValue("#717070", "#ffffff")}
                      mx={2}
                    >
                      العودة لتسجيل الدخول
                    </Text>
                  </Link>
                </Stack>
              </Box>
            </Form>
          )}
        </Formik>
      </Stack>
    </Container>
  ) : (
    <SuccessPassword />
  );
};
