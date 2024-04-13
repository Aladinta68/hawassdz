import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Link,
  Stack,
  Alert,
  Text,
  AlertIcon,
  useColorModeValue,
} from "@chakra-ui/react";
import { PasswordField } from "../../../components/form/PasswordField";
import { GoogleIcon } from "../../../assets/icons-jsx/ProviderIcons";
import { Logo } from "../../../assets/icons-jsx/Logo";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { REGISTER } from "../../../graphQL/mutation/user";
import Cookies from "js-cookie";

export const SignupForm = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("الإسم الأول مطلوب"),
    lastName: Yup.string().required("إسم العائلة مطلوب"),
    email: Yup.string()
      .email("بريد إلكتروني خاطئ")
      .required("البريد الالكتروني مطلوب"),
    password: Yup.string()
      .min(6, "يجب أن تتكون كلمة المرور من 6 أحرف على الأقل")
      .required("كلمة المرور مطلوبة"),
  });
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
        {(errors) => (
          <Form>
            <Stack spacing="4">
              <Stack w={"100%"} align={"center"} justify={"center"}>
                <Link to={"/"} as={RouterLink}>
                <Logo color1={useColorModeValue("#000000","#ffffff")} width={"150px"} color2={"#FA8B02"} />
                </Link>
              </Stack>
              <Stack justify={"center"} align={"center"} w={"full"}>
                {error?.message === "User with this email doesn't exist." && (
                  <Alert status="error">
                    <AlertIcon />
                    هذا البريد الإلكتروني غير موجود.
                  </Alert>
                )}
              </Stack>
              <Stack spacing="4">
                <FormControl>
                  <FormLabel color={useColorModeValue("#333333c5","#ffffffc5")}>الاسم الأول</FormLabel>
                  <Field
                    border={
                      errors.errors.firstName && "2px solid red !important"
                    }
                    as={Input}
                    _placeholder={{
                      fontWeight: 300,
                      color:useColorModeValue("","#ffffffc5")

                    }}
                    placeholder="الاسم الأول"
                    _focusVisible={{ border: "2px solid #FA8B02" }}
                    id="firstName"
                    name="firstName"
                    type="text"
                  />
                  <Stack color={"red"} w={"full"} align={"flex-start"}>
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="error-message"
                    />
                  </Stack>
                </FormControl>
                <FormControl>
                  <FormLabel color={useColorModeValue("#333333c5","#ffffffc5")} htmlFor="email">
                    اسم العائلة
                  </FormLabel>
                  <Field
                    border={
                      errors.errors.lastName && "2px solid red !important"
                    }
                    as={Input}
                    _placeholder={{
                      fontWeight: 300,
                      color:useColorModeValue("","#ffffffc5")

                    }}
                    placeholder="اسم العائلة"
                    _focusVisible={{ border: "2px solid #FA8B02" }}
                    id="lastName"
                    name="lastName"
                    type="text"
                  />
                  <Stack color={"red"} w={"full"} align={"flex-start"}>
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="error-message"
                    />
                  </Stack>
                </FormControl>
                <FormControl>
                  <FormLabel color={useColorModeValue("#333333c5","#ffffffc5")} htmlFor="email">
                    البريد الالكتروني
                  </FormLabel>
                  <Field
                    border={errors.errors.email && "2px solid red !important"}
                    as={Input}
                    _placeholder={{
                      fontWeight: 300,
                      color:useColorModeValue("","#ffffffc5")

                    }}
                    placeholder="البريد الالكتروني"
                    _focusVisible={{ border: "2px solid #FA8B02" }}
                    id="email"
                    name="email"
                    type="email"
                  />
                  <Stack color={"red"} w={"full"} align={"flex-start"}>
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error-message"
                    />
                  </Stack>
                </FormControl>
                <PasswordField
                  border={errors.errors.password && "2px solid red !important"}
                  errors={errors}
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
                  border={useColorModeValue("1.3px solid #3333333d","1.3px solid #dddada3d")}
                  fontWeight={500}
                  color={useColorModeValue("#333333a3","#ffffffa3")}
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
