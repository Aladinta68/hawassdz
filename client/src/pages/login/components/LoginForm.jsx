import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
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
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { PasswordField } from "../../../components/form/PasswordField";
import { GoogleIcon } from "../../../assets/icons-jsx/ProviderIcons";
import { Logo } from "../../../assets/icons-jsx/Logo";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Cookies from "js-cookie";
import { LOGIN } from "../../../graphQL/mutation/user";

const LoginForm = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("بريد إلكتروني خاطئ")
      .required("البريد الالكتروني مطلوب"),
    password: Yup.string().required("كلمة المرور مطلوبة"),
  });
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
        {(errors, touched) => (
          <Form>
            <Stack spacing="6">
              <Stack w={"100%"} align={"center"} justify={"center"}>
                <Link to={"/"} as={RouterLink}>
                  <Logo color1={useColorModeValue("#000000","#ffffff")} width={"150px"} color2={"#FA8B02"} />
                </Link>
              </Stack>
              <Stack spacing="5">
                <FormControl>
                  <FormLabel color={useColorModeValue("#333333c5","#ffffffc5")} htmlFor="email">
                    البريد الالكتروني
                  </FormLabel>
                  <Field
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
                    border={errors.errors.email && "2px solid red !important"}
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
                  border={
                    errors.errors.password &&
                    "2px solid red !important"
                  }
                  errors={errors}
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
                  border={useColorModeValue("1.3px solid #3333333d","1.3px solid #dddada3d")}
                  fontWeight={500}
                  color={useColorModeValue("#333333a3","#ffffffa3")}
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
