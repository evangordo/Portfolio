import { Box } from "@chakra-ui/react";
import { Hero, Experience, Education, About } from "./components";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Background>
        <Box height="100vh" overflow="hidden">
          <Hero />
        </Box>
      </Background>
      <Experience />
      <Education />
      <About />
    </div>
  );
}

export default App;

const Background = ({ children }) => {
  return <Box className="background-color">{children}</Box>;
};
