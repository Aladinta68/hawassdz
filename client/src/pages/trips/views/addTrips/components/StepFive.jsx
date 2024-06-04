import { Grid, GridItem, Icon } from "@chakra-ui/react";
import React from "react";
import { CustomFormControl } from "../../../../../components/form/customFormControl";
import { PhoneIcon } from "@chakra-ui/icons";
import { MdEmail } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";
import { FaFacebook } from 'react-icons/fa6';

export const StepFive = ({ formikProps }) => {
  return (
    <Grid w={"full"} maxW={"lg"} templateColumns="repeat(1, 1fr)" gap={6}>
      <GridItem w="100%">
        <CustomFormControl
          pr={10}
          InputRightElementChildren={<PhoneIcon color="gray.400" />}
          type={"number"}
          name="phone"
          label="رقم الهاتف"
          formikProps={formikProps}
          isRequired={true}
        />
      </GridItem>
      <GridItem w="100%">
        <CustomFormControl
          pr={10}
          InputRightElementChildren={<Icon as={MdEmail} color="gray.400" />}
          type={"text"}
          name="email"
          label="الامايل"
          formikProps={formikProps}
        />
      </GridItem>
      <GridItem w="100%">
        <CustomFormControl
          pr={10}
          InputRightElementChildren={<Icon as={TbWorldWww} color="gray.400" />}
          type={"text"}
          name="website"
          label="الموقع الالكتروني"
          formikProps={formikProps}
        />
      </GridItem>
      <GridItem w="100%">
        <CustomFormControl
          pr={10}
          InputRightElementChildren={<Icon as={FaFacebook} color="gray.400" />}
          type={"text"}
          name="facebook"
          label="الفايسبوك"
          formikProps={formikProps}
        />
      </GridItem>
    </Grid>
  );
};
