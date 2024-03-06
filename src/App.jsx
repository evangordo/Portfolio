import {
  Box,
  Flex,
  VStack,
  Image,
  useColorModeValue,
  Container,
  HStack,
} from "@chakra-ui/react";
import { Hero, Experience } from "./components";
function App() {
  return (
    <div className="App">
      <Box height="100vh" overflow="hidden">
        <Background>
          <Hero />
        </Background>
      </Box>

      <Experience />
    </div>
  );
}

export default App;

const Background = ({ children }) => {
  return (
    <Box
      style={{
        background: `
          radial-gradient(circle, transparent 20%, #e5e5f7 20%, #e5e5f7 80%, transparent 80%, transparent),
          radial-gradient(circle, transparent 20%, #e5e5f7 20%, #e5e5f7 80%, transparent 80%, transparent) 35px 35px,
          linear-gradient(#444cf7 2.8px, transparent 2.8px) 0 -1.4px,
          linear-gradient(90deg, #444cf7 2.8px, #e5e5f7 2.8px) -1.4px 0
        `,
        backgroundSize: "70px 70px, 70px 70px, 35px 35px, 35px 35px",
        opacity: 1,
      }}
    >
      {children}
    </Box>
  );
};
