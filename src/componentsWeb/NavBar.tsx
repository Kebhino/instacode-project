import { Logo } from "@/assets/InstaCodeLogo";
import { Box, HStack, Spacer, Text } from "@chakra-ui/react";
import { NavLink } from "./NavLink";
import TextHeader from "./TextHeader";
import SvgTop from "./SvgTop";

const NavigationBar = () => {
  return (
    <Box position="relative" bg="white" color="white" overflow="hidden">
      <Box py={1} textAlign="center">
        <HStack
          align="center"
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
          <NavLink mx={50} to="/" textWrap={"nowrap"}>
            O nas
          </NavLink>
          <NavLink marginRight={10} to="/">
            Konakt
          </NavLink>
        </HStack>
        <TextHeader />
        <Text fontSize="xl" mt={4} color={"gray.600"} mb={4}>
          Innowacja zakodowana w każdej linii.
        </Text>
      </Box>

      <SvgTop />
    </Box>
  );
};

export default NavigationBar;
