import { Image, Stack } from '@chakra-ui/react'
import React from 'react'
import Map from "../../../assets/image/trips/Map.png";

export const MAP = () => {
  return (
    <Stack borderRadius={25} w={{ base: "100%", xl: "40%" }} h={"100%"}>
    <Image borderRadius={25} src={Map} w={"100%"} h={"100%"} />
  </Stack>   )
}
