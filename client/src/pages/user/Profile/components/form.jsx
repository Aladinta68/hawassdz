import { Button, Stack, Text, VStack } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { CustomFormControl } from "../../../../components/form/customFormControl";
import { validationSchema } from "./validationSchema";
import { useQuery } from "@apollo/client";
import  Cookies  from 'js-cookie';
import { GetUserInformation } from "../../../../api/user/query";

export const ProfileForm = () => {

  const accessToken = Cookies.get("accessToken");

  let ProfileData;
  const { loading, error, data } = useQuery(GetUserInformation, {
    context: {
      headers: {
        Authorization: accessToken,
      },
    },
    skip: !accessToken,
  });
  if (error) {
    console.error(error);
    Cookies.remove("accessToken");
  }
  if (data) {
    ProfileData = data?.getUserByToken;
  }

  return (
    <VStack spacing={5} py={10} px={10} w={"90%"} align={"flex-start"}>
      <Text fontWeight={500} fontSize={17}>
        / الملف الشخصي{" "}
      </Text>
      <MyForm ProfileData={ProfileData} />
    </VStack>
  );
};
const MyForm = ({ ProfileData }) => {
  const handleSubmit = async (values) => {
    console.log(values);
  };
  const initialValues = {
    firstName: ProfileData?.firstName,
    lastName: ProfileData?.lastName,
    phoneNumber: ProfileData?.phoneNumber,
    dateOfBirth: ProfileData?.dateOfBirth,
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formikProps) => (
        <Form style={{ width: "100%" }}>
          <Stack w={{ base: "100%", md: "40%" }} spacing="4">
            <Stack spacing="4">
              <CustomFormControl
                type={"text"}
                name="firstName"
                label="الإسم الأول"
                formikProps={formikProps}
                isRequired={true}
              />
              <CustomFormControl
                type={"text"}
                name="lastName"
                label="إسم العائلة"
                formikProps={formikProps}
                isRequired={true}
              />
              <CustomFormControl
                type={"text"}
                name="phoneNumber"
                label="رقم الهاتف"
                formikProps={formikProps}
              />
              <CustomFormControl
                type={"date"}
                name="dateOfBirth"
                label="تاريخ الميلاد"
                formikProps={formikProps}
              />
              <Button
                bg={"#de9307"}
                fontSize={16}
                fontWeight={500}
                color={"#ffffff"}
                _hover={{
                  opacity: 0.8,
                }}
                w={{ base: "100%", md: "40" }}
                type="submit"
              >
                تعديل
              </Button>
            </Stack>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};
