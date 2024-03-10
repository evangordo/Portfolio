import React, { useRef } from "react";
import {
  Image,
  Box,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Stack,
  Container,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    md: false,
    lg: true,
    xl: true,
  });
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
          <Container maxW="7xl" mt={{ base: 12, md: "5rem" }} p={0}>
            <Heading
              mx={{ base: 32, md: 0 }}
              textAlign={{ base: "center", md: "start" }}
              size={{ base: "3xl", md: "4xl" }}
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "#292c4e",
                zIndex: -1,
              }}
            >
              About
            </Heading>
            {isDesktop ? (
              <>
                <br />
                <br />
                <br />
              </>
            ) : null}
            <Container justifyContent={"start"} maxW="4xl">
              <Box mx={2} w={{ base: 350, md: 800 }}>
                <Text
                  fontSize="2xl"
                  textAlign={{ base: "center", md: "start" }}
                >
                  {" "}
                  I'm a recent graduate from Dublin, Ireland, with expertise in
                  frontend development, particularly in JavaScript and ReactJS.
                  I have a strong desire to create visually appealing apps and
                  webpages and in interested in working in both Web2 and Web3.
                </Text>
                <br />
                <Text
                  fontSize="2xl"
                  textAlign={{ base: "center", md: "start" }}
                >
                  {" "}
                  Beyond web development, I'm deeply passionate about sports and
                  fitness, particularly Crossfit and tennis, with also a keen
                  interest in rugby. Additionally, I enjoy film, music and
                  travel.
                </Text>
                <br />
                <Text
                  fontSize="2xl"
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
        </span>
      </section>
    </>
  );
};

export default About;
