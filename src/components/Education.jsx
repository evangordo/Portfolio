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
  useBreakpointValue,
} from "@chakra-ui/react";
import { boxBorderColor } from "../tools/colors";
import dcu from "../assets/dcu.png";
import bordeaux from "../assets/bordeaux.png";

import { motion, useInView } from "framer-motion";

const Education = () => {
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
          <Container maxW="7xl" mt={{ base: 12, md: "5rem" }} p={0}>
            <Heading
              mb={8}
              textAlign={{ base: "center", md: "start" }}
              size={{ base: "2xl", md: "3xl" }}
              color="white"
            >
              Education
            </Heading>
            <Stack direction="column" spacing={{ base: "50px", md: "100px" }}>
              <School
                image={dcu}
                heading={"B.Sc, Enterprise Computing, 2019-2023"}
                description={[
                  `Graduated with first class honours, ranking 3rd.`,
                  `Highest graded final-year project.`,
                  `Awarded the best Computer Science Research paper.`,
                  "DCU tennis varsities player.",
                ]}
                bg={"#013d68 "}
                link={"https://www.dcu.ie/"}
              />
              <School
                image={bordeaux}
                heading={"Erasmus, 2021-2022"}
                description={[
                  `6 months computer science exchange.`,
                  "Strengthened python programming.",
                  "B1 in french language.",
                  `Extensive networking.`,
                ]}
                bg={"white "}
                link={"https://www.u-bordeaux.fr/en"}
              />
            </Stack>
          </Container>
        </span>
      </section>
    </>
  );
};
export default Education;

export const School = ({ heading, description, image, bg, link }) => {
  const isDesktop = useBreakpointValue({
    base: false,
    md: false,
    lg: true,
    xl: true,
  });
  return (
    <>
      {isDesktop ? (
        <HStack spacing={"74px"}>
          <Logo image={image} bg={bg} link={link} />

          <TextStep heading={heading} description={description} />
        </HStack>
      ) : (
        <SimpleGrid columns={1}>
          <Logo image={image} bg={bg} link={link} />

          <TextStep heading={heading} description={description} />
        </SimpleGrid>
      )}
    </>
  );
};

function TextStep({ heading, description }) {
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
          mt={{ base: 4, md: 0, lg: 2, xl: 0 }}
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
        mt={{ base: 4, md: 2 }}
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
            w={{ base: "full", md: "300px" }}
          >
            <Box
              justify={"center"}
              align={"center"}
              height={{ base: "210px", md: "200px", lg: "80px", xl: "235px" }}
              rounded={"xl"}
              mx={{ base: 3, md: 3, lg: 3, xl: 0 }}
              width={{ base: "100%", md: "300px" }}
              overflow={"hidden"}
              borderRadius="xl"
              bg={bg}
              border={boxBorderColor}
              borderColor="black"
            >
              <Image
                src={image}
                mt={{ base: 0, md: 2 }}
                boxSize={{ base: "220px", md: "230px" }}
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
