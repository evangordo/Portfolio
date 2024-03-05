import React, { useState } from "react";
import {
  Image,
  Box,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Stack,
  Container,
  useBreakpointValue,
} from "@chakra-ui/react";
import { boxBorderColor } from "../tools/colors";
import Rakeoff from "../assets/rakeoff.png";
import jobon from "../assets/jobon.png";
import { motion, useTime, useTransform } from "framer-motion";

const Experience = () => {
  return (
    <>
      <Container maxW="7xl" mt={{ base: 12, md: "5rem" }} p={0}>
        <Heading
          mb={8}
          textAlign="start"
          size={{ base: "2xl", md: "3xl" }}
          color="pink.400"
        >
          Projects
        </Heading>

        <Stack
          direction="column"
          w="100%"
          spacing={{ base: "50px", md: "100px" }}
        >
          <Project
            image={Rakeoff}
            heading={"Rakeoff labs | Co-founder"}
            description={`- Built on the ICP blockchain which we received a $25k developer grant.`}
            description1={`- Designed the front-end using ReactJS and Chakra UI.`}
          />
          <Project
            image={jobon}
            heading={"Jobon"}
            description={`- Built a tradesman job site using Django and Javascript.`}
            description1={`- Awared best overall final year project in my class '23.`}
          />
        </Stack>
      </Container>
    </>
  );
};
export default Experience;

export const Project = ({
  heading,
  description,
  description1,
  image,
  isEven,
}) => {
  const isDesktop = useBreakpointValue({ base: false, md: true, lg: true });

  return (
    <>
      <SimpleGrid columns={[1, null, 2]} w="100%" spacing="45px">
        {isEven && isDesktop ? (
          <>
            <VideoStep image={image} />{" "}
            <TextStep
              heading={heading}
              description={description}
              description1={description1}
            />
          </>
        ) : (
          <>
            <TextStep
              heading={heading}
              description={description}
              description1={description1}
            />
            <VideoStep image={image} />
          </>
        )}
      </SimpleGrid>
    </>
  );
};

function TextStep({ heading, description, description1 }) {
  return (
    <div>
      <Heading
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: "3xl", md: "2xl", lg: "4xl", xl: "5xl" }}
        mx={{ base: 2, md: 0 }}
      >
        <Text
          textAlign={{
            base: "center",
            md: "center",
            lg: "center",
            xl: "start",
          }}
          mb={{ base: 2, md: 0, lg: 2, xl: 0 }}
          color={"grey.400"}
        >
          {heading}
        </Text>
      </Heading>
      <Text
        textAlign={{
          base: "center",
          md: "center",
          lg: "center",
          xl: "start",
        }}
        color={"gray.100"}
        fontSize={{ base: "lg", md: "lg", lg: "xl" }}
        mt={{ base: 8, md: 8 }}
        mx={{ base: 2, md: 2, lg: 2 }}
      >
        {description}
      </Text>
      <Text
        textAlign={{
          base: "center",
          md: "center",
          lg: "center",
          xl: "start",
        }}
        color={"gray.100"}
        fontSize={{ base: "lg", md: "lg", lg: "xl" }}
        mt={{ base: 8, md: 8 }}
        mx={{ base: 2, md: 2, lg: 2 }}
      >
        {description1}
      </Text>
    </div>
  );
}

function VideoStep({ image }) {
  return (
    <>
      <Flex
        flex={1}
        justify={"center"}
        align={"center"}
        position={"relative"}
        w={"234px"}
      >
        <Box
          flex={1}
          justify={"center"}
          align={"center"}
          height={{ base: "210px", md: "200px", lg: "80px", xl: "220px" }}
          rounded={"xl"}
          mx={{ base: 3, md: 3, lg: 3, xl: 0 }}
          width={"full"}
          overflow={"hidden"}
          borderRadius="xl"
          bg="purple.600"
          border={boxBorderColor}
          borderColor="black"
        >
          <Image src={image} boxSize={"230px"} alt="step" objectFit="contain" />
        </Box>
      </Flex>
    </>
  );
}
