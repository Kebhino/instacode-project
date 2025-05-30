// src/pages/Contact.tsx
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import Footer from "@/componentsWeb/FooterComp";
import NavBar from "@/componentsWeb/NavBar";
import MainSection from "@/componentsWeb/MainSection";

const Contact = () => {
  return (
    <>
      <NavBar />
      <MainSection />

      <Box
        p={8}
        bg={"white"}
        display="flex"
        alignItems="center"
        justifyContent="center"
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
      </Box>
      <Footer />
    </>
  );
};

export default Contact;
