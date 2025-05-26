import { Logo } from "@/assets/InstaCodeLogo";
import { Box, HStack, Text, chakra } from "@chakra-ui/react";
import { NavLink } from "./NavLink";

const Svg = chakra("svg");

const NavigationBar = () => {
  return (
    <Box position="relative" bg="white" color="white" overflow="hidden">
      <Box px={8} py={1} textAlign="center">
        <HStack>
          <Logo boxSize={200} color="black" />
          <NavLink to="/">Strona Główna</NavLink>
          <NavLink to="/">O nas</NavLink>
          <NavLink to="/">Konakt</NavLink>
          <NavLink to="/">Coś</NavLink>
        </HStack>
        <Text fontSize="4xl" fontWeight="bold">
          Learn to Code
        </Text>
        <Text fontSize="xl" mt={4}>
          With the world’s largest web developer site.
        </Text>
      </Box>

      <Svg
        width="100%"
        height="300px"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#d6f5e3"
          d="M0,224L80,213.3C160,203,320,181,480,165.3C640,149,800,139,960,133.3C1120,128,1280,128,1360,128L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        />
      </Svg>
    </Box>
  );
};

export default NavigationBar;
