import React from "react";
import {
  Box,
  Heading,
  Text,
  Center,
  useColorModeValue,
  SimpleGrid,
  Container,
  Image,
} from "@chakra-ui/react";

import { boxBackgroundColor, boxFontColor } from "../tools/colors";

const Experience = () => {
  return (
    <Container maxW="7xl" mt={{ base: 12, md: "5rem" }} p={0}>
      <Center mb={8}>
        <Heading size={{ base: "2xl", md: "3xl" }} color="white">
          Experience
        </Heading>
      </Center>
      <SimpleGrid columns={[1, null, 2]} mx={{ base: 3, md: 3, lg: 0 }} gap={8}>
        <ExperienceCard
          heading={"Rakeoff dapp"}
          text={"Co-founder rakeoff dapp"}
        />
        <ExperienceCard heading={"Eir"} text={"Intern"} />
      </SimpleGrid>
    </Container>
  );
};

export default Experience;

const ExperienceCard = ({ image, heading, text }) => {
  return (
    <Center>
      <Box
        w="100%"
        borderRadius="md"
        overflow={"hidden"}
        borderColor="black"
        boxShadow={useColorModeValue(
          "10px 10px 0 purple",
          "10px 10px 0 blueviolet"
        )}
        mx={{ lg: 3 }}
      >
        <Image
          src={image}
          h={60}
          w="100%"
          objectFit="cover"
          alt={"Rakeoff feature Image"}
        />

        <Box bg={boxBackgroundColor} px={{ base: 4, md: 6, lg: 8 }} py={6}>
          <Heading
            textAlign={{ base: "center", md: "start" }}
            color={"white"}
            fontSize={"3xl"}
            noOfLines={1}
          >
            {heading}
          </Heading>
          <Text
            textAlign={{ base: "center", md: "start" }}
            color={boxFontColor}
            fontSize={{ base: "lg", lg: "xl" }}
          >
            {text}
          </Text>
        </Box>
      </Box>
    </Center>
  );
};
