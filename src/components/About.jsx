import React from "react";
import {
  Image,
  Box,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Stack,
  Container,
  Link,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

const About = () => {
  return (
    <>
      <Container maxW="7xl" mt={{ base: 12, md: "5rem" }} p={0}>
        <Heading
          mb={12}
          textAlign={{ base: "center", md: "start" }}
          size={{ base: "3xl", md: "4xl" }}
        >
          About
        </Heading>
        <Text>
          {" "}
          Im a recent graduate from Dublin, Ireland. My expertise lie within{" "}
        </Text>
      </Container>
    </>
  );
};

export default About;
