import React from "react";
import { Box, useColorMode } from "@chakra-ui/react";
import { Navbar, Hero, About, Footer, Contact } from "./components";
import "./App.css";

function App() {
  const { colorMode } = useColorMode();

  return (
    <div className="App">
      <>
        <Background colorMode={colorMode}>
          <Navbar />
          <Box id="hero" height="100vh">
            <Hero />
          </Box>
        </Background>

        <Box id="about">
          <About />
        </Box>
        <Box id="#contact">
          <Contact />
        </Box>

        <Background colorMode={colorMode}>
          <Footer />
        </Background>
      </>
    </div>
  );
}

export default App;

const Background = ({ children, colorMode }) => {
  return (
    <Box className={colorMode === "light" ? "whitepattern" : "background"}>
      {children}
    </Box>
  );
};
