import { Box, Heading, Stack, Text, Flex } from "@chakra-ui/react";

const AboutSection = () => {
  return (
    <Box
      p={{ base: 4, md: 8 }}
      maxW="1200px"
      mx="auto"
      borderRadius="lg"
      position="relative"
      overflow="hidden"
    >
      {/* Pikselowe tło */}
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        backgroundImage="radial-gradient(#3b82f6 1px, transparent 1px)"
        backgroundSize="20px 20px"
        opacity="0.1"
        pointerEvents="none"
        animation="moveBackground 15s linear infinite"
      />

      {/* Heading + opis */}
      <Stack gap={4} textAlign="center" maxW="800px" mx="auto" zIndex="1">
        <Heading
          as="h2"
          fontSize={{ base: "2xl", md: "4xl" }}
          textShadow="0 0 8px rgba(0,153,255,0.4)"
        >
          InstaCode – Twój partner w cyfrowej transformacji
        </Heading>

        <Text fontSize={{ base: "md", md: "lg" }} color="gray.700">
          Tworzymy dedykowane oprogramowanie dla firm, łącząc technologię z
          estetyką. Projektujemy i wdrażamy nowoczesne rozwiązania, które
          usprawniają procesy biznesowe, automatyzują pracę i wyróżniają marki w
          cyfrowym świecie.
        </Text>
      </Stack>

      {/* Dwukolumnowy układ pod spodem */}
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        gap={8}
        mt={12}
        position="relative"
        zIndex="1"
      >
        {/* Lewa kolumna - lista */}
        <Stack gap={6} flex="1" maxW="700px">
          <Text
            fontSize={{ base: "md", md: "lg" }}
            fontWeight="bold"
            textAlign="center"
            mt={4}
          >
            Chcesz, by Twoja firma była nowoczesna, widoczna i działała
            sprawniej? Skontaktuj się z nami!
          </Text>
        </Stack>

        {/* Prawa kolumna - symbol kodu */}
        <Flex
          align="center"
          justify="center"
          flex="1"
          display={{ base: "none", md: "flex" }}
        >
          <Heading
            as="h1"
            fontSize={{ base: "6xl", md: "9xl" }}
            color="blue.400"
            textAlign="center"
            textShadow="0 0 20px rgba(59,130,246,0.6)"
            animation="pulse 4s ease-in-out infinite"
          >
            {"< / >"}
          </Heading>
        </Flex>
      </Flex>

      {/* Animacje tła */}
      <style>
        {`
          @keyframes moveBackground {
            from { background-position: 0 0; }
            to { background-position: 100% 100%; }
          }

          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
        `}
      </style>
    </Box>
  );
};

export default AboutSection;
