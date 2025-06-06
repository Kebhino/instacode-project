import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import SectorsTexT from "./SectorsTextComp";

const Oferta = () => {
  return (
    <Box
      bg="white"
      py={{ base: 2, md: 4 }}
      textAlign="center"
      className="oferta-group"
      transition="all 0.3s ease"
      maxW="1200px"
      mx={"auto"}
    >
      <SectorsTexT sectorname={"Oferta"} />

      <SimpleGrid
        alignItems="start"
        columns={{ base: 1, md: 3 }}
        gap={8}
        mt={10}
        px={{ base: 4, md: 20 }}
        className="oferta-text"
        borderRadius={10}
        boxShadow="20px 20px 100px rgba(106, 173, 255, 0.1)"
      >
        <Box>
          <Text
            className="oferta-text"
            color="#00163E"
            fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
            fontWeight="bold"
            textAlign="center"
          >
            Systemy produkcyjne
          </Text>
          <Text
            fontSize={{ base: "sm", md: "md", lg: "sm" }}
            color="gray.600"
            className="oferta-text"
            textAlign={"center"}
            lineHeight="1.8"
            maxW="400px"
            mt={2}
          >
            Projektujemy i wdrażamy systemy wspierające procesy produkcyjne – od
            monitoringu maszyn po zarządzanie zleceniami i kontrolę jakości.
            Nasze rozwiązania zwiększają efektywność, automatyzują raportowanie
            i pomagają w podejmowaniu lepszych decyzji operacyjnych.
          </Text>
        </Box>

        <Box textAlign="center">
          <Text
            className="oferta-text"
            color="#00163E"
            fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
            fontWeight="bold"
            textAlign="center"
          >
            Aplikacje Webowe
          </Text>
          <Text
            fontSize={{ base: "sm", md: "md", lg: "sm" }}
            color="gray.600"
            className="oferta-text"
            textAlign={"center"}
            lineHeight="1.8"
            maxW="400px"
            mt={2}
          >
            Tworzymy nowoczesne aplikacje webowe dopasowane do potrzeb klienta.
            Od prostych paneli po zaawansowane systemy – działające na każdym
            urządzeniu, bezpieczne i wydajne. Pomagamy rozwijać Twój biznes
            online z wykorzystaniem nowoczesnych technologii.
          </Text>
        </Box>

        <Box textAlign="center">
          <Text
            className="oferta-text"
            color="#00163E"
            fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
            fontWeight="bold"
            textAlign="center"
          >
            Integracje i automatyzacje
          </Text>
          <Text
            fontSize={{ base: "sm", md: "md", lg: "sm" }}
            color="gray.600"
            className="oferta-text"
            textAlign={"center"}
            lineHeight="1.8"
            maxW="400px"
            mt={2}
          >
            Łączymy systemy i automatyzujemy procesy, byś mógł działać szybciej
            i efektywniej. Integrujemy z API, ERP, CRM, sklepami online i innymi
            narzędziami, eliminując ręczne czynności i błędy. Twoja firma
            pracuje płynniej i oszczędza czas.
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Oferta;
