import {
  Box,
  Button,
  Checkbox,
  Divider,
  HStack,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { GoogleIcon } from "../../../assets/icons-jsx/ProviderIcons";
import { Logo } from "../../../assets/icons-jsx/Logo";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { useMutation } from "@apollo/client";
import Cookies from "js-cookie";
import { REGISTER } from "../../../api/user/mutation";
import { validationSchema } from "./validationSchema";
import { AlertMessage } from "../../../components/alert";
import { CustomFormControl } from "../../../components/form/customFormControl";

export const SignupForm = () => {
  const navigate = useNavigate();
  const [registerUser, { loading, error }] = useMutation(REGISTER);
  const handelSubmit = async (values) => {
    try {
      const data = await registerUser({
        variables: { input: values },
      });
      if (data) {
        const AcessToken = data.data.registerUser.accessToken;
        Cookies.set("accessToken", AcessToken, {
          sameSite: "strict",
          secure: true,
        });
        navigate("/");
      }
    } catch (errors) {
      console.log(errors);
    }
  };
  return (
    <Box
      py={{
        base: "0",
        sm: "8",
      }}
    >
      {" "}
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handelSubmit}
      >
        {(formikProps) => (
          <Form>
            <Stack spacing="4">
              <Stack w={"100%"} align={"center"} justify={"center"}>
                <Link to={"/"} as={RouterLink}>
                  <Logo
                    color1={useColorModeValue("#000000", "#ffffff")}
                    width={"150px"}
                    color2={"#FA8B02"}
                  />
                </Link>
              </Stack>
              <Stack justify={"center"} align={"center"} w={"full"}>
                {error?.message === "Credentials is already registered" ? (
                  <AlertMessage type={"signup"} />
                ) : (
                  error?.message && <AlertMessage type={"server"} />
                )}
              </Stack>
              <Stack spacing="4">
                <CustomFormControl
                  type={"text"}
                  name="firstName"
                  label="الاسم الأول"
                  placeholder="الاسم الأول"
                  formikProps={formikProps}
                />
                <CustomFormControl
                  type={"text"}
                  name="lastName"
                  placeholder="اسم العائلة"
                  label="اسم العائلة"
                  formikProps={formikProps}
                />
                <CustomFormControl
                  type={"email"}
                  name="email"
                  placeholder="البريد الالكتروني"
                  label="البريد الالكتروني"
                  formikProps={formikProps}
                />
                <CustomFormControl
                  type={"password"}
                  name="password"
                  placeholder="كلمة المرور"
                  label="كلمة المرور"
                  formikProps={formikProps}
                />
              </Stack>
              <HStack justify="space-between">
                <Checkbox required>
                  <Text>
                    أنا أتفق مع
                    <Text px={2} color={"#FA8B02"} as={"span"}>
                      الشروط
                    </Text>{" "}
                    و{" "}
                    <Text color={"#FA8B02"} as={"span"}>
                      أحكام
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
                  type="submit"
                  isLoading={loading}
                >
                  تسجيل
                </Button>
                <HStack>
                  <Divider />
                  <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                    أو
                  </Text>
                  <Divider />
                </HStack>
                <Button
                  border={useColorModeValue(
                    "1.3px solid #3333333d",
                    "1.3px solid #dddada3d"
                  )}
                  fontWeight={500}
                  color={useColorModeValue("#333333a3", "#ffffffa3")}
                  variant={"unstyled"}
                  _hover={{ backgroundColor: "#3333330f" }}
                  borderRadius={25}
                  leftIcon={<GoogleIcon />}
                >
                  قم بالتسجيل مع جوجل{" "}
                </Button>
              </Stack>
            </Stack>
            <Stack textAlign={"center"} py={5}>
              <Text>
                هل لديك حساب ؟
                <Link
                  px={1}
                  _hover={{ color: "#ff7300" }}
                  fontWeight={500}
                  color={"#FA8B02"}
                  to={"/login"}
                  as={RouterLink}
                >
                  سجل الدخول{" "}
                </Link>
              </Text>
            </Stack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
