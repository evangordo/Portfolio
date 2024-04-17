import { useState } from "react";
import {
  Box,
  Button,
  VStack,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";

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
    <>
      <WrapItem>
        <Box
          className={colorMode === "dark" ? "contactForm" : "contactFormWhite"}
          w="100%"
          borderRadius="lg"
        >
          <Box m={8} color="#171923">
            <VStack spacing={5}>
              <form onSubmit={sendEmail}>
                <FormControl id="name">
                  <FormLabel color={"grey"}>Your Name</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <InputLeftElement pointerEvents="none"></InputLeftElement>
                    <Input type="text" bg="white" name="user_name" size="lg" />
                  </InputGroup>
                </FormControl>
                <FormControl id="email">
                  <FormLabel color={"grey"}>Email</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <InputLeftElement pointerEvents="none"></InputLeftElement>
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
                <FormControl id="submit">
                  <Stack align="center">
                    <Button
                      m={3}
                      size={"lg"}
                      align="center"
                      variant="solid"
                      color={colorMode === "dark" ? "white " : "grey"}
                      _hover={{}}
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
    </>
  );
};
export default ContactForm;
