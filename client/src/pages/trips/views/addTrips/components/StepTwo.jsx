import React from "react";
import { CustomFormControl } from "../../../../../components/form/customFormControl";
import { Grid, GridItem, Icon } from "@chakra-ui/react";
import { MdGroups } from "react-icons/md";

export const StepTwo = ({ formikProps }) => {
  const genderOptions = [
    { value: "gender", label: "الجنس", selected: true, disabled: true },
    { value: "All", label: "الكل" },
    { value: "Male", label: "ذكر" },
    { value: "Female", label: "انثى" },
  ];
  const ageRangeOptions = [
    { value: "ageRange", label: "نطاق العمر", selected: true, disabled: true },
    { value: "all", label: "الكل" },
    { value: ">18", label: ">18" },
    { value: "18-30", label: "18-30" },
    { value: ">30", label: ">30" },
    { value: "30-50", label: "30-50" },
    { value: ">50", label: ">50" },
  ];
  const transportOptions = [
    {
      value: "transportType",
      label: "نوع النقل",
      selected: true,
      disabled: true,
    },
    { value: "others", label: "طرق أخرى" },
    { value: "walking", label: "المشي" },
    { value: "car", label: "سيارة" },
    { value: "bus", label: "حافلة" },
    { value: "train", label: "قطار" },
    { value: "bicycle", label: "دراجة" },
    { value: "motorcycle", label: "دراجة نارية" },
    { value: "airplane", label: "طائرة" },
    { value: "helicopter", label: "هليكوبتر" },
    { value: "truck", label: "شاحنة" },
    { value: "tram", label: "ترام" },
    { value: "cableCar", label: "تلفريك" },
    { value: "subway", label: "مترو الأنفاق" },
    { value: "boat", label: "قارب" },
    { value: "ship", label: "سفينة" },
    { value: "canoe", label: "زورق" },
    { value: "horse", label: "حصان" },
    { value: "camel", label: "جمل" },
  ];

  return (
    <Grid maxW={"xl"} w={"full"} templateColumns="repeat(1, 1fr)" gap={6}>
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
          InputRightAddonChildren={"Km"}
          type={"number"}
          name="longitude"
          label=" طول المسار"
          formikProps={formikProps}
          isRequired={true}
        />
      </GridItem>
      <GridItem w="100%">
        <CustomFormControl
          pr={10}
          type={"number"}
          name="numberPerson"
          label="عدد الاشخاص"
          formikProps={formikProps}
          isRequired={true}
          InputRightElementChildren={<Icon as={MdGroups} color="gray.500" />}
        />
      </GridItem>
      <GridItem w="100%">
        <CustomFormControl
          type={"select"}
          name="transportType"
          label="نوع النقل "
          SelectOptions={transportOptions}
          selectDefaultValue={"transportType"}
          formikProps={formikProps}
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
          selectDefaultValue={"ageRange"}
          formikProps={formikProps}
        />
      </GridItem>
    </Grid>
  );
};
