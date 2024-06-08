import { Formik, Form } from "formik";
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
import { useMutation } from "@apollo/client";
import Cookies from "js-cookie";
import { validationSchema } from "./validationSchema";
import { CustomFormControl } from "../../../components/form/customFormControl";
import { AlertMessage } from "./../../../components/alert/index";
import { LOGIN } from "./../../../api/user/mutation";

const LoginForm = () => {
  const navigate = useNavigate();
  const [login, { loading, error }] = useMutation(LOGIN);
  const handelSubmit = async (values) => {
    try {
      const data = await login({
        variables: { input: values },
      });
      if (data) {
        const AcessToken = data.data.login.accessToken;
        const type = data.data.login.type;
        Cookies.set("accessToken", AcessToken, {
          sameSite: "strict",
          secure: true,
        });
        if (type === "ADMIN") {
        } else if (type === "USER") {
          navigate("/");
        }
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
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handelSubmit}
      >
        {(formikProps) => (
          <Form>
            <Stack spacing="6">
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
                {error?.message === "Invalid Credentials" ? (
                  <AlertMessage type={"login"} />
                ) : (
                  error?.message && <AlertMessage type={"server"} />
                )}
              </Stack>
              <Stack spacing="5">
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
                <Checkbox name="rememberMe">تذكرنى</Checkbox>
                <Link
                  fontWeight={500}
                  _hover={{ textDecoration: "none" }}
                  to={"/forgotpassword"}
                  as={RouterLink}
                >
                  هل نسيت كلمة السر ؟
                </Link>
              </HStack>
              <Stack spacing="6">
                <Button
                  type="submit"
                  color={"#ffffff"}
                  _hover={{ opacity: "0.9" }}
                  borderRadius={25}
                  bg="#FA8B02"
                  isLoading={loading}
                >
                  تسجيل الدخول{" "}
                </Button>
                <HStack>
                  <Divider />
                  <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                    أو الاستمرار مع{" "}
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
                  الدخول مع جوجل
                </Button>
              </Stack>
            </Stack>
            <Stack textAlign={"center"} py={5}>
              <Text>
                ليس لديك حساب ؟
                <Link
                  px={1}
                  to={"/signup"}
                  as={RouterLink}
                  _hover={{ color: "#ff7300" }}
                  fontWeight={500}
                  color={"#FA8B02"}
                >
                  {" "}
                  سجل الان
                </Link>
              </Text>
            </Stack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default LoginForm;
