import { Box } from "@chakra-ui/react";
import bgImage from "@/assets/tlo.webp";
import TextHero from "./TextHero";

const Hero = () => {
  return (
    <Box
      p={{ base: 4, md: 8 }}
      minH={{ base: "200px", md: "300px", lg: "400px" }}
      bgImage={`url(${bgImage})`}
      position="relative"
      overflow="hidden"
      bgColor={"#0b2b4c"}
      boxShadow="0 2px 4px rgba(0,0,0,0.05)"
      mx="auto"
      maxW={{ base: "auto", md: "auto", lg: "1200px" }}
    >
      <TextHero />
    </Box>
  );
};

export default Hero;
