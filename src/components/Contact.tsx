import React, { useRef } from "react";
import { Container, Heading, useColorMode } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import ContactForm from "./ContactForm";
const Contact = () => {
  const { colorMode } = useColorMode();

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
          <Container maxW={"7xl"} mt={{ base: 12, md: "5rem" }} p={0}>
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
              Contact
            </Heading>

            <ContactForm />
          </Container>
        </span>
      </section>
    </>
  );
};

export default Contact;
