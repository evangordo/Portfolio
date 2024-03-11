import React, { useRef } from "react";
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
import { boxBorderColor } from "../tools/colors";
import Rakeoff from "../assets/rakeoff.png";
import jobon from "../assets/jobon.png";
import { motion, useInView } from "framer-motion";

const Experience = () => {
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
              Projects
            </Heading>

            <Stack direction="column" spacing={{ base: "50px", md: "100px" }}>
              <Project
                image={Rakeoff}
                heading={" May '23 - Present"}
                description={[
                  `Built on the ICP blockchain in which we received a $25k developer grant.`,
                  `Designed the frontend using ReactJS and Chakra UI.`,
                  `Utilised GraphQL and RestAPI for our analytics site.`,
                ]}
                bg={"purple.600"}
                link={"https://rakeoff.io/"}
                tags={[
                  "React.JS",
                  "JavaScript",
                  "Chakra UI",
                  "GraphQL",
                  "Framer",
                  "Blockchain",
                  "Web3",
                ]}
              />

              <Project
                image={jobon}
                heading={"2022 - 2023"}
                description={[
                  `Built a tradesman job site using Django and Javascript.`,
                  `Awarded highest graded final year project in my class '23.`,
                ]}
                bg={"#004aad"}
                tags={[
                  "Django",
                  "Python",
                  "JavaScript",
                  "Stripe API",
                  "SQL.lite",
                  "Bootstrap",
                  "Git",
                ]}
              />
            </Stack>
          </Container>
        </span>
      </section>
    </>
  );
};
export default Experience;

export const Project = ({ heading, description, image, bg, tags, link }) => {
  return (
    <>
      <SimpleGrid columns={[1, null, 3]} gap={6}>
        <Logo image={image} bg={bg} link={link} />

        <TextStep heading={heading} description={description} />
        <TechStack tags={tags} />
      </SimpleGrid>
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
              flex={1}
              justify={"center"}
              align={"center"}
              height={{ base: "210px", md: "200px", lg: "80px", xl: "235px" }}
              rounded={"xl"}
              mx={{ base: 3, md: 3, lg: 3, xl: 0 }}
              width={"full"}
              overflow={"hidden"}
              borderRadius="xl"
              bg={bg}
              border={boxBorderColor}
              borderColor="black"
            >
              <Image
                src={image}
                m={{ base: -4, md: 0 }}
                boxSize={{ base: "240px", md: "230px" }}
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
const TechStack = ({ tags }) => {
  return (
    <>
      <SimpleGrid minChildWidth="120px" spacing="20px">
        {tags.map((tag, index) => (
          <Box
            key={index}
            mx={2}
            bg={"blue.700"}
            border={boxBorderColor}
            rounded={"full"}
            borderColor="white"
            h={10}
          >
            <Text fontSize={20} color={"white"} align="center" p={1} mb={7}>
              {tag}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};
