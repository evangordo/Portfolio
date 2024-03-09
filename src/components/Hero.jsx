import React from "react";
import {
  Container,
  Stack,
  Flex,
  Heading,
  Image,
  useColorModeValue,
  SimpleGrid,
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

export default function About() {
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
  return (
    <Container maxW={"7xl"}>
      <Flex
        justify="center"
        as="h1"
        align="center"
        h={"100vh"}
        textAlign="center"
        gap={{ base: 4, lg: 16 }}
      >
        <Stack
          py={{ base: 20, md: 120 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 5 }}>
            <Flex justify={{ base: "center", md: "start" }}>
              <Heading size={{ base: "3xl", lg: "4xl" }} textAlign="center">
                Evan Gordon
              </Heading>
              <Image src={Shamrock} alt="Evan" boxSize={{ base: 5, lg: 10 }} />
            </Flex>

            <Heading
              mx={{ base: 8, lg: 0 }}
              textAlign={{ base: "center", sm: "start", md: "start" }}
              size={{ base: "xl", sm: "xl", lg: "3xl" }}
              _hover={{ textDecoration: "underline" }}
              _dark={{ color: "blue.700" }}
              style={{
                textShadow:
                  "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px blue, 0 0 30px blue, 0 0 40px blue, 0 0 55px blue, 0 0 75px blue",
              }}
            >
              Frontend Developer
            </Heading>

            <Heading
              textAlign={{ base: "center", md: "start" }}
              size={{ base: "lg", lg: "lg" }}
            >
              creating interesting applications. Always improving and learning
              as I go on.
            </Heading>
            <Stack
              align="center"
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
            >
              <motion.div
                className="container"
                variants={container}
                initial="hidden"
                animate="visible"
              >
                <SimpleGrid
                  columns={[4, null, 7]}
                  spacing={{ base: 10, md: 5 }}
                >
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
                </SimpleGrid>
              </motion.div>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Image
              mt={{ base: 7, lg: 0 }}
              mx={{ base: 2, lg: 0 }}
              borderColor="black"
              boxShadow={useColorModeValue(
                "10px 5px 0 #292c4e",
                "10px 5px 0 #292c4e"
              )}
              borderRadius="full"
              boxSize={{ base: "200px", lg: "280px" }}
              src={Linkedin}
              alt="Evan"
            />
          </Flex>
        </Stack>
      </Flex>
    </Container>
  );
}
