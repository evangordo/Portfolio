import React from "react";
import {
  Box,
  Container,
  HStack,
  Image as ChakraImage,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";
import EG from "../assets/EG.svg";
import githubLogo from "./../assets/github_logo.svg";
import { motion } from "framer-motion";

import linkedin from "./../assets/linkedin.png";

const Footer = () => {
  return (
    <Container maxW="9xl" mt={{ base: 12, md: "5rem" }} p={0}>
      <Box mt={{ base: 12, md: "5rem" }}>
        <Container
          as={Stack}
          maxW={"7xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Flex align="center">
            <ChakraImage
              alt="rakeoff logo"
              w="auto"
              h={65}
              objectFit="contain"
              src={EG}
            />
          </Flex>
          <Text
            ml={2}
            align={{ base: "center", md: "center" }}
            color="white"
            fontSize="xl"
            _hover={{
              color: "teal.500",
            }}
          >
            Built using ReactJS, styled using Chakra UI, Hosted with Netlify
          </Text>
          <HStack mt={3} gap={3}>
            <SocialIconLink
              image={linkedin}
              alt={"medium link"}
              link={"https://www.linkedin.com/in/evan-gordo/"}
            />
            <SocialIconLink
              image={githubLogo}
              alt={"github link"}
              link={"https://github.com/evangordo"}
            />
          </HStack>
        </Container>
      </Box>
    </Container>
  );
};

export default Footer;

const SocialIconLink = ({ image, alt, link, xLogo }) => {
  return (
    <motion.a whileHover={{ scale: 1.2 }}>
      <a href={link}>
        <Box
          borderRadius="md"
          borderBottom={"solid #fff 2px"}
          py={0.5}
          px={1}
          _hover={{ opacity: "0.8", cursor: "pointer" }}
        >
          <ChakraImage
            alt={alt}
            src={image}
            _hover={{ opacity: 0.8 }}
            h="25px"
            p={xLogo ? "3px" : 0}
          />
        </Box>
      </a>
    </motion.a>
  );
};
