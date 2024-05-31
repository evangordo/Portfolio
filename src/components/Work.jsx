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
  HStack,
  Wrap,
  WrapItem,
  Center,
} from "@chakra-ui/react";
import { boxBorderColor } from "../tools/colors";
import Rakeoff from "../assets/rakeoff.png";
import { motion, useInView } from "framer-motion";
import "../App.css";

const Work = () => {
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
                Work
              </Heading>

              <Stack
                direction="column"
                spacing={{ base: "50px", md: "100px", lg: "100px" }}
              >
                <Project
                  image={Rakeoff}
                  heading={"May '23 - April '24"}
                  description={[
                    `Built on the ICP blockchain in which we received a $25k developer grant.`,
                    `Frontend developer.`,
                  ]}
                  bg={"purple.600"}
                  link={"https://rakeoff.io/"}
                  tags={["React", "Chakra UI", "Context API", "Framer", "Web3"]}
                />
              </Stack>
            </Container>
            <Box
              position={"absolute"}
              top={-35}
              left={{ base: -25, md: -38 }}
              className={classes}
              zIndex={-1}
            />
          </Box>
        </span>
      </section>
    </>
  );
};
export default Work;

export const Project = ({ heading, description, image, bg, tags, link }) => {
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

          <Wrapper />
        </HStack>
      ) : (
        <SimpleGrid columns={[1, 3, 3]} gap={6}>
          <Logo image={image} bg={bg} link={link} />

          <BulletPoint heading={heading} description={description} />
          <TechStack tags={tags} />
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
        mx={{ base: 2, md: 2, lg: 0 }}
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
          mx={{ base: 2, md: 2, lg: 0 }}
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
        fontSize={{ base: "lg", md: "lg", lg: "2xl" }}
        mt={{ base: 4, md: 2 }}
        mx={{ base: 7, md: 2, lg: 0 }}
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
            w={{ base: "full", md: "280px", lg: "300px" }}
          >
            <Box
              flex={1}
              justify={"center"}
              align={"center"}
              height={{ base: "210px", md: "230px", lg: "220px", xl: "235px" }}
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
                p={{ base: 4, md: 1, lg: 0 }}
                m={{ base: -4, md: 0, lg: 0 }}
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
const TechStack = ({ tags }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      {tags.map((tag, index) => (
        <Box
          key={index}
          mx={{ base: 12, md: 4, lg: 4, xl: 0 }}
          bg={"#31354f"}
          border={boxBorderColor}
          rounded={"md"}
          borderColor={
            colorMode === "light" ? "solid #e2e8f0 2px" : "solid #363b4c 2px"
          }
          h={{ base: "8", md: "12" }}
        >
          <Text
            fontSize={{ base: "lg", md: "md", lg: "xl" }}
            color={"white"}
            align="center"
            p={{ base: -1, md: 1 }}
            mb={12}
          >
            {tag}
          </Text>
        </Box>
      ))}
    </>
  );
};

const Wrapper = () => {
  return (
    <Wrap spacing="20px" border={"white"} justify="center">
      <WrapItem border={boxBorderColor}>
        <Center p={1} w="180px" h="60px" bg="#31354f">
          <Text fontSize={"xl"}>React</Text>
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w="180px" border={boxBorderColor} p={1} h="60px" bg="#31354f">
          <Text p={1} fontSize={"xl"}>
            Chakra UI
          </Text>
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w="120px" border={boxBorderColor} p={1} h="60px" bg="#31354f">
          <Text fontSize={"xl"}>Context API</Text>
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w="120px" borderColor={"white"} p={1} h="60px" bg="#31354f">
          <Box borderColor={"white"}>
            <Text fontSize={"xl"}>Framer</Text>
          </Box>
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w="180px" border={boxBorderColor} p={1} h="60px" bg="#31354f">
          <Text fontSize={"xl"}>Web 3</Text>
        </Center>
      </WrapItem>
    </Wrap>
  );
};
