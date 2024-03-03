import React from "react";
import {
  Image,
  useColorModeValue,
  Box,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Stack,
  Center,
  Container,
  useBreakpointValue,
} from "@chakra-ui/react";
import { boxBackgroundColor, boxBorderColor } from "../tools/colors";
import Rakeoff from "../assets/rakeoff.png";

const Experience = () => {
  return (
    <>
      <Container maxW="7xl" mt={{ base: 12, md: "5rem" }} p={0}>
        <Center mb={8}>
          <Heading size={{ base: "2xl", md: "3xl" }} color="white">
            Projects
          </Heading>
        </Center>
        <Stack
          direction="column"
          w="100%"
          spacing={{ base: "50px", md: "100px" }}
        >
          <Project
            image={Rakeoff}
            heading={"Rakeoff DeFi app"}
            description={`Co-founder`}
          />
        </Stack>
      </Container>
    </>
  );
};
export default Experience;

export const Project = ({ heading, description, image, isEven }) => {
  const isDesktop = useBreakpointValue({ base: false, md: true, lg: true });

  return (
    <>
      <SimpleGrid columns={[1, null, 2]} w="100%" spacing="45px">
        {isEven && isDesktop ? (
          <>
            <VideoStep image={image} />{" "}
            <TextStep heading={heading} description={description} />
          </>
        ) : (
          <>
            <TextStep heading={heading} description={description} />
            <VideoStep image={image} />
          </>
        )}
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
          color={"purple.400"}
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
        mt={{ base: 8, md: 8 }}
        mx={{ base: 2, md: 2, lg: 2 }}
      >
        {description}
      </Text>
    </div>
  );
}

function VideoStep({ image }) {
  return (
    <>
      <Flex
        flex={1}
        justify={"center"}
        align={"center"}
        position={"relative"}
        w={"full"}
      >
        <Box
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
          height={{ base: "210px", md: "200px", lg: "220px", xl: "300px" }}
          rounded={"2xl"}
          mx={{ base: 3, md: 3, lg: 3, xl: 0 }}
          width={"full"}
          overflow={"hidden"}
          borderRadius="2xl"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          bg={boxBackgroundColor}
          border={boxBorderColor}
          borderColor="black"
          boxShadow={useColorModeValue(
            "10px 10px 0 purple",
            "10px 10px 0 blueviolet"
          )}
        >
          <Image src={image} alt="step" objectFit="cover" />
        </Box>
      </Flex>
    </>
  );
}
