import React from "react";
import {
  Heading,
  Flex,
  VStack,
  Image,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import Linkedin from "../assets/profile.png";
import Shamrock from "../assets/shamrock.png";

const About = () => {
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <>
      <Flex
        justify="center"
        as="h1"
        align="center"
        h={{ base: "30vh", lg: "60vh" }}
        textAlign="center"
        gap={{ base: 4, lg: 16 }}
      >
        <VStack align={{ base: "center", lg: "start" }} spacing={3}>
          <Flex>
            <Heading
              size={{ base: "2xl", lg: "4xl" }}
              mx={{ base: 8, lg: 0 }}
              textAlign="center"
            >
              Evan Gordon
            </Heading>
            <Image src={Shamrock} alt="Evan" boxSize={{ base: 8, lg: 10 }} />
          </Flex>
          <Heading
            mx={{ base: 8, lg: 0 }}
            textAlign="start"
            size={{ base: "2xl", lg: "4xl" }}
            colorScheme="red"
            _hover={{ textDecoration: "underline" }}
            _dark={{ color: "purple.400" }}
            style={{
              textShadow:
                "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px purple, 0 0 30px purple, 0 0 40px purple, 0 0 55px purple, 0 0 75px purple",
            }}
          >
            Frontend Developer.
          </Heading>
        </VStack>

        <Image
          mx={{ base: 2, lg: 0 }}
          borderColor="black"
          boxShadow={useColorModeValue(
            "10px 10px 0 purple",
            "10px 10px 0 blueviolet"
          )}
          borderRadius="full"
          boxSize={{ base: "150px", lg: "250px" }}
          src={Linkedin}
          alt="Evan"
        />
      </Flex>
    </>
  );
};

export default About;
