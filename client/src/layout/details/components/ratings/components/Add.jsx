import {
  Button,
  HStack,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Stack,
  Text,
  Textarea,
  VStack,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsBookmarkStarFill } from "react-icons/bs";
import { Rating } from "../../../../../components/rating";
import Cookies from "js-cookie";
import { CreateRating } from "./../../../../../api/rating/mutation";
import { useMutation } from "@apollo/client";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useParams } from "react-router-dom";
import { GetHotelByID } from "../../../../../api/hotel/query";
import { GetRestaurantByID } from "../../../../../api/restaurant/query";
import { GetOneDestination } from "../../../../../api/destination/query";

export const Add = ({ type }) => {
  const accessToken = Cookies.get("accessToken");
  const [selectedStars, setSelectedStars] = useState(0);
  const toast = useToast();
  const { id } = useParams();
  let tableName;
  let queryname;
  let variablename;
  if (type === "hotel") {
    tableName = "Hotel";
    queryname = GetHotelByID;
    variablename = `getHotelByIdId`;
  } else if (type === "destination") {
    tableName = "Destination";
    queryname = GetOneDestination;
    variablename = `getDestinationByIdId`;
  } else if (type === "restaurant") {
    tableName = "Restaurant";
    queryname = GetRestaurantByID;
    variablename = `getRestaurantByIdId`;
  } else if (type === "trip") {
    tableName = "Travel";
    queryname = GetHotelByID;
    variablename = `getHotelByIdId`;
  }
  const [addRating, { loading, error }] = useMutation(CreateRating, {
    refetchQueries: [{ query: queryname, variables: { [variablename]: id } }],
  });
  const { onOpen, onClose, isOpen } = useDisclosure()

  const handelSubmit = async (values) => {
    values.stars = selectedStars;
    const starsvalue = parseInt(values.stars);
    const feedbackvalue = values.feedback;
    try {
      const newData = {
        tableName,
        tableId: id,
        stars: starsvalue,
        feedback: feedbackvalue,
      };
      console.log("newData", newData);
      const data = await addRating({
        variables: { input: newData },
        context: {
          headers: {
            Authorization: accessToken,
          },
        },
      });
      if (data) {
        console.log(data);
        toast({
          title: "تمت الإضافة بنجاح",
          status: "success",
          duration: 1000,
          isClosable: false,
        });
        onClose();
      }
      if (error) {
        console.log(error);
      }
    } catch (errors) {
      console.log(errors);
    }
  };
  const validationSchema = Yup.object().shape({
    stars: Yup.number(),
    feedback: Yup.string(),
  });
  return (
    <Formik
      initialValues={{ stars: "", feedback: "" }}
      validationSchema={validationSchema}
      onSubmit={handelSubmit}
    >
      {(errors, touched) => (
        <Form>
          <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
            <PopoverTrigger>
              <Button variant={"ghost"} color={"#4f68f9"}>
                + إضافة تقييم{" "}
              </Button>
            </PopoverTrigger>
            <PopoverContent bg={useColorModeValue("#ffffff", "#141414")}>
              <PopoverArrow />
              <PopoverHeader>
                <HStack dir="ltr" w={"full"} justify={"space-between"}>
                  <PopoverCloseButton />
                  <HStack>
                    <Text fontSize={16} fontWeight={500}>
                      تقييم
                    </Text>
                    <BsBookmarkStarFill color="#4f68f9" />
                  </HStack>
                </HStack>
              </PopoverHeader>{" "}
              <PopoverBody>
                <VStack w={"100%"} align={"flex-start"}>
                  <Rating onChange={(stars) => setSelectedStars(stars)} />
                  <Field
                    as={Textarea}
                    name="feedback"
                    border={"2px solid #f0efef"}
                    h={120}
                    my={2}
                  />
                </VStack>
              </PopoverBody>
              <PopoverFooter>
                {" "}
                <Button
                  type="submit"
                  w={"100%"}
                  color={"#ffffff"}
                  bg={"#378bf9"}
                  variant={"unstyled"}
                >
                  إضافة
                </Button>
              </PopoverFooter>
            </PopoverContent>
          </Popover>
        </Form>
      )}
    </Formik>
  );
};
