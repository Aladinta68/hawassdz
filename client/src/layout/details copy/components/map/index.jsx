import { Stack, useColorMode, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

export const DetailsMap = () => {
  const { colorMode } = useColorMode();
  const mapclass = colorMode === "light" ? "lightMap" : "darkMap";

  return (
    <Stack
      className={mapclass}
      bg={useColorModeValue("#efeeee", "#2c2c2c")}
      position={"relative"}
      borderRadius={25}
      p={2}
      w={{ base: "100%", md: "60%" }}
      h={"400px"}
      zIndex={0}
    >
      <MapContainer zoom={11} center={[36.166667, 1.333333]}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </Stack>
  );
};
