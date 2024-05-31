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
import { Icon } from "@chakra-ui/react";

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

  const Blur = (props) => {
    return (
      <Icon
        width={useBreakpointValue({ base: "80vw", md: "40vw", lg: "20vw" })}
        zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
        height="560px"
        viewBox="0 0 528 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Blur Icon"
        {...props}
      >
        <circle cx="71" cy="61" r="111" fill="#F56565" />
        <circle cx="244" cy="106" r="139" fill="#ED64A6" />
        <circle cy="291" r="139" fill="#1b2030" />
        <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
        <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
        <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
        <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
      </Icon>
    );
  };

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
            <Container maxW="7xl" mt={{ base: 12, md: "5rem" }} p={0}>
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
                  {/* <Text
                    mx={2}
                    fontSize={{ base: "lg", md: "lg", xl: "2xl" }}
                    textAlign={{ base: "center", md: "start" }}
                  >
                    
                  </Text>
                  <br /> */}
                  <Text
                    mx={2}
                    fontSize={{ base: "lg", md: "lg", xl: "2xl" }}
                    textAlign={{ base: "center", md: "start" }}
                  >
                    I'm a recent graduate from Dublin, Ireland, with expertise
                    in frontend development, particularly in{" "}
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
                    As well, I've many other interests such as {" "}
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
                      film
                    </Text>
                    ,{" "}
                    <Text
                      fontSize={{ base: "lg", md: "lg", xl: "2xl" }}
                      as={"span"}
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
                      gaming
                    </Text>
                    , and{" "}
                    <Text
                      fontSize={{ base: "lg", md: "lg", xl: "2xl" }}
                      as={"span"}
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
                      travel
                    </Text>
                    .
                  </Text>
                  <br />
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
            <Blur
              position={"absolute"}
              top={40}
              left={{ base: 20, md: 80, xl: 950 }}
              style={{ filter: "blur(140px)" }}
            />
            {isDesktop ? (
              <Box
                position={"absolute"}
                top={45}
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
