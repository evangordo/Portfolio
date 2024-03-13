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
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import { boxBorderColor } from "../tools/colors";
import Rakeoff from "../assets/rakeoff.png";
import jobon from "../assets/jobon.png";
import { motion, useInView } from "framer-motion";

const Projects = () => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === "light" ? "#5455c2" : "#292c4e";

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
              position={"relative"}
              _after={{
                content: "''",
                width: useBreakpointValue({ base: "100%", md: "18%" }),
                height: useBreakpointValue({ base: "30%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: bgColor,
                zIndex: -1,
              }}
              mb={8}
              textAlign={{ base: "center", md: "start" }}
              size={"3xl"}
              color={
                colorMode === "light"
                  ? "solid #e2e8f0 2px"
                  : "solid #363b4c 2px"
              }
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
export default Projects;

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
  const { colorMode } = useColorMode();

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
        color={
          colorMode === "light" ? "solid #e2e8f0 2px" : "solid #363b4c 2px"
        }
        fontSize={{ base: "lg", md: "lg", lg: "xl" }}
        mt={{ base: 4, md: 2 }}
        mx={{ base: 7, md: 0 }}
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
            justify="center"
            align="center"
            w={{ base: "full", md: "300px" }}
          >
            <Box
              flex={1}
              justify={"center"}
              align={"center"}
              height={{ base: "210px", md: "200px", lg: "80px", xl: "235px" }}
              rounded={"xl"}
              mx={{ base: 12, md: 3, lg: 3, xl: 0 }}
              overflow={"hidden"}
              borderRadius="xl"
              bg={bg}
              border={boxBorderColor}
              borderColor="black"
            >
              <Image
                src={image}
                p={1}
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
  const { colorMode } = useColorMode();

  const isDesktop = useBreakpointValue({
    base: false,
    md: false,
    lg: true,
    xl: true,
  });
  return (
    <>
      <SimpleGrid
        //had base but still threw off mobile so using breakpoint
        minChildWidth={isDesktop ? "120px" : null}
        spacing={"20px"}
      >
        {tags.map((tag, index) => (
          <Box
            key={index}
            mx={{ base: 12, md: 0 }}
            bg={"#5455c1"}
            border={boxBorderColor}
            rounded={"full"}
            borderColor={
              colorMode === "light" ? "solid #e2e8f0 2px" : "solid #363b4c 2px"
            }
            h={{ base: "8", md: "10" }}
          >
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color={"white"}
              align="center"
              p={{ base: -1, md: 1 }}
              mb={7}
            >
              {tag}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};
