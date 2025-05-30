import { Box, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionText = motion(Text);
const MotionBox = motion(Box);

const Oferta = () => {
  return (
    <Box bg="white" py={{ base: 8, md: 12 }} textAlign="center">
      <VStack gap={4}>
        <MotionText
          fontSize={{ base: "20px", md: "30px", lg: "40px" }}
          fontWeight="bold"
          color="#00163E"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Oferta
        </MotionText>

        <MotionBox
          width="80px"
          height="4px"
          bg="#0099FF"
          borderRadius="full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transformOrigin="left"
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </VStack>

      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        gap={8}
        mt={10}
        px={{ base: 4, md: 20 }}
      >
        <Box textAlign="center">
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight="bold"
            color="#00163E"
            mb={2}
          >
            Systemy produkcyjne
          </Text>
          <Text fontSize={{ base: "sm", md: "md" }} color="gray.600">
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
