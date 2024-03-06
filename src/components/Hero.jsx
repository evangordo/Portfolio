import React from "react";
import {
  Heading,
  Flex,
  VStack,
  Image,
  useColorModeValue,
  Container,
  HStack,
} from "@chakra-ui/react";
import Linkedin from "../assets/profile.png";
import Shamrock from "../assets/shamrock.png";
import ReactLogo from "../assets/react.png";
import JavaScipt from "../assets/javascript.png";
import TypeScript from "../assets/typescript.png";
import Chakra from "../assets/chakra.png";
import Python from "../assets/python.png";
import TailWind from "../assets/tailwindsvg.svg";
import Figma from "../assets/figma.svg";
import { motion } from "framer-motion";

const About = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  // const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <>
      <Container maxW="6xl" mt={{ base: 12, md: "5rem" }} p={0}>
        <Flex
          justify="center"
          as="h1"
          align="center"
          h={{ base: "30vh", lg: "80vh" }}
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
              Frontend Developer
            </Heading>
            <Heading textAlign="start" size={{ base: "2xl", lg: "lg" }}>
              designing innovative aplications. Always improving and learning as
              I go on.
            </Heading>
            <motion.div
              className="container"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <HStack spacing={4}>
                <motion.div variants={item}>
                  <Image boxSize={7} src={ReactLogo} />
                </motion.div>
                <motion.div variants={item}>
                  <Image boxSize={7} src={JavaScipt} />
                </motion.div>
                <motion.div variants={item}>
                  <Image boxSize={7} src={TypeScript} />
                </motion.div>
                <motion.div variants={item}>
                  <Image boxSize={7} src={Python} />
                </motion.div>
                <motion.div variants={item}>
                  <Image boxSize={7} src={Chakra} />
                </motion.div>
                <motion.div variants={item}>
                  <Image boxSize={7} src={TailWind} />
                </motion.div>
                <motion.div variants={item}>
                  <Image boxSize={7} src={Figma} />
                </motion.div>
              </HStack>
            </motion.div>
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
      </Container>
    </>
  );
};

export default About;
