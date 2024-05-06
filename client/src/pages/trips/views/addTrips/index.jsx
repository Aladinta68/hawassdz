import {
  Button,
  Checkbox,
  Container,
  Grid,
  GridItem,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { CustomFormControl } from "./../../../../components/form/customFormControl";
import { validationSchema } from "./validationSchema";

export const AddTripPage = () => {
  const handleSubmit = async (values) => {
    console.log(values);
  };
  const genderOptions = [
    { value: "gender", label: "الجنس", selected: true, disabled: true },
    { value: "Male", label: "ذكر" },
    { value: "Female", label: "انثى" },
  ];
  const ageRangeOptions = [
    { value: "all", label: "الكل", selected: true },
    { value: ">18", label: ">18" },
    { value: "18-30", label: "18-30" },
    { value: ">30", label: ">30" },
    { value: "30-50", label: "30-50" },
    { value: ">50", label: ">50" },
  ];

  const [freePrice, setfreePrice] = useState(false);
  return (
    <Container maxW={"8xl"}>
      <VStack spacing={10} py={50} align={"flex-start"} w={"70%"}>
        <Text textDecor={"underline"} fontSize={20} fontWeight={500}>
          / اضافة رحلة
        </Text>
        <Formik
          initialValues={""}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formikProps) => (
            <Form style={{ width: "100%" }}>
              <VStack w={"full"} align={"flex-start"} spacing={10}>
                <Grid w={"full"} templateColumns="repeat(2, 1fr)" gap={6}>
                  <GridItem w="100%">
                    <CustomFormControl
                      type={"text"}
                      name="name"
                      label="عنوان الرحلة"
                      placeholder="عنوان الرحلة"
                      formikProps={formikProps}
                      isRequired={true}
                    />
                  </GridItem>
                  <GridItem w="100%">
                    <CustomFormControl
                      type={"text"}
                      name="type"
                      label=" نوع الرحلة"
                      placeholder="رحلة سياحية, تسلق جبال ...."
                      formikProps={formikProps}
                      isRequired={true}
                    />
                  </GridItem>
                  <GridItem w="100%">
                    <CustomFormControl
                      type={"text"}
                      name="destination"
                      label=" الوجهة"
                      placeholder=" الوجهة"
                      formikProps={formikProps}
                      isRequired={true}
                    />
                  </GridItem>
                  <GridItem w="100%">
                    <CustomFormControl
                      type={"number"}
                      name="numberPerson"
                      label="عدد الاشخاص"
                      formikProps={formikProps}
                      isRequired={true}
                    />
                  </GridItem>
                  <GridItem w="100%">
                    <CustomFormControl
                      type={"date"}
                      name="dateDepart"
                      label="تاريخ الاقلاع"
                      formikProps={formikProps}
                      isRequired={true}
                    />
                  </GridItem>
                  <GridItem w="100%">
                    <CustomFormControl
                      type={"date"}
                      name="dateArrive"
                      label=" تاريخ العودة"
                      formikProps={formikProps}
                      isRequired={true}
                    />
                  </GridItem>
                  <GridItem w="100%">
                    <CustomFormControl
                      type={"number"}
                      name="longitude"
                      label=" طول المسار"
                      placeholder="20km"
                      formikProps={formikProps}
                      isRequired={true}
                    />
                  </GridItem>
                  <GridItem w="100%">
                    <CustomFormControl
                      type={"text"}
                      name="transportType"
                      label="  نوع النقل "
                      formikProps={formikProps}
                      isRequired={true}
                    />
                  </GridItem>
                  <GridItem w="100%">
                    <CustomFormControl
                      type={"select"}
                      name="gender"
                      label="الجنس"
                      SelectOptions={genderOptions}
                      selectDefaultValue={"gender"}
                      formikProps={formikProps}
                    />
                  </GridItem>
                  <GridItem w="100%">
                    <CustomFormControl
                      type={"select"}
                      name="ageRange"
                      label="نطاق العمر"
                      SelectOptions={ageRangeOptions}
                      selectDefaultValue={"all"}
                      formikProps={formikProps}
                    />
                  </GridItem>
                  <GridItem w="100%">
                    <HStack
                      w={"full"}
                      justify={"flex-start"}
                      align={"flex-end"}
                    >
                      {" "}
                      <CustomFormControl
                        type={"text"}
                        name="price"
                        label="السعر"
                        formikProps={formikProps}
                        isRequired={true}
                        isDisabled={freePrice}
                      />
                      <Stack
                        px={10}
                        pb={2}
                        align={"flex-start"}
                        justify={"flex "}
                        w={"70%"}
                      >
                        <Checkbox
                          defaultChecked={freePrice}
                          onChange={(e) => setfreePrice(e.target.checked)}
                          size={"lg"}
                        >
                          مجاني
                        </Checkbox>
                      </Stack>
                    </HStack>
                  </GridItem>
                  <GridItem colSpan={1} w="100%">
                    <CustomFormControl
                      type={"file"}
                      name="image"
                      label="صور"
                      formikProps={formikProps}
                    />
                  </GridItem>
                  <GridItem colSpan={1} w="100%">
                    <CustomFormControl
                      isRequired={true}
                      type={"Textarea"}
                      name="description"
                      label="وصف الرحلة"
                      formikProps={formikProps}
                    />
                  </GridItem>
                  <GridItem colSpan={2} h={10} />
                  <GridItem w="100%">
                    <CustomFormControl
                      type={"text"}
                      name="phone"
                      label="رقم الهاتف"
                      formikProps={formikProps}
                      isRequired={true}
                    />
                  </GridItem>
                  <GridItem w="100%">
                    <CustomFormControl
                      type={"text"}
                      name="email"
                      label="الامايل"
                      formikProps={formikProps}
                    />
                  </GridItem>
                  <GridItem w="100%">
                    <CustomFormControl
                      type={"text"}
                      name="website"
                      label="الموقع الالكتروني"
                      formikProps={formikProps}
                    />
                  </GridItem>
                  <GridItem w="100%">
                    <CustomFormControl
                      type={"text"}
                      name="facebook"
                      label="الفايسبوك"
                      formikProps={formikProps}
                    />
                  </GridItem>
                </Grid>
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
                  اضافة
                </Button>
              </VStack>
            </Form>
          )}
        </Formik>
      </VStack>
    </Container>
  );
};
