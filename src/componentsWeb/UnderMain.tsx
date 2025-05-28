import {
  Box,
  Center,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FiTarget } from "react-icons/fi";

const UnderMain = () => {
  return (
    <SimpleGrid
      columns={3}
      gap={3}
      bgColor={"white"}
      bg={"#F6FCFE"}
      padding={{ base: 4, md: 10 }}
    >
      <Box>
        <VStack>
          <Box justifyItems={"center"}>
            <Box fontSize={{ base: "20px", md: "40px", lg: "40px" }}>
              <FiTarget color="#00163E" />
            </Box>
            <Text marginTop={3} fontSize={17} textAlign={"center"}>
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
              <FiTarget color="#00163E" />
            </Box>
            <Text marginTop={3} fontSize={17} textAlign={"center"}>
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
              <FiTarget color="#00163E" />
            </Box>
            <Text marginTop={3} fontSize={17}>
              {" "}
              <b>Pełne dopasowanie</b>
            </Text>
            <Text fontSize={10} marginTop={2}>
              Tworzymy oprogoramowanie <br /> stworzone pod twoje procesy
            </Text>
          </Box>
        </VStack>
      </Box>
    </SimpleGrid>
  );
};

export default UnderMain;
