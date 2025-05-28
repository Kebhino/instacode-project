import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import bgImage from "@/assets/tlo.webp";

const AboutSection = () => {
  return (
    <Box
      p={{ base: 4, md: 8 }}
      maxW="1200px"
      minH={400}
      bgImage={`url(${bgImage})`}
      position="relative"
      overflow="hidden"
      bgColor={"#0b2b4c"}
      boxShadow="0 2px 4px rgba(0,0,0,0.05)"
    >
      {/* Heading + opis */}
      <Stack gap={4} textAlign="left" maxW="800px" mx="10" zIndex="1">
        <Heading
          as={"h1"}
          fontSize={{ base: "2.5rem", md: "2.5rem" }}
          my={10}
          color={"white"}
          lineHeight={1.3}
        >
          Dedykowane systemy <br /> IT dla Twojej firmy
          <Text fontSize={"lg"} fontWeight={0} my={2}>
            Automatyzuj. Optymalizuj. Zarządzaj.
          </Text>
        </Heading>
      </Stack>
    </Box>
  );
};

export default AboutSection;
