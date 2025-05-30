import {
  Box,
  SimpleGrid,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";

import { ShieldCheck, ChartNoAxesCombined, Handshake } from "lucide-react";

const UnderMain = () => {
  const iconSize = useBreakpointValue({ base: 20, md: 40, lg: 40 });

  return (
    <SimpleGrid
      columns={3}
      gap={3}
      bg="#F6FCFE"
      padding={{ base: 4, md: 10 }}
      textAlign="center"
      maxW="1200px"
      mx="auto"
      placeItems="center"
    >
      <Box h={"120px"}>
        <VStack gap={2} align="center">
          <Handshake size={iconSize} color="#00163E" />
          <Text fontSize={{ base: "10px", md: "15px", lg: "20px" }}>
            <b>Pełne dopasowanie</b>
          </Text>
          <Text fontSize={10}>
            Tworzymy oprogoramowanie <br /> stworzone pod twoje procesy
          </Text>
        </VStack>
      </Box>

      <Box h={"120px"}>
        <VStack gap={2} align="center">
          <ChartNoAxesCombined size={iconSize} color="#00163E" />
          <Text fontSize={{ base: "10px", md: "15px", lg: "20px" }}>
            <b>Skalowalność</b>
          </Text>
          <Text fontSize={10}>
            Nasze systemy <br /> rosną razem z twoim biznesem
          </Text>
        </VStack>
      </Box>

      <Box h={"120px"}>
        <VStack gap={2} align="center">
          <ShieldCheck size={iconSize} color="#00163E" />
          <Text fontSize={{ base: "10px", md: "15px", lg: "20px" }}>
            <b>Bezpieczeństwo</b>
          </Text>
          <Text fontSize={10}>
            Wysoka ochrona kodu <br /> i ochrona danych
          </Text>
        </VStack>
      </Box>
    </SimpleGrid>
  );
};

export default UnderMain;
