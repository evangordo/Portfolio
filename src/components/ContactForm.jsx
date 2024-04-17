import { useState } from "react";

import emailjs from "@emailjs/browser";
import {
  Container,
  useColorMode,
  Flex,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Box,
  Stack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { BsGithub, BsPerson } from "react-icons/bs";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const ContactForm = () => {
  const { colorMode } = useColorMode();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage("Message sent!");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        },
        (error) => {
          setStateMessage("Something went wrong, please try again later");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        }
      );

    e.target.reset();
  };
  return (
    <Container maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          className={colorMode === "dark" ? "contactForm" : "contactFormWhite"}
          w="100%"
          borderRadius="lg"
          color="white"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500"></Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="center">
                      <Button
                        size="md"
                        height="48px"
                        variant="ghost"
                        color={colorMode === "dark" ? "white" : "black"}
                        leftIcon={
                          <MdPhone
                            color={colorMode === "dark" ? "white" : "black"}
                            size="20px"
                          />
                        }
                      >
                        +353 871926464
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        variant="ghost"
                        color={colorMode === "dark" ? "white" : "black"}
                        leftIcon={
                          <MdEmail
                            color={colorMode === "dark" ? "white" : "black"}
                            size="20px"
                          />
                        }
                      >
                        evan.gordon7@mail.dcu.ie
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        variant="ghost"
                        color={colorMode === "dark" ? "white" : "black"}
                        leftIcon={
                          <MdLocationOn
                            color={colorMode === "dark" ? "white" : "black"}
                            size="20px"
                          />
                        }
                      >
                        Dublin, Ireland
                      </Button>
                    </VStack>
                  </Box>
                  <HStack mt={{ lg: 10, md: 10 }} spacing={5} px={12}>
                    <IconButton
                      as="a"
                      href="https://twitter.com/EvanGordon9343"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{
                        boxShadow: `0px 0px 10px 6px #454667`,
                      }}
                      icon={<FaXTwitter size="28px" />}
                    />

                    <IconButton
                      as="a"
                      href="https://github.com/evangordo"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{
                        boxShadow: `0px 0px 10px 6px #454667`,
                      }}
                      icon={<BsGithub size="28px" />}
                    />
                    <IconButton
                      as="a"
                      href="https://www.linkedin.com/in/evan-gordo/"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{
                        boxShadow: `0px 0px 10px 6px #454667`,
                      }}
                      icon={<FaLinkedinIn size="28px" />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <form onSubmit={sendEmail}>
                        <FormControl id="name">
                          <FormLabel color="grey">Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <BsPerson color="gray.800" />
                            </InputLeftElement>
                            <Input
                              type="text"
                              bg="white"
                              name="user_name"
                              size="lg"
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel color="grey">Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <MdOutlineEmail color="gray.800" />
                            </InputLeftElement>
                            <Input
                              type="email"
                              name="user_email"
                              bg="white"
                              size="lg"
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="message">
                          <FormLabel color={"grey"}>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: "gray.300",
                            }}
                            name="message"
                            color="black"
                            bg={colorMode === "dark" ? "white " : "white"}
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Stack align="center">
                            <Button
                              m={4}
                              size={"lg"}
                              _hover={{
                                boxShadow: `0px 0px 10px 6px #454667`,
                              }}
                              boxShadow={`0px 0px 10px 3px #454667`}
                              color={
                                colorMode === "light" ? "#1a202d " : "white"
                              }
                              type="submit"
                              disabled={isSubmitting}
                            >
                              Send Message
                            </Button>
                            {stateMessage && <p>{stateMessage}</p>}
                          </Stack>
                        </FormControl>
                      </form>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};
export default ContactForm;
