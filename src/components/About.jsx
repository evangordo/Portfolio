import React, { useRef } from "react";
import { Box, Heading, Text, Container } from "@chakra-ui/react";
import { useInView } from "framer-motion";

const About = () => {
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
              mb={8}
              textAlign={{ base: "center", md: "start" }}
              size={{ base: "2xl", md: "3xl" }}
              color="white"
            >
              About
            </Heading>
            <Container justifyContent={"start"} maxW="4xl">
              <Box w={{ base: 350, md: 800 }}>
                <Text
                  mx={3}
                  fontSize="2xl"
                  textAlign={{ base: "center", md: "start" }}
                >
                  I'm a recent graduate from Dublin, Ireland, with expertise in
                  frontend development, particularly in JavaScript and ReactJS.
                  I have a strong desire to create visually appealing apps and
                  webpages. As well, im interested working in both Web2 and
                  Web3.
                </Text>
                <br />
                <Text
                  mx={3}
                  fontSize="2xl"
                  textAlign={{ base: "center", md: "start" }}
                >
                  {" "}
                  Beyond web development, I'm deeply passionate about sports and
                  fitness, particularly rugby and tennis, with also a keen
                  interest in Crossfit. Additionally, I enjoy film, music and
                  travel.
                </Text>
                <br />
                <Text
                  mx={3}
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
