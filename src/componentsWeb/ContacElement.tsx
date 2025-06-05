import { Grid, HStack, VStack, Text } from "@chakra-ui/react";
import ProjectCard from "./Projects/ProjectCard";
import { Box, Contact, InfoIcon } from "lucide-react";

const ContacElement = () => {
  return (
    <>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
          xl: "repeat(2, 1fr)",
        }}
        gap={6}
        p={5}
        maxW={{ base: "auto", md: "1200px", lg: "1200px" }}
        mx="auto"
        bg={"white"}
      >
        <ProjectCard icon={Contact} key={"karta kontakt"}>
          <VStack align="start" gap={3} color="gray.700">
            <HStack gap={2}>
              <InfoIcon size={20} color="black" />
              <Text fontWeight="semibold" fontSize="md">
                Właściciel marki InstaCode
              </Text>
            </HStack>

            <Box>
              <Text fontSize="lg" fontWeight="bold" color="black">
                Elemel Sp. z o.o.
              </Text>

              <Text fontSize="sm" color="gray.600">
                KRS:{" "}
                <Text as="span" fontWeight="semibold" color="black">
                  0001147774
                </Text>
              </Text>

              <Text fontSize="sm" color="gray.600">
                NIP:{" "}
                <Text as="span" fontWeight="semibold" color="black">
                  8961647310
                </Text>
              </Text>
            </Box>
          </VStack>
        </ProjectCard>
      </Grid>
      {/* <Box
        p={8}
        bg={"white"}
        display="flex"
        alignItems="center"
        justifyContent="center"
        maxW={{ base: "auto", md: "auto", lg: "1200px" }}
        mx="auto"
      >
        <Box
          bg="whiteAlpha.800"
          backdropFilter="blur(10px)"
          p={8}
          borderRadius="lg"
          maxW="600px"
          textAlign="center"
          boxShadow="lg"
        >
          <Heading size="lg" mb={4} color="blue.500">
            Właścicielem marki InstaCode jest Elemel Sp. z o.o. KRS 0001147774
            NIP 8961647310
          </Heading>
          <VStack gap={4}>
            <Text fontSize="lg" color="gray.700">
              Masz pytania? Chcesz z nami współpracować?
            </Text>
            <Text fontSize="lg" color="gray.700">
              Napisz na maila:{" "}
              <Box as="span" fontWeight="bold" color="blue.500">
                biuro@elemel.pl
              </Box>
            </Text>
            <Text fontSize="lg" color="gray.700">
              Lub zadzwoń:{" "}
              <Box as="span" fontWeight="bold" color="blue.500">
                tel: +48 509 96 767 23
              </Box>
            </Text>
            <Text fontSize="lg" color="gray.700" fontStyle="italic">
              InstaCode - Innowacja zakodowana w każdej linii.
            </Text>
          </VStack>
        </Box>
      </Box> */}
    </>
  );
};

export default ContacElement;
