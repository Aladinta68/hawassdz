import React from "react";
import {
  Box,
  HStack,
  IconButton,
  Image,
  Input,
  Stack,
  Text,
  VStack,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { IoCloudUploadOutline } from "react-icons/io5";
import { ErrorMessage, Field } from "formik";

export const StepFour = ({ fileSelected, setFileSelected, formikProps }) => {
  const { values, errors, touched } = formikProps;

  const maxImages = 10;
  const maxFileSize = 1024 * 1024; // 1MB
  const toast = useToast();
  const uploadMultiFiles = (e) => {
    const files = Array.from(e.currentTarget.files);
    let validFiles = [];

    files.forEach((file) => {
      if (file.type.startsWith("image/") && file.size <= maxFileSize) {
        validFiles.push(file);
      } else {
        if (!file.type.startsWith("image/")) {
          toast({
            title: "نوع الملف غير مدعوم",
            description: "يجب أن تكون الملفات من نوع الصور فقط.",
            status: "error",
            duration: 3000,
            position: "top",
          });
        }
        if (file.size > maxFileSize) {
          toast({
            title: "تم تجاوز الحد الأقصى لحجم الصورة",
            description: `يجب أن تكون حجم الصورة أصغر من 1 ميجابايت.`,
            status: "error",
            duration: 3000,
            position: "top",
          });
        }
      }
    });
    const totalFiles = fileSelected.length + validFiles.length;
    if (totalFiles > maxImages) {
      toast({
        title: "تم تجاوز الحد الأقصى لعدد الصور",
        description: `يمكنك فقط تحميل ما يصل إلى ${maxImages} صور.`,
        status: "warning",
        duration: 3000,
        position: "top",
      });
    } else {
      const newImagesArray = [...fileSelected, ...validFiles];
      const fileNamesArray = newImagesArray.map((file) => file.name);
      formikProps.setFieldValue("images", fileNamesArray);
      setFileSelected(newImagesArray);
    }
  };

  const removeImage = (indexToRemove) => {
    const updatedFileSelected = fileSelected.filter(
      (_, index) => index !== indexToRemove
    );
    setFileSelected(updatedFileSelected);
    const fileNamesArray = updatedFileSelected.map((file) => file.name);
    formikProps.setFieldValue("images", fileNamesArray);
  };

  return (
    <VStack w={"90%"} maxH={"500px"} spacing={4}>
      <Stack
        justify={"center"}
        align={"center"}
        pos={"relative"}
        border={
          touched["images"] && errors["images"]
            ? useColorModeValue(
                "2px solid red !important",
                "2px solid #db5d5d !important"
              )
            : "2px dashed gray"
        }
        w={"full"}
        h={"200px"}
        borderRadius={20}
      >
        <Input
          cursor={"pointer"}
          zIndex={2}
          name="images"
          pos={"relative"}
          w={"full"}
          h={"full"}
          opacity={0}
          type="file"
          onChange={uploadMultiFiles}
          multiple
        />
        <VStack zIndex={0} pos={"absolute"}>
          <IoCloudUploadOutline color="gray" size={80} />
          <Text fontWeight={600} fontSize={20}>
            اختر ملف
            <Text mr={1} fontWeight={400} as={"span"}>
              أو اسحبه هنا
            </Text>
          </Text>
          <Text>
            ! يجب أن يكون حجم الصورة أقل من 1 ميغابايت والحد الأقصى للعدد هو 10
          </Text>
        </VStack>
      </Stack>
      <Stack
        color={useColorModeValue("red", "#db5d5d")}
        w={"full"}
        align={"flex-start"}
      >
        <ErrorMessage
          name={"images"}
          component="div"
          className="error-message"
        />
      </Stack>
      <HStack overflowX={"auto"} overflow={"auto"} w={"full"} maxH={"300px"}>
        {fileSelected.map((file, index) => (
          <Box key={index} position="relative">
            <Image
              maxW={"400px"}
              minW={"400px"}
              h={"250px"}
              src={URL.createObjectURL(file)}
              alt={`Image ${index}`}
            />
            <IconButton
              position="absolute"
              top={1}
              right={1}
              bg="#00000062"
              _hover={{
                bg: "#00000089",
              }}
              color={"#ff0000"}
              aria-label="remove image"
              onClick={() => removeImage(index)}
              icon={<DeleteIcon />}
            />
          </Box>
        ))}
      </HStack>
    </VStack>
  );
};
