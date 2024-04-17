import React, { useState, useEffect } from "react";
import { Box, Flex, useColorMode } from "@chakra-ui/react";
import {
  Navbar,
  Hero,
  Projects,
  Education,
  About,
  Footer,
  Contact,
} from "./components";
import "./App.css";
import EG from "./assets/EG.svg";

import { motion } from "framer-motion";

const svgVariants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: { duration: 2 },
  },
};
function App() {
  const { colorMode } = useColorMode();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadingDelay = setTimeout(() => {
      setLoaded(true);
    }, 2000);

    return () => clearTimeout(loadingDelay);
  }, []);

  return (
    <div className="App">
      {loaded ? (
        <>
          <Background colorMode={colorMode}>
            <Navbar />
            <Box id="hero" height="100vh">
              <Hero />
            </Box>
          </Background>

          <Box id="projects">
            <Projects />
          </Box>
          <Box id="education">
            <Education />
          </Box>
          <Box id="about">
            <About />
          </Box>
          <Box id="contact">
            <Contact />
          </Box>

          <Background colorMode={colorMode}>
            <Footer />
          </Background>
        </>
      ) : (
        <Flex h="100vh" align="center" justify="center">
          <Box>
            <Box width="300px" height="300px">
              <svg width="100%" height="100%" viewBox="0 0 300 300">
                <motion.path
                  d="M 10 10 L 290 10 L 290 290 L 10 290 Z"
                  fill="transparent"
                  stroke="#292c4e"
                  strokeWidth="2"
                  variants={svgVariants}
                  initial="hidden"
                  animate="visible"
                />
                <image href={EG} width="200px" height="200px" x="50" y="50" />
              </svg>
            </Box>
          </Box>
        </Flex>
      )}
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
