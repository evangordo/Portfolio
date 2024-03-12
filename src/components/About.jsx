import React, { useRef } from "react";
import {
  Box,
  Heading,
  Text,
  Container,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useInView } from "framer-motion";

import { Icon } from "@chakra-ui/react";

const About = () => {
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
                textAlign={{ base: "center", md: "start" }}
                size={"3xl"}
                color="white"
              >
                About
              </Heading>
              <Container justifyContent={{ base: "center", md: "start" }}>
                <Box>
                  <Text
                    mx={2}
                    fontSize={{ base: "lg", md: "2xl" }}
                    textAlign={{ base: "center", md: "start" }}
                  >
                    I'm a recent graduate from Dublin, Ireland, with expertise
                    in frontend development, particularly in{" "}
                    <Text
                      as={"span"}
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
                      JavaScript
                    </Text>{" "}
                    and{" "}
                    <Text
                      as={"span"}
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
                      ReactJS
                    </Text>{" "}
                    I have a strong desire to create visually appealing apps and
                    webpages. As well, im interested working in both Web2 and
                    Web3.
                  </Text>
                  <br />
                  <Text
                    mx={2}
                    fontSize={{ base: "lg", md: "2xl" }}
                    textAlign={{ base: "center", md: "start" }}
                  >
                    {" "}
                    Beyond web development, I'm deeply passionate about{" "}
                    <Text
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
                      sports
                    </Text>{" "}
                    and{" "}
                    <Text
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
                      fitness
                    </Text>
                    , particularly rugby and tennis, with also a keen interest
                    in Crossfit. Additionally, I enjoy{" "}
                    <Text
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
                      film
                    </Text>
                    ,{" "}
                    <Text
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
                      music
                    </Text>
                    , and{" "}
                    <Text
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
                    fontSize={{ base: "lg", md: "2xl" }}
                    textAlign={{ base: "center", md: "start" }}
                  >
                    {" "}
                    Don't hesitate to reach out with any questions you may have.
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
              left={{ base: 20, md: 950 }}
              style={{ filter: "blur(140px)" }}
            />
          </Box>
        </span>
      </section>
    </>
  );
};

export default About;
