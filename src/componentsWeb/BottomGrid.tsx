import { Box, SimpleGrid, Text, VStack, Image } from "@chakra-ui/react";
import logoCuprum from "@/assets/logaSlider/cuprum-logo-blue.webp";
import logoIG from "@/assets/logaSlider/instaglass-logo-blue.webp";
import logoZL from "@/assets/logaSlider/znanylekarz-blue.webp";

const BottomGrid = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 3, lg: 3 }}
      bg={"white"}
      gap={3}
      padding={{ base: 4, md: 10 }}
      textAlign="center"
      maxW="1200px"
      mx="auto"
      placeItems="center"
    >
      <Box bg="#F6FCFE" p={5} borderRadius={10}>
        <VStack gap={2} align="center" marginTop={1}>
          <Image src={logoIG} height={"40px"} />

          <Text marginLeft={2} fontSize={10} marginTop={3} textAlign={"left"}>
            Zinformatyzowaliśmy firmę ABART, obejmując naszym systemem każdy
            aspekt działalności firmy, od automatycznych wycen poczynając, po
            śledzenie, rozliczanie i raportowanie całego procesu instalacji
            systemów LPG.
          </Text>
        </VStack>
      </Box>

      <Box
        bg="#F6FCFE"
        p={3}
        borderRadius={10}
        height={{ base: "auto", md: "auto", lg: "170px" }}
      >
        <VStack gap={2} align="center" marginTop={5}>
          <Image src={logoZL} color="#00163E" height={"30px"} />

          <Text marginLeft={2} fontSize={10} marginTop={4} textAlign={"left"}>
            Największy nasz sukces to ZnanyLekarz.pl, który został w całości
            zaprojektowany i wykonany przez nas gdy pojawił się pomysł na taki
            serwis. Nasz projekt i wykonanie okazało się wielkim sukcesem,
            serwis stał się bardzo popularny, a po sprzedaży odniósł ogromy
            międzynarodowy sukces
          </Text>
        </VStack>
      </Box>

      <Box
        bg="#F6FCFE"
        p={5}
        borderRadius={10}
        height={{ base: "auto", md: "auto", lg: "170px" }}
      >
        <VStack gap={2} align="center" marginTop={3}>
          <Image src={logoCuprum} color="#00163E" height={"40px"} />

          <Text marginLeft={2} fontSize={10} marginTop={2} textAlign={"left"}>
            Dla KGHM CUPRUM przez lata przygotowywaliśmy dedykowane rozwiązania,
            które dbały o efektywną wymianę informacji w ramach tej firmy przy
            jednoczesnym zapewnieniu odpowiedniej poufności.
          </Text>
        </VStack>
      </Box>
    </SimpleGrid>
  );
};

export default BottomGrid;
