import { Checkbox, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { CustomFormControl } from "../../../../../components/form/customFormControl";

export const StepOne = ({ formikProps }) => {
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
          InputRightAddonChildren={"DZD"}
          type={formikProps.values.price === "Free"?"text":"number"}
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
