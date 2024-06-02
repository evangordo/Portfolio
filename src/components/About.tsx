import React, { useRef } from "react";
import {
  Box,
  Heading,
  Text,
  Container,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import { useInView } from "framer-motion";
import "../App.css";

const About = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    md: false,
    lg: false,
    xl: true,
  });
  const { colorMode } = useColorMode();
  const classes =
    colorMode === "light" ? "whitePatternEducation" : "navyPatternEducation";

  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <section ref={ref}>
        <span
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <Box position={"relative"}>
            <Container maxW="5xl" mt={{ base: 12, md: "5rem" }} p={0}>
              <Heading
                mb={8}
                mx={{ base: 0, md: 4, lg: 4, xl: 0 }}
                textAlign={{ base: "center", md: "start" }}
                size={"3xl"}
                // mb={{ base: 2, md: 0, lg: 2, xl: 0 }}
                _dark={{ color: "grey" }}
                style={{
                  textShadow:
                    "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px grey, 0 0 30px grey, 0 0 40px grey, 0 0 55px grey, 0 0 75px grey",
                }}
                // color={
                //   colorMode === "light"
                //     ? "solid #e2e8f0 2px"
                //     : "solid #363b4c 2px"
                // }
              >
                About
              </Heading>
              <Container justifyContent={{ base: "center", md: "start" }}>
                <Box>
          
                  <Text
                    mx={2}
                    fontSize={{ base: "lg", md: "lg", xl: "2xl" }}
                    textAlign={{ base: "center", md: "start" }}
                  >
                    I'm a developer from Dublin, Ireland, with expertise
                    in frontend development, particularly with{" "}
                    <Text
                      as={"span"}
                      fontSize={{ base: "lg", md: "lg", xl: "2xl" }}
                      position={"relative"}
                      _after={{
                        content: "''",
                        width: "full",
                        height: "70%",
                        position: "absolute",
                        bottom: 1,
                        left: 0,
                        bg: "blue.400",
                        zIndex: -1,
                      }}
                    >
                      Next
                    </Text>{" "}
                    and{" "}
                    <Text
                      as={"span"}
                      fontSize={{ base: "lg", md: "lg", xl: "2xl" }}
                      position={"relative"}
                      _after={{
                        content: "''",
                        width: "full",
                        height: "70%",
                        position: "absolute",
                        bottom: 1,
                        left: 0,
                        bg: "blue.400",
                        zIndex: -1,
                      }}
                    >
                      React
                    </Text>
                    . I have a strong desire to create visually appealing apps
                    and webpages. 
                  </Text>
                  <br />
                  <Text
                    mx={2}
                    fontSize={{ base: "lg", md: "lg", xl: "2xl" }}
                    textAlign={{ base: "center", md: "start" }}
                  >
                    {" "}
                    Beyond web development, I'm deeply passionate about{" "}
                    <Text
                      as={"span"}
                      fontSize={{ base: "lg", md: "lg", xl: "2xl" }}
                      position={"relative"}
                      _after={{
                        content: "''",
                        width: "full",
                        height: "70%",
                        position: "absolute",
                        bottom: 1,
                        left: 0,
                        bg: "pink.400",
                        zIndex: -1,
                      }}
                    >
                      sports
                    </Text>{" "}
                    and{" "}
                    <Text
                      as={"span"}
                      fontSize={{ base: "lg", md: "lg", xl: "2xl" }}
                      position={"relative"}
                      _after={{
                        content: "''",
                        width: "full",
                        height: "70%",
                        position: "absolute",
                        bottom: 1,
                        left: 0,
                        bg: "pink.400",
                        zIndex: -1,
                      }}
                    >
                      fitness
                    </Text>
                    , particularly rugby and tennis.
                  
                 </Text>
                 <br/>
                  <Text
                    mx={3}
                    fontSize={{ base: "lg", md: "lg", xl: "2xl" }}
                    textAlign={{ base: "center", md: "start" }}
                  >
                    {" "}
                  
                    Although I have only a couple of years of experience, I am
                    confident that I can fully contribute my skills while
                    continuing to learn along the way.
                  </Text>
                </Box>
              </Container>
            </Container>
          
            {isDesktop ? (
              <Box
                position={"absolute"}
                top={-5}
                left={-150}
                className={classes}
                zIndex={-1}
              />
            ) : undefined}
          </Box>
        </span>
      </section>
    </>
  );
};

export default About;
