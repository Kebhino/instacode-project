import { Logo } from "@/assets/InstaCodeLogo";
import { Box, HStack, Spacer } from "@chakra-ui/react";
import { NavLink } from "./NavLink";
import { House, Mail, Scroll } from "lucide-react";

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
          maxW={{ base: "420px", md: "1200px", lg: "1200px" }}
        >
          <Logo
            minW={{ base: 50, md: 20 }}
            width={{ base: 20, md: 100, lg: 100 }}
            height={{ base: 20, md: 100, lg: 100 }}
            marginLeft={{ base: "none", md: 10, lg: 10 }}
            color="black"
          />
          <Spacer />
          <NavLink
            mx={"auto"}
            to="/"
            textWrap={"nowrap"}
            border={"sm"}
            p={1}
            marginRight={{ base: 2, md: 10, lg: 10 }}
            borderRadius={"lg"}
            borderColor={"#00163E"}
            color={"#00163E"}
          >
            <House />
          </NavLink>
          <NavLink
            mx={"auto"}
            marginRight={{ base: 2, md: 10, lg: 10 }}
            to="/about"
            textWrap={"nowrap"}
            border={"sm"}
            p={1}
            borderRadius={"lg"}
            borderColor={"#00163E"}
          >
            <Scroll /> O nas
          </NavLink>
          <NavLink
            mx={"auto"}
            marginRight={{ base: 2, md: 10, lg: 10 }}
            to="/kontakt"
            border={"sm"}
            p={1}
            borderRadius={"lg"}
            borderColor={"#00163E"}
          >
            <Mail /> Kontakt
          </NavLink>
        </HStack>
      </Box>
    </Box>
  );
};

export default NavigationBar;
