import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { CustomFormControl } from "../../../../../components/form/customFormControl";

export const StepThree = ({ formikProps }) => {
  return (
    <Grid maxW={"4xl"} w={"full"} templateColumns="repeat(1, 1fr)" gap={6}>
      <GridItem colSpan={1} w="100%">
        <CustomFormControl
          h={200}
          isRequired={true}
          type={"Textarea"}
          name="description"
          label="وصف الرحلة"
          formikProps={formikProps}
        />
      </GridItem>
    </Grid>
  );
};
