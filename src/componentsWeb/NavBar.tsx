import { Logo } from "@/assets/InstaCodeLogo";
import { Box, HStack, Spacer } from "@chakra-ui/react";
import { NavLink } from "./NavLink";

const NavigationBar = () => {
  return (
    <Box
      position="relative"
      color="white"
      overflow="hidden"
      backgroundColor="white"
      minH="100px"
      borderRadius={"15px 15px 0 0"}
      boxShadow="0 2px 4px rgba(0,0,0,0.05)"
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
            marginLeft={{ base: "none", md: 10, lg: 10 }}
            width={{ base: 50, md: 100, lg: 100 }}
            height={{ base: 50, md: 100, lg: 100 }}
            color="black"
          />
          <Spacer />
          <NavLink gap={10} to="/" textWrap={"nowrap"}>
            Strona Główna
          </NavLink>
          <NavLink mx={50} to="/about" textWrap={"nowrap"}>
            O nas
          </NavLink>
          <NavLink marginRight={10} to="/kontakt">
            Kontakt
          </NavLink>
        </HStack>
      </Box>
    </Box>
  );
};

export default NavigationBar;
