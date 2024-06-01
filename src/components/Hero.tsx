import React from "react";
import {
  Container,
  Stack,
  Flex,
  Heading,
  Image,
  Button,
  useColorModeValue,
  SimpleGrid,
  useBreakpointValue,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import Next from "../assets/next.svg";
import { Link } from "react-scroll";
import Linkedin from "../assets/linkedin.svg";
import Shamrock from "../assets/shamrock.png";
import Prisma from "../assets/prisma.png";

import ReactLogo from "../assets/react.png";
import JavaScipt from "../assets/javascript.png";
import TypeScript from "../assets/typescript.png";
import Chakra from "../assets/chakra.png";
import TailWind from "../assets/tailwindsvg.svg";
import mongo from "../assets/mongo.png";
import { motion } from "framer-motion";

export const MotionImage = motion(Image);

export default function About() {
  const { onClose } = useDisclosure();
  const { colorMode } = useColorMode();
  const bgColor = colorMode === "light" ? "#1a202d " : "#ebebf1";
  const isDesktop = useBreakpointValue({
    base: false,
    md: false,
    lg: true,
    xl: true,
  });

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
    <Container maxW={"5xl"}>
      <Flex
        justify="center"
        as="h1"
        align="center"
        h={{ base: "90vh", md: "100hv" }}
        textAlign="center"
      >
        <Stack
          py={{ base: 20, md: 10 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 2 }}>
            <Flex justify={{ base: "center", md: "start" }}>
              <Heading size={{ base: "3xl", lg: "4xl" }} textAlign="center">
                Evan Gordon
              </Heading>
              {isDesktop ? (
                <Image
                  src={Shamrock}
                  alt="Evan"
                  boxSize={{ base: 5, lg: 10 }}
                />
              ) : null}
            </Flex>

            <Heading
              mx={{ base: 6, md: 1, lg: 0 }}
              textAlign={{ base: "center", sm: "start", md: "start" }}
              size={{ base: "xl", sm: "xl", lg: "2xl" }}
              _dark={{ color: "grey" }}
              style={{
                textShadow:
                  "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px grey, 0 0 30px grey, 0 0 40px grey, 0 0 55px grey, 0 0 75px grey",
              }}
            >
              Fullstack Developer
            </Heading>

            <Heading
              textAlign={{ base: "center", md: "start" }}
              size={{ base: "md", lg: "lg" }}
              mx={{ base: 9, md: 1, lg: 0 }}
              color={colorMode === "light" ? "#1a202d " : "grey"}
            >
              building things for the web. Improving and learning as I go on.
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
                  columns={[4, null, 8]}
                  spacing={{ base: 10, md: 5 }}
                >
                  <motion.div variants={item}>
                    <Image alt='react' boxSize={7} src={ReactLogo} />
                  </motion.div>
                  <motion.div variants={item}>
                    <Image alt= 'next'boxSize={7} src={Next} />
                  </motion.div>
                  <motion.div variants={item}>
                    <Image alt='js' boxSize={7} src={JavaScipt} />
                  </motion.div>
                  <motion.div variants={item}>
                    <Image alt='ts' boxSize={7} src={TypeScript} />
                  </motion.div>

                  <motion.div variants={item}>
                    <Image alt='chakra' boxSize={7} src={Chakra} />
                  </motion.div>
                  <motion.div variants={item}>
                    <Image alt='tw'boxSize={7} src={TailWind} />
                  </motion.div>
                  <motion.div variants={item}>
                    <Image alt ='mongo'boxSize={7} src={mongo} />
                  </motion.div>
                  <motion.div variants={item}>
                    <Image alt='prisma'boxSize={7} src={Prisma} />
                  </motion.div>
                </SimpleGrid>
              </motion.div>
            </Stack>
            <Stack align={{ base: "center", md: "start", lg: "start" }}>
              <Button
                m={4}
                ml={{ base: 0, md: -1 }}
                id="contact"
                _hover={{
                  boxShadow: `0px 0px 10px 6px #454667`,
                }}
                boxShadow={`0px 0px 10px 3px #454667`}
                w={{ base: "60%", md: "25%" }}
                size="lg"
                color={colorMode === "light" ? "#1a202d " : "white"}
              >
                <Link
                  to="#contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={onClose}
                >
                  Contact
                </Link>
              </Button>
            </Stack>
          </Stack>

          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <MotionImage
              mt={{ base: 7, md: 0, lg: 0 }}
              mb={{ base: 0, md: 7, lg: 0 }}
              mx={{ base: 0, lg: 0 }}
              borderColor="black"
              boxShadow={useColorModeValue(
                `10px 5px 0 ${bgColor}`,
                `10px 5px 0${bgColor}`
              )}
              mr={{ base: 12, md: 0 }}
              borderRadius="md"
              filter="grayscale(100%)"
              boxSize={{ base: "220px", md: "230px", lg: "300px" }}
              src={Linkedin}
              alt="Evan"
            />
          </Flex>
        </Stack>
      </Flex>
    </Container>
  );
}
