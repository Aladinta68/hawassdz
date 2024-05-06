import { extendTheme } from "@chakra-ui/react";
const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};
export const Theme = extendTheme({
  config,
  fonts: {
    body: "Tajawal, sans-serif",
  },
});
