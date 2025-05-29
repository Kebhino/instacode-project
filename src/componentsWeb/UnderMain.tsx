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
      bgColor={"white"}
      bg={"#F6FCFE"}
      padding={{ base: 4, md: 10 }}
      justifyItems="center"
      alignItems="center"
      textAlign="center"
      maxW="1200px"
      mx="auto"
    >
      <Box>
        <VStack>
          <Box justifyItems={"center"}>
            <Box fontSize={{ base: "20px", md: "40px", lg: "40px" }}>
              <Handshake size={iconSize} color="#00163E" />
            </Box>
            <Text
              marginTop={3}
              fontSize={{ base: "10px", md: "15px", lg: "20px" }}
              textAlign={"center"}
            >
              {" "}
              <b>Pełne dopasowanie</b>
            </Text>
            <Text fontSize={10} marginTop={2} textAlign={"center"}>
              Tworzymy oprogoramowanie <br /> stworzone pod twoje procesy
            </Text>
          </Box>
        </VStack>
      </Box>
      <Box>
        <VStack>
          <Box justifyItems={"center"}>
            <Box fontSize={{ base: "20px", md: "40px", lg: "40px" }}>
              <ChartNoAxesCombined size={iconSize} color="#00163E" />
            </Box>
            <Text
              marginTop={3}
              fontSize={{ base: "10px", md: "15px", lg: "20px" }}
              textAlign={"center"}
            >
              {" "}
              <b>Skalowalność</b>
            </Text>
            <Text fontSize={10} marginTop={2} textAlign={"center"}>
              Nasze systemy <br /> rosną razem z twoim biznesem
            </Text>
          </Box>
        </VStack>
      </Box>
      <Box>
        <VStack>
          <Box justifyItems={"center"}>
            <Box fontSize={{ base: "20px", md: "40px", lg: "40px" }}>
              <ShieldCheck size={iconSize} color="#00163E" />
            </Box>
            <Text
              marginTop={3}
              fontSize={{ base: "10px", md: "15px", lg: "20px" }}
            >
              {" "}
              <b>Bezpieczeństo</b>
            </Text>
            <Text fontSize={10} marginTop={2} textAlign={"center"}>
              Wysoka ochrona kodu <br /> i ochona kodu
            </Text>
          </Box>
        </VStack>
      </Box>
    </SimpleGrid>
  );
};

export default UnderMain;
