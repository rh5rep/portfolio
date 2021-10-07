import { ChakraProvider } from "@chakra-ui/react";
import Home from "./index";

function MyApp() {
  return (
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  );
}
export default MyApp;
