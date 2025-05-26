import { Box, Heading, Stack, Text } from "@chakra-ui/react";

const AboutSection = () => {
  return (
    <Box
      p={{ base: 4, md: 8 }}
      maxW="1200px"
      mx="auto"
      background="linear-gradient(180deg,rgba(255, 255, 255, 1) 0%, rgba(0, 153, 255, 0.27) 50%, rgba(255, 255, 255, 1) 100%);"
      borderRadius="2xl"
    >
      <Stack gap={6}>
        <Heading
          as="h2"
          fontSize={{ base: "2xl", md: "4xl" }}
          textAlign="center"
        >
          InstaCode – Twój partner w cyfrowej transformacji
        </Heading>

        <Text
          fontSize={{ base: "md", md: "lg" }}
          textAlign="center"
          color="gray.700"
        >
          Tworzymy dedykowane oprogramowanie dla firm, łącząc technologię z
          estetyką. Projektujemy i wdrażamy nowoczesne rozwiązania, które
          usprawniają procesy biznesowe, automatyzują pracę i wyróżniają marki w
          cyfrowym świecie.
        </Text>

        <Text fontSize={{ base: "sm", md: "md" }}>
          Nasze doświadczenie obejmuje:
        </Text>

        <Stack pl={6} gap={2}>
          <Text>🚀 Strony i aplikacje React / React Native</Text>
          <Text>⚙️ Integracje z API, obsługa danych, zarządzanie stanem</Text>
          <Text>🎨 Dynamiczne komponenty z Chakra UI</Text>
          <Text>
            🔍 Optymalizacja wydajności (lazy loading, WebP, responsywność)
          </Text>
          <Text>☁️ Hosting i zarządzanie na AWS, Vercel, Netlify</Text>
          <Text>🧭 UI/UX, projektowanie interfejsów, animacje</Text>
          <Text>🗂️ Git, GitHub, workflow zespołowy</Text>
        </Stack>

        <Text fontSize={{ base: "sm", md: "md" }}>
          Przykłady naszych projektów:
        </Text>

        <Stack pl={6} gap={2}>
          <Text>✅ GameHub – aplikacja do odkrywania gier</Text>
          <Text>✅ KebeProjects – portfolio umiejętności</Text>
          <Text>✅ Snake Game – dynamiczna gra w React</Text>
          <Text>✅ Certyfikaty – zarządzanie i prezentacja certyfikatów</Text>
          <Text>
            ✅ Tracker godzin pracy – aplikacja do monitorowania czasu
          </Text>
          <Text>
            ✅ Strona dla Moni ❤️ – personalizowana strona z animacjami i
            efektami dźwiękowymi
          </Text>
        </Stack>

        <Text
          fontSize={{ base: "md", md: "lg" }}
          fontWeight="bold"
          textAlign="center"
          mt={4}
        >
          Chcesz, by Twoja firma była nowoczesna, widoczna i działała sprawniej?
          Skontaktuj się z nami!
        </Text>
      </Stack>
    </Box>
  );
};

export default AboutSection;
