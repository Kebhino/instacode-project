import { Logo } from "@/assets/InstaCodeLogo";
import { Box, HStack, Spacer, Text } from "@chakra-ui/react";
import { NavLink } from "./NavLink";
import TextHeader from "./TextHeader";
import SvgTop from "./SvgTop";

const NavigationBar = () => {
  return (
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
          <NavLink marginRight={10} to="/kontakt">
            Kontakt
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
