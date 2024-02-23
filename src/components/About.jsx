import React from "react";
import { Heading, Container } from "@chakra-ui/react";
const About = () => {
  return (
    <>
      <Container maxW="6xl" mt={{ base: 12, md: "5rem" }} p={0}>
        <Heading
          textAlign="start"
          size={{ base: "2xl", md: "3xl" }}
          color="white"
        >
          About me
        </Heading>
      </Container>
    </>
  );
};

export default About;
