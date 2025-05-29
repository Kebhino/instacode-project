import { Logo } from "@/assets/InstaCodeLogo";
import { Box, HStack, Spacer } from "@chakra-ui/react";
import { NavLink } from "./NavLink";
import { House } from "lucide-react";

const NavigationBar = () => {
  return (
    <Box
      backgroundColor="white"
      borderRadius={"25px 25px 0 0"}
      boxShadow="0 2px 4px rgba(0,0,0,0.05)"
      color="white"
      minH="100px"
      overflow="hidden"
      position="relative"
    >
      <Box py={1} textAlign="center">
        <HStack
          align="center"
          fontSize={{ base: "sm", md: "md", lg: "lg" }}
          justify="space-between"
          maxW={{ base: "420px", md: "1200px", lg: "1200px" }}
        >
          <Logo
            color="black"
            height={{ base: 20, md: 100, lg: 100 }}
            marginLeft={{ base: "none", md: 10, lg: 10 }}
            minW={{ base: 50, md: 20 }}
            width={{ base: 20, md: 100, lg: 100 }}
          />
          <Spacer />
          <NavLink
            color={"#00163E"}
            marginRight={{ base: 2, md: 10, lg: 10 }}
            mx={"auto"}
            p={1}
            textWrap={"nowrap"}
            to="/"
          >
            <House />
          </NavLink>
          <NavLink
            color={"#00163E"}
            marginRight={{ base: 2, md: 10, lg: 10 }}
            mx={"auto"}
            p={1}
            textWrap={"nowrap"}
            to="/about"
          >
            O nas
          </NavLink>
          <NavLink
            color={"#00163E"}
            marginRight={{ base: 2, md: 10, lg: 10 }}
            mx={"auto"}
            p={1}
            to="/kontakt"
          >
            Kontakt
          </NavLink>
        </HStack>
      </Box>
    </Box>
  );
};

export default NavigationBar;
