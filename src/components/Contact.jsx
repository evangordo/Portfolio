import React, { useRef } from "react";
import {
  Container,
  Heading,
  Text,
  Box,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import { useInView } from "framer-motion";

const Contact = () => {
  const { colorMode } = useColorMode();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const bgColor = colorMode === "light" ? "#5455c2" : "#292c4e";

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
          <Container maxW={"7xl"} mt={{ base: 12, md: "5rem" }} p={0}>
            <Heading
              position={"relative"}
              _after={{
                content: "''",
                width: useBreakpointValue({ base: "0%", md: "18%" }),
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
              Contact
            </Heading>
            <Container justifyContent={{ base: "center", md: "start" }}>
              <Box>
                <Text
                  mx={2}
                  fontSize={{ base: "lg", md: "2xl" }}
                  textAlign={{ base: "center", md: "start" }}
                >
                  Since you've made it this far, why not get in touch with me?!
                </Text>
                <br />
                <Text
                  mx={2}
                  fontSize={{ base: "lg", md: "2xl" }}
                  _hover={{
                    color: "teal.500",
                  }}
                  textAlign={{ base: "center", md: "start" }}
                >
                  evan.gordon7@mail.dcu.ie
                </Text>
              </Box>
            </Container>
          </Container>
        </span>
      </section>
    </>
  );
};

export default Contact;
