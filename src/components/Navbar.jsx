import {
  Box,
  Flex,
  Text,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerHeader,
  VStack,
  Divider,
  IconButton,
  HStack,
  Button,
  useColorMode,
  Image as ChakraImage,
} from "@chakra-ui/react";
import githubLogo from "../assets/github_logo.svg";
import resume from "../assets/Resume_2024.pdf";
import linkedin from "../assets/linkedin.png";
import { Link } from "react-scroll";
import EG from "../assets/EG.svg";
import eg_Dark from "../assets/EG_Dark.svg";
import { motion } from "framer-motion";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import { HamburgerIcon, ExternalLinkIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        position={{ base: undefined, md: "fixed" }}
        top={0}
        left={0}
        right={0}
        zIndex={1000}
        px={6}
      >
        <Flex h={24} justifyContent={"space-between"}>
          <Box p={4}>
            <Link to="hero">
              <ChakraImage
                src={colorMode === "light" ? eg_Dark : EG}
                width="60px"
                height="60px"
              />
            </Link>
          </Box>

          <Flex alignItems={"center"}>
            <Button onClick={toggleColorMode} boxSize={45} m={4}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
            <motion.a whileHover={{ scale: 1.2 }}>
              <IconButton
                icon={<HamburgerIcon />}
                aria-label="Open menu"
                onClick={onOpen}
                boxSize={45}
                border={"white"}
              />
              <Drawer onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader></DrawerHeader>
                  <DrawerBody>
                    <VStack onClick={onClose} gap={8} align="start">
                      <Button bg="">
                        <Link
                          to="projects"
                          spy={true}
                          smooth={true}
                          duration={500}
                          onClick={onClose}
                        >
                          <Text
                            _hover={{
                              color: "#292c4e",
                            }}
                            fontSize={24}
                            color={
                              colorMode === "dark"
                                ? "solid #e2e8f0 2px"
                                : "solid #363b4c 2px"
                            }
                            fontWeight={700}
                          >
                            Projects
                          </Text>
                        </Link>
                      </Button>
                      <Divider />
                      <Button bg="">
                        <Link
                          to="education"
                          spy={true}
                          smooth={true}
                          duration={500}
                          onClick={onClose}
                        >
                          <Text
                            _hover={{
                              color: "#292c4e",
                            }}
                            fontSize={24}
                            color={
                              colorMode === "dark"
                                ? "solid #e2e8f0 2px"
                                : "solid #363b4c 2px"
                            }
                            fontWeight={700}
                          >
                            Education
                          </Text>
                        </Link>
                      </Button>
                      <Divider />
                      <Button bg="">
                        <Link
                          to="about"
                          spy={true}
                          smooth={true}
                          duration={500}
                          onClick={onClose}
                        >
                          <Text
                            _hover={{
                              color: "#292c4e",
                            }}
                            fontSize={24}
                            color={
                              colorMode === "dark"
                                ? "solid #e2e8f0 2px"
                                : "solid #363b4c 2px"
                            }
                            fontWeight={700}
                          >
                            About
                          </Text>
                        </Link>
                      </Button>
                      <Divider />
                      <Button bg="">
                        <a href={resume} isExternal>
                          <Text
                            _hover={{
                              color: "#292c4e",
                            }}
                            fontSize={24}
                            color={
                              colorMode === "dark"
                                ? "solid #e2e8f0 2px"
                                : "solid #363b4c 2px"
                            }
                            fontWeight={700}
                          >
                            Resume <ExternalLinkIcon mb={1} />
                          </Text>
                        </a>
                      </Button>
                      <Divider />
                      <Button bg="">
                        <Link
                          to="#contact"
                          spy={true}
                          smooth={true}
                          duration={500}
                          onClick={onClose}
                        >
                          <Text
                            _hover={{
                              color: "#292c4e",
                            }}
                            fontSize={24}
                            color={
                              colorMode === "dark"
                                ? "solid #e2e8f0 2px"
                                : "solid #363b4c 2px"
                            }
                            fontWeight={700}
                          >
                            Contact
                          </Text>
                        </Link>
                      </Button>
                      <Divider />

                      <SocialButtonList />
                    </VStack>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </motion.a>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
export default Navbar;

const SocialButtonList = () => {
  return (
    <HStack mt={3} gap={3}>
      <SocialIconLink
        image={linkedin}
        alt={"discord link"}
        link={"https://www.linkedin.com/in/evan-gordo/"}
      />

      <SocialIconLink
        image={githubLogo}
        alt={"github link"}
        link={"https://github.com/evangordo"}
      />
    </HStack>
  );
};
const SocialIconLink = ({ image, alt, link }) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <motion.a whileHover={{ scale: 1.2 }}>
        <a href={link}>
          <Box
            borderRadius="md"
            borderBottom={
              colorMode === "dark" ? "solid #e2e8f0 2px" : "solid #363b4c 2px"
            }
            py={0.5}
            px={1}
            _hover={{ opacity: "0.8", cursor: "pointer" }}
            bg={"#2d3748 "}
          >
            <ChakraImage
              alt={alt}
              src={image}
              _hover={{ opacity: 0.8 }}
              h="25px"
            />
          </Box>
        </a>
      </motion.a>
    </>
  );
};
