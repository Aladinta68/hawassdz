import { Checkbox, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { CustomFormControl } from "../../../../../components/form/customFormControl";
import {
  FaGlobe,
  FaMountain,
  FaFilm,
  FaUmbrellaBeach,
  FaGamepad,
  FaUtensils,
  FaCompass,
  FaHistory,
  FaSun,
  FaLeaf,
} from "react-icons/fa";
export const StepOne = ({ formikProps }) => {
  const tripTypes = [
    {
      value: "نوع الرحلة",
      label: "نوع الرحلة",
      selected: true,
      disabled: true,
    },
    {
      value: "جولات ثقافية",
      label: "جولات ثقافية",
      icon: FaGlobe,
      color: "blue.500",
    },
    {
      value: "رحلات المغامرة والتسلق",
      label: "رحلات المغامرة والتسلق",
      icon: FaMountain,
      color: "green.500",
    },
    {
      value: "تجارب السينما",
      label: "تجارب السينما",
      icon: FaFilm,
      color: "purple.500",
    },
    {
      value: "الإقامة الاستجمامية",
      label: "الإقامة الاستجمامية",
      icon: FaUmbrellaBeach,
      color: "teal.500",
    },
    {
      label: "مغامرات و الألعاب",
      value: "مغامرات و الألعاب",
      icon: FaGamepad,
      color: "orange.500",
    },
    {
      label: "جولات الطعام",
      value: "جولات الطعام",
      icon: FaUtensils,
      color: "pink.500",
    },
    {
      label: "سفاري الصحراء",
      value: "سفاري الصحراء",
      icon: FaCompass,
      color: "yellow.500",
    },
    {
      value: "رحلات تاريخية",
      label: "رحلات تاريخية",
      icon: FaHistory,
      color: "cyan.500",
    },
    {
      label: "الشواطئ",
      value: "الشواطئ",
      icon: FaSun,
      color: "red.500",
    },
  ];
  const genderOptions = [
    { value: "gender", label: "الجنس", selected: true, disabled: true },
    { value: "All", label: "الكل" },
    { value: "Male", label: "ذكر" },
    { value: "Female", label: "انثى" },
  ];
  const handleFreePriceChange = (event) => {
    if (event.target.checked) {
      formikProps.setFieldValue("price", "Free");
    } else {
      formikProps.setFieldValue("price", "");
    }
  };
  return (
    <Grid maxW={"xl"} w={"full"} templateColumns="repeat(1, 1fr)" gap={6}>
      <GridItem w="100%">
        <CustomFormControl
          type={"text"}
          name="name"
          label="عنوان الرحلة او الفعالية"
          placeholder="عنوان الرحلة او الفعالية"
          formikProps={formikProps}
          isRequired={true}
        />
      </GridItem>
      <GridItem w="100%">
        <CustomFormControl
          type={"select"}
          name="type"
          label=" نوع الرحلة او الفعالية"
          SelectOptions={tripTypes}
          selectDefaultValue={"نوع الرحلة"}
          formikProps={formikProps}
        />
      </GridItem>
      <GridItem w="100%">
        <CustomFormControl
          type={"text"}
          name="destination"
          label="الوجهة او المكان"
          placeholder=" الوجهة"
          formikProps={formikProps}
          isRequired={true}
        />
      </GridItem>

      <GridItem w="100%">
        <CustomFormControl
          InputRightAddonChildren={"DZD"}
          type={formikProps.values.price === "Free" ? "text" : "number"}
          name="price"
          label="السعر"
          formikProps={formikProps}
          isRequired={true}
          isDisabled={formikProps.values.price === "Free"}
        />
        <Checkbox
          defaultChecked={formikProps.values.price === "Free"}
          mt={2}
          onChange={handleFreePriceChange}
        >
          مجاني
        </Checkbox>
      </GridItem>
    </Grid>
  );
};
