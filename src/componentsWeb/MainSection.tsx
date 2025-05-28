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
          fontSize={{ base: "25px", md: "35px", lg: "40px" }}
          my={10}
          color={"white"}
          lineHeight={1.3}
        >
          Dedykowane systemy <br /> IT dla Twojej firmy
          <Text
            fontSize={{ base: "12px", md: "15px", lg: "20px" }}
            fontWeight={0}
            my={2}
          >
            Automatyzuj. Optymalizuj. Zarządzaj.
          </Text>
        </Heading>
      </Stack>
    </Box>
  );
};

export default AboutSection;
