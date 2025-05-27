// src/pages/Contact.tsx
import { Logo } from "@/assets/InstaCodeLogo";
import TextHeader from "@/componentsWeb/TextHeader";
import { Box, Heading, HStack, Spacer, Text, VStack } from "@chakra-ui/react";
import { NavLink } from "@/componentsWeb/NavLink";
import Footer from "@/componentsWeb/FooterComp";

const Contact = () => {
  return (
    <>
      <Box
        position="relative"
        color="white"
        overflow="hidden"
        backgroundColor="#ffffff"
        backgroundImage={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%2386ddfb' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`}
        backgroundRepeat="repeat"
        minH="200px"
      >
        <Box py={1} textAlign="center">
          <HStack
            align="center"
            w="full"
            mx="auto"
            justify="space-between"
            fontSize={{ base: "sm", md: "md", lg: "lg" }}
            maxW={{ base: "100%", md: "1200px", lg: "1200px" }}
          >
            <Logo
              minW={20}
              boxSize={{ base: 20, md: 150, lg: 200 }}
              color="black"
            />
            <Spacer />
            <NavLink gap={10} to="/" textWrap={"nowrap"}>
              Strona Główna
            </NavLink>
            <NavLink mx={50} to="/oNas" textWrap={"nowrap"}>
              O nas
            </NavLink>
            <NavLink marginRight={10} to="/kontakt">
              Kontakt
            </NavLink>
          </HStack>
          <TextHeader />
          <Text fontSize="xl" mt={4} color={"gray.600"} mb={4}>
            Innowacja zakodowana w każdej linii.
          </Text>
        </Box>
      </Box>

      <Box
        p={8}
        backgroundColor="#ffffff"
        backgroundImage={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%2386ddfb' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`}
        backgroundRepeat="repeat"
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginBottom={8}
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
