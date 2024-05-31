import React, { useRef } from "react";
import {
  Image,
  Box,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  HStack,
  Container,
  Link,
  UnorderedList,
  ListItem,
  Stack,
  useColorMode,
  useBreakpointValue,
} from "@chakra-ui/react";
import "../App.css";
import { boxBorderColor } from "../tools/colors";
import dcu from "../assets/dcu.png";
import bordeaux from "../assets/bordeaux.png";

import { motion, useInView } from "framer-motion";

const Education = () => {
  const { colorMode } = useColorMode();

  const classes =
    colorMode === "light" ? "whitePatternEducation" : "navyPatternEducation";

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
          <Box position={"relative"}>
            <Container maxW="7xl" mt={{ base: 12, md: "5rem" }} p={0}>
              <Heading
                mb={8}
                mx={{ base: 0, md: 4, lg: 4, xl: 0 }}
                textAlign={{ base: "center", md: "start" }}
                size={"3xl"}
                _dark={{ color: "grey" }}
                style={{
                  textShadow:
                    "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px grey, 0 0 30px grey, 0 0 40px grey, 0 0 55px grey, 0 0 75px grey",
                }}
              >
                Education
              </Heading>
              <Stack direction="column" spacing={{ base: "50px", md: "100px" }}>
                <School
                  image={dcu}
                  heading={"B.Sc. Computing & Business, 2019-2023"}
                  description={[
                    `Graduated with first class honours, ranking 3rd.`,
                    `Highest graded final-year project.`,
                    `Awarded the sponsored Fineos best CS Research paper.`,
                  ]}
                  bg={"#013d68 "}
                  link={"https://www.dcu.ie/"}
                />
                <School
                  image={bordeaux}
                  heading={"Erasmus, 2021-2022"}
                  description={[
                    `6 months erasmus experience.`,

                    `Extensive networking with internationals.`,
                  ]}
                  bg={"white "}
                  link={"https://www.u-bordeaux.fr/en"}
                />
              </Stack>
            </Container>
            <Box
              position={"absolute"}
              top={40}
              left={{ base: -30, md: -30, lg: 600, xl: 1010 }}
              className={classes}
              zIndex={-1}
            />
          </Box>
        </span>
      </section>
    </>
  );
};
export default Education;

export const School = ({ heading, description, image, bg, link }) => {
  const isDesktop = useBreakpointValue({
    base: false,
    md: true,
    lg: true,
    xl: true,
  });
  return (
    <>
      {isDesktop ? (
        <HStack spacing={"74px"}>
          <Logo image={image} bg={bg} link={link} />

          <BulletPoint heading={heading} description={description} />
        </HStack>
      ) : (
        <SimpleGrid columns={1}>
          <Logo image={image} bg={bg} link={link} />

          <BulletPoint heading={heading} description={description} />
        </SimpleGrid>
      )}
    </>
  );
};

function BulletPoint({ heading, description }) {
  const { colorMode } = useColorMode();

  return (
    <div>
      <Heading
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: "2xl", md: "2xl", lg: "4xl", xl: "5xl" }}
        mx={{ base: 1, md: 2, lg: 2, xl: 0 }}
      >
        <Text
          textAlign={{
            base: "center",
            md: "center",
            lg: "center",
            xl: "start",
          }}
          mt={{ base: 4, md: 0, lg: 0, xl: 0 }}
          mb={{ base: 0, md: 6, lg: 0, xl: 0 }}
          color={"grey.400"}
          mx={{ base: 12, md: 2, lg: 2, xl: 0 }}
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
        fontSize={{ base: "lg", md: "lg", lg: "2xl" }}
        mt={{ base: 4, md: 2 }}
        mx={{ base: 7, md: 0 }}
        color={
          colorMode === "light" ? "solid #e2e8f0 2px" : "solid #363b4c 2px"
        }
      >
        <UnorderedList>
          {description.map((point, index) => (
            <ListItem key={index} m={4}>
              {point}
            </ListItem>
          ))}
        </UnorderedList>
      </Text>
    </div>
  );
}

function Logo({ image, bg, link }) {
  return (
    <>
      <motion.a whileHover={{ scale: 1.1 }}>
        <Link href={link} isExternal>
          <Flex
            flex={1}
            justify={{ base: "right", md: "center" }}
            align={{ base: "right", md: "center" }}
            w={{ base: "full", md: "280px", lg: "300px" }}
          >
            <Box
              justify={"center"}
              align={"center"}
              height={{ base: "210px", md: "230px", lg: "220px", xl: "235px" }}
              rounded={"xl"}
              mx={{ base: 12, md: 3, lg: 3, xl: 0 }}
              width={{ base: "100%", md: "300px" }}
              overflow={"hidden"}
              borderRadius="xl"
              bg={bg}
              border={boxBorderColor}
              borderColor="black"
            >
              <Image
                src={image}
                p={{ base: 1, md: 2, lg: 2 }}
                m={{ base: -3, md: 2 }}
                boxSize={{ base: "240px", md: "240px", lg: "230px" }}
                alt="step"
                objectFit="contain"
              />
            </Box>
          </Flex>
        </Link>
      </motion.a>
    </>
  );
}
