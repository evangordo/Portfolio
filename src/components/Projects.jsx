import React, { useRef } from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  Container,
  UnorderedList,
  ListItem,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import { boxBorderColor } from "../tools/colors";

import { useInView } from "framer-motion";
import "../App.css";

const Projects = () => {
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
                color={
                  colorMode === "light"
                    ? "solid #e2e8f0 2px"
                    : "solid #363b4c 2px"
                }
              >
                Projects
              </Heading>

              <Stack
                direction="column"
                spacing={{ base: "50px", md: "100px", lg: "100px" }}
              >
                <Project
                  heading={"E-commerce app"}
                  description={[
                    `Built an e-ccomerce Saas app`,
                    `Integrated Stripe API for customer checkout and Resend for receipts `,
                    `Utilised Prisma for the databse`,
                    `Styled using Tailwind CSS and Shadcn libary`,
                  ]}
                  tags={[
                    "Next.js",
                    `Prisma`,
                    `TypeScript`,
                    "Stripe API",
                    "Zod ",
                    "Resend",
                    "Middleware",
                    "Next auth",
                  ]}
                />
                <Project
                  heading={"Blog app"}
                  description={[
                    `Built a blog app with Nextjs User Autentication`,
                    `Allows users to login with their GitHub `,
                    `Full-stack application using Nextjs`,
                  ]}
                  tags={[
                    "Next.js",
                    "React",
                    "MongoDb",
                    "Mongoose",
                    "Middleware",
                    "Next auth",
                  ]}
                />
                <Project
                  heading={"React Food app"}
                  description={[
                    `Built a food app with React and Redux for State`,
                    `Utilised Firebase for the backend `,
                    `Full-stack application`,
                  ]}
                  tags={["React", "Redux", "Firebase", "Devtools"]}
                />

                <Project
                  heading={"Tradesman app"}
                  description={[
                    `Built a tradesman job site using Django and Javascript`,
                    `Awarded highest graded final year project in my class '23`,
                  ]}
                  tags={[
                    "Django",
                    "Python",
                    "JavaScript",
                    "Stripe API",
                    "SQL.lite",
                    "Bootstrap",
                    "GitLab",
                  ]}
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
export default Projects;

export const Project = ({ heading, description, tags }) => {
  return (
    <>
      <SimpleGrid columns={[1, 3, 3]} gap={6}>
        <Header heading={heading} />
        <BulletPoint description={description} />
        <TechStack tags={tags} />
      </SimpleGrid>
    </>
  );
};

function BulletPoint({ description }) {
  const { colorMode } = useColorMode();

  return (
    <div>
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

const Header = ({ heading }) => {
  return (
    <Heading
      lineHeight={1.1}
      fontWeight={600}
      fontSize={{ base: "3xl", md: "2xl", lg: "4xl", xl: "5xl" }}
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
        _dark={{ color: "grey" }}
        style={{
          textShadow:
            "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px grey, 0 0 30px grey, 0 0 40px grey, 0 0 55px grey, 0 0 75px grey",
        }}
      >
        {heading}
      </Text>
    </Heading>
  );
};
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
            mx={{ base: 12, md: 4, lg: 4, xl: 0 }}
            bg={"#5455c1"}
            border={boxBorderColor}
            rounded={"full"}
            borderColor={
              colorMode === "light" ? "solid #e2e8f0 2px" : "solid #363b4c 2px"
            }
            h={{ base: "8", md: "10" }}
          >
            <Text
              fontSize={{ base: "lg", md: "md", lg: "xl" }}
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
