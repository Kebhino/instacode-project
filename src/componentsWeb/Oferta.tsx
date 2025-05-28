import { Box, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react";

const Oferta = () => {
  return (
    <>
      <Box bg={"white"} fontSize={{ base: "20px", md: "40px", lg: "40px" }}>
        <HStack>
          <Text marginLeft={5} marginTop={5} color={"#00163E"}>
            <b>Oferta</b>
          </Text>
        </HStack>
      </Box>
      <SimpleGrid
        columns={3}
        gap={3}
        bgColor={"white"}
        padding={{ base: 4, md: 10 }}
      >
        <Box>
          <VStack>
            <Box justifyItems={"center"}>
              <Text
                color={"#00163E"}
                marginTop={3}
                fontSize={{ base: "10px", md: "15px", lg: "20px" }}
                textAlign={"center"}
              >
                <b>Systemy produkcyjne</b>
              </Text>
              <Text
                color={"#00163E"}
                fontSize={10}
                marginTop={2}
                textAlign={"center"}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
                repellendus.
              </Text>
            </Box>
          </VStack>
        </Box>
        <Box>
          <VStack>
            <Box justifyItems={"center"}>
              <Text
                color={"#00163E"}
                fontSize={{ base: "10px", md: "15px", lg: "20px" }}
                marginTop={3}
                textAlign={"center"}
              >
                <b>Aplikacje Webowe</b>
              </Text>
              <Text
                color={"#00163E"}
                fontSize={10}
                marginTop={2}
                textAlign={"center"}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat, atque.
              </Text>
            </Box>
          </VStack>
        </Box>
        <Box>
          <VStack>
            <Box justifyItems={"center"}>
              <Text
                color={"#00163E"}
                marginTop={3}
                fontSize={{ base: "10px", md: "15px", lg: "20px" }}
                textAlign={"center"}
              >
                <b>Integracje i automatyzacje</b>
              </Text>
              <Text
                color={"#00163E"}
                fontSize={10}
                marginTop={2}
                textAlign={"center"}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni,
                ducimus?
              </Text>
            </Box>
          </VStack>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default Oferta;
