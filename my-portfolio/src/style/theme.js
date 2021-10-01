import { extendTheme, themeConfig } from "@chakra-ui/react";
const ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: "false",
};

export const customTheme = extendTheme({ config: ThemeConfig });

console.log(customTheme);
