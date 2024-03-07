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
      <Background>
        <Box height="100vh" overflow="hidden">
          <Hero />
        </Box>
      </Background>

      <Experience />
    </div>
  );
}

export default App;

const Background = ({ children }) => {
  return (
    <Box
      style={{
        backgroundColor: "#1b2030",
        opacity: 1,
        backgroundImage: `
          radial-gradient(#cfcfd3 1.8px, transparent 1.8px),
          radial-gradient(#cfcfd3 1.8px, #1b2030 1.8px)
        `,
        backgroundSize: "72px 72px",
        backgroundPosition: "0 0, 36px 36px",
      }}
    >
      {children}
    </Box>
  );
};
