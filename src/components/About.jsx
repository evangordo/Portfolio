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
                  I'm a recent graduate from Dublin, Ireland, with expertise in
                  frontend development, particularly in{" "}
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
                  , particularly rugby and tennis, with also a keen interest in
                  Crossfit. Additionally, I enjoy{" "}
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
        </span>
      </section>
    </>
  );
};

export default About;
