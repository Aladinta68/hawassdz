import {
  Box,
  Button,
  Container,
  VStack,
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  StepIcon,
  StepSeparator,
  useSteps,
  StepNumber,
  StepDescription,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import {
  validationSchemaStepOne,
  validationSchemaStepTwo,
  validationSchemaStepThree,
  validationSchemaStepFour,
  validationSchemaStepFive,
} from "./utils/validationSchemas";
import { StepOne } from "./components/StepOne";
import { StepTwo } from "./components/StepTwo";
import { StepThree } from "./components/StepThree";
import { StepFour } from "./components/StepFour";
import { StepFive } from "./components/StepFive";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { steps } from "./utils/steps";
import { ADD_TRAVEL } from "../../../../api/travel/mutation";
import { useMutation } from "@apollo/client";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { GetALLTravelsByUser, GetTravels } from "../../../../api/travel/query";

const validationSchemas = [
  validationSchemaStepOne,
  validationSchemaStepTwo,
  validationSchemaStepThree,
  validationSchemaStepFour,
  validationSchemaStepFive,
];

export const AddTripPage = () => {
  const [fileSelected, setFileSelected] = useState([]);
  const navigate = useNavigate();

  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });
  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };
  const breakpoint = useBreakpointValue({ base: "base", md: "md" });

  const accessToken = Cookies.get("accessToken");
  const [addTravel, { loading, error }] = useMutation(ADD_TRAVEL, {
    refetchQueries: [
      {
        query: GetALLTravelsByUser,
        context: {
          headers: {
            Authorization: accessToken,
          },
        },
      },
      {
        query: GetTravels,
        variables: {
          page: 1,
          perPage: 4,
          sortBy: "name",
          sortDirection: "asc",
        },
        notifyOnNetworkStatusChange: true,
      },
    ],
  });

  const handleSubmit = async (values) => {
    const myInput = {
      type: values.type,
      transportType: values.transportType,
      price: values.price.toString(),
      numberPerson: values.numberPerson.toString(),
      name: values.name,
      mapLocation: {
        latitude: 0,
        longitude: 0,
      },
      longitude: values.longitude.toString(),
      gender: values.gender,
      files: fileSelected,
      destination: values.destination,
      description: values.description,
      dateDepart: values.dateDepart,
      dateArrive: values.dateArrive,
      contactInfo: {
        website: values?.website,
        phone: values.phone.toString(),
        facebook: values?.facebook,
        email: values?.email,
      },
      ageRange: values.ageRange,
    };
    try {
      const response = await addTravel({
        variables: { input: myInput },
        context: {
          headers: {
            Authorization: accessToken,
          },
        },
      });
      if (response) {
        setFileSelected([]);
        navigate("/my_trips");
      }
      if (loading) {
        console.log(loading);
      }
      if (error) {
        console.log(error);
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <Container maxW={"8xl"}>
      <VStack spacing={10} py={"100px"} align={"flex-start"} w={"full%"}>
        {breakpoint !== "base" && (
          <Stepper size="lg" w={"90%"} index={activeStep}>
            {steps.map((step, index) => (
              <Step key={index}>
                <StepIndicator>
                  <StepStatus
                    complete={<StepIcon />}
                    incomplete={<StepNumber />}
                    active={<StepNumber />}
                  />
                </StepIndicator>
                <Box flexShrink="0">
                  <StepDescription style={{ width: "100px" }}>
                    {step.description}
                  </StepDescription>
                </Box>
                <StepSeparator />
              </Step>
            ))}
          </Stepper>
        )}
        <Formik
          initialValues={{
            name: "",
            type: "",
            destination: "",
            price: "",
            dateDepart: "",
            dateArrive: "",
            longitude: "",
            numberPerson: "",
            transportType: "",
            gender: "",
            ageRange: "",
            description: "",
            images: [],
            phone: "",
            email: "",
            website: "",
            facebook: "",
          }}
          validationSchema={validationSchemas[activeStep]}
          onSubmit={(values, actions) => {
            if (activeStep === steps.length - 1) {
              handleSubmit(values);
              actions.resetForm();
            } else {
              handleNext();
            }
          }}
        >
          {(formikProps) => (
            <Form style={{ width: "100%" }}>
              <Box p={4}>
                {activeStep === 0 && <StepOne formikProps={formikProps} />}
                {activeStep === 1 && <StepTwo formikProps={formikProps} />}
                {activeStep === 2 && <StepThree formikProps={formikProps} />}
                {activeStep === 3 && (
                  <StepFour
                    fileSelected={fileSelected}
                    setFileSelected={setFileSelected}
                    formikProps={formikProps}
                  />
                )}
                {activeStep === 4 && <StepFive formikProps={formikProps} />}
                <HStack spacing={4} mt={10}>
                  {activeStep > 0 && (
                    <Button
                      leftIcon={<ArrowForwardIcon />}
                      bg={"#464545"}
                      fontSize={16}
                      fontWeight={500}
                      color={"#ffffff"}
                      _hover={{
                        opacity: 0.8,
                      }}
                      onClick={handleBack}
                    >
                      رجوع
                    </Button>
                  )}
                  <Button
                    isLoading={loading}
                    rightIcon={
                      activeStep !== steps.length - 1 && <ArrowBackIcon />
                    }
                    bg={activeStep === steps.length - 1 ? "#3b58cb" : "#353535"}
                    fontSize={16}
                    fontWeight={500}
                    color={"#ffffff"}
                    _hover={{
                      opacity: 0.8,
                    }}
                    w={activeStep === steps.length - 1 && "200px"}
                    type={"submit"}
                  >
                    {activeStep === steps.length - 1
                      ? "انشاء الرحلة"
                      : "التالي"}
                  </Button>
                </HStack>
              </Box>
            </Form>
          )}
        </Formik>
      </VStack>
    </Container>
  );
};
