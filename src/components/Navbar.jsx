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
  Image as ChakraImage,
} from "@chakra-ui/react";
import githubLogo from "../assets/github_logo.svg";
import linkedin from "../assets/linkedin.png";

import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box px={6}>
        <Flex h={24} justifyContent={"space-between"}>
          <Box></Box>

          <Flex alignItems={"center"}>
            <IconButton
              icon={<HamburgerIcon />}
              aria-label="Open menu"
              onClick={onOpen}
              boxSize={45}
              border={"blue"}
            />
            <Drawer onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader></DrawerHeader>
                <DrawerBody>
                  <VStack onClick={onClose} gap={8} align="start">
                    <Text
                      fontSize={28}
                      as="a"
                      href="https://docs.rakeoff.io/welcome/new-to-icp"
                      target="_blank"
                      color={"white"}
                      fontWeight={500}
                    >
                      Projects
                    </Text>
                    <Divider />
                    <Text
                      fontSize={28}
                      as="a"
                      href="https://analytics.rakeoff.io/"
                      target="_blank"
                      color={"white"}
                      fontWeight={500}
                    >
                      Education
                    </Text>
                    <Divider />

                    <Text
                      fontSize={28}
                      as="a"
                      href="https://docs.rakeoff.io/welcome/frequently-asked-questions"
                      target="_blank"
                      color={"white"}
                      fontWeight={500}
                    >
                      About
                    </Text>
                    <Divider />
                    <Text
                      fontSize={28}
                      as="a"
                      href="https://docs.rakeoff.io/welcome/frequently-asked-questions"
                      target="_blank"
                      color={"white"}
                      fontWeight={500}
                    >
                      Contact
                    </Text>
                    <Divider />
                    <SocialButtonList />
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
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

const SocialIconLink = ({ image, alt, link, xLogo }) => {
  return (
    <a href={link} target="_blank">
      <Box
        borderRadius="md"
        borderBottom={"solid #fff 2px"}
        py={0.5}
        px={1}
        _hover={{ opacity: "0.8", cursor: "pointer" }}
      >
        <ChakraImage
          alt={alt}
          src={image}
          _hover={{ opacity: 0.8 }}
          h="25px"
          p={xLogo ? "3px" : 0}
        />
      </Box>
    </a>
  );
};
