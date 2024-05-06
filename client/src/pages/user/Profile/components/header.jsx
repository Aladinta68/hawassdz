import {
  Avatar,
  Badge,
  Image,
  Input,
  Spacer,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import headerimg from "../../../../assets/profile/header.png";
import { useMutation } from "@apollo/client";
import useProfileStore from ".././../../../store/profile";
import Cookies from "js-cookie";
import { UploadProfileImage } from './../../../../api/user/mutation';
export const ProfileHeader = () => {
  const ProfileData = useProfileStore((state) => state.ProfileData);
  const setProfileData = useProfileStore((state) => state.setProfileData);
  const accessToken = Cookies.get("accessToken");
  const [uploadUserImage, { loading, error }] = useMutation(UploadProfileImage);
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      uploadImage(file);
    }
  };
  const uploadImage = async (file) => {
    try {
      const response = await uploadUserImage({
        variables: { userId: ProfileData.id, file: file },
        context: {
          headers: {
            Authorization: accessToken,
          },
        },
      });
      if (response) {
        const newUrl = response.data.uploadUserImage.url;
        setProfileData({
          ...ProfileData,
          image: {
            ...ProfileData.image,
            url: newUrl,
          },
        });
      }
      if (loading) {
        console.log(loading);
      }
      if (error) {
        console.log(error);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  const imageUrl = ProfileData?.image?.url
    ? "http://localhost:3000" + ProfileData?.image?.url
    : null;

  return (
    <VStack
      pos={"relative"}
      justify={"flex-end"}
      align={"center"}
      borderRadius={20}
      h={{ base: 300, md: 250 }}
      w={"100%"}
    >
      <Image
        pos={"relative"}
        borderRadius={20}
        src={headerimg}
        w={"full"}
        h={"80%"}
      />
      <Spacer pos={"relative"} />
      <Stack
        pt={{ base: 5, md: 0 }}
        direction={{ md: "row", base: "column" }}
        spacing={8}
        align={"center"}
        justify={"flex-start"}
        px={5}
        pos={"absolute"}
        borderRadius={20}
        w={"90%"}
        h={{ base: 220, md: 110 }}
        bg={useColorModeValue(
          "rgba(255, 255, 255, 0.8)",
          "rgba(36, 36, 36, 0.8)"
        )}
        backdropFilter={"saturate(200%) blur(50px)"}
        boxShadow={"rgba(0, 0, 0, 0.02) 0px 2px 5.5px"}
      >
        <Stack cursor={"pointer"} align={"center"} borderRadius={20}>
          <label htmlFor="file-upload">
            <Input
              accept="image/*"
              onChange={handleFileSelect}
              type={"file"}
              id={"file-upload"}
              display={"none"}
            />
            <Image
              cursor={"pointer"}
              src={imageUrl}
              as={imageUrl ? "img" : Avatar}
              h={70}
              w={70}
              borderRadius={"20"}
            />
          </label>
        </Stack>
        <Stack
          direction={{ md: "row", base: "column" }}
          spacing={{ base: 5, md: 10 }}
          align={{ base: "center", md: "flex-end" }}
          h={50}
        >
          <VStack
            h={"full"}
            spacing={0}
            align={{ base: "center", md: "flex-end" }}
          >
            <Text fontSize={20} fontWeight={600}>
              {ProfileData?.firstName + " " + ProfileData?.lastName}
            </Text>
            <Text fontWeight={400}>{ProfileData?.email}</Text>
          </VStack>
          <Badge
            fontSize={13}
            colorScheme={ProfileData?.complete ? "green" : "orange"}
          >
            {ProfileData?.complete ? (
              <Text>حسابك مكتمل</Text>
            ) : (
              <Text> حسابك غير مكتمل !</Text>
            )}
          </Badge>
        </Stack>
      </Stack>
    </VStack>
  );
};
