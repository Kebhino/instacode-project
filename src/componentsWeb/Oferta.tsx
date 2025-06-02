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
      maxW={{ base: "auto", md: "auto", lg: "1200px" }}
      mx={"auto"}
    >
      <SectorsTexT sectorname={"Oferta"} />

      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        gap={8}
        mt={10}
        px={{ base: 4, md: 20 }}
        className="oferta-text"
      >
        <Box textAlign="center">
          <Text
            className="oferta-text"
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight="bold"
            color="#00163E"
            mb={2}
          >
            Systemy produkcyjne
          </Text>
          <Text
            fontSize={{ base: "sm", md: "md" }}
            color="gray.600"
            className="oferta-text"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            repellendus.
          </Text>
        </Box>

        <Box textAlign="center">
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight="bold"
            color="#00163E"
            mb={2}
          >
            Aplikacje Webowe
          </Text>
          <Text fontSize={{ base: "sm", md: "md" }} color="gray.600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            atque.
          </Text>
        </Box>

        <Box textAlign="center">
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight="bold"
            color="#00163E"
            mb={2}
          >
            Integracje i automatyzacje
          </Text>
          <Text fontSize={{ base: "sm", md: "md" }} color="gray.600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni,
            ducimus?
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Oferta;
