import { Button, Stack, Text, VStack, useToast } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { CustomFormControl } from "../../../../components/form/customFormControl";
import { validationSchema } from "./validationSchema";
import { useMutation, useQuery } from "@apollo/client";
import Cookies from "js-cookie";
import { GetUserInformation } from "../../../../api/user/query";
import { UpdateUser } from "../../../../api/user/mutation";

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
  const accessToken = Cookies.get("accessToken");
  const toast = useToast();

  const [updateUser, { loading }] = useMutation(UpdateUser, {
    refetchQueries: [
      {
        query: GetUserInformation,
        context: {
          headers: {
            Authorization: accessToken,
          },
        },
      },
    ],
    awaitRefetchQueries: true,
  });

  const handleSubmit = async (values) => {
    try {
      const result = await updateUser({
        variables: { input: values },
        context: {
          headers: {
            Authorization: accessToken,
          },
        },
      });
      if (result) {
        toast({
          title: "",
          description: "تم تعديل الحساب بنجاح",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };
  const initialValues = {
    firstName: ProfileData?.firstName,
    lastName: ProfileData?.lastName,
    gender: ProfileData?.gender,
    phone: ProfileData?.phone,
    dateOfBirth: ProfileData?.dateOfBirth,
  };
  const genderOptions = [
    { value: "gender", label: "الجنس", disabled: true },
    { value: "Male", label: "ذكر" },
    { value: "Female", label: "انثى" },
  ];
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
                name="phone"
                label="رقم الهاتف"
                formikProps={formikProps}
              />
              <CustomFormControl
                type={"date"}
                name="dateOfBirth"
                label="تاريخ الميلاد"
                formikProps={formikProps}
              />
              <CustomFormControl
                type={"select"}
                name="gender"
                label="الجنس"
                SelectOptions={genderOptions}
                selectDefaultValue={ProfileData.gender || "gender"}
                formikProps={formikProps}
              />
              <Button
                isLoading={loading}
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
