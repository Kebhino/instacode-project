import LogoAS from "@/assets/logo-nowe-black.webp";
import { Box, HStack, Image, Text } from "@chakra-ui/react";
import { NavLink } from "./NavLink";
import { useLocation } from "react-router-dom";

const NavigationBar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <Box
      backgroundColor="white"
      borderRadius={"25px 25px 0 0"}
      boxShadow="0 2px 4px rgba(0,0,0,0.05)"
      overflow="hidden"
      position="relative"
      px={6}
      maxW={{ base: "auto", md: "auto", lg: "1200px" }}
      mx="auto"
    >
      <HStack
        align="center"
        justify="space-between"
        py={2}
        px={{ base: 0, md: 4, lg: 4 }}
      >
        <NavLink to="/">
          <Image
            src={LogoAS}
            height={{ base: "20px", md: "25px", lg: "35px" }}
            ml={{ base: 0, md: 2, lg: 2 }}
            alt="InstaCode Logo"
            cursor="pointer"
          />
        </NavLink>

        <HStack
          gap={4}
          fontSize={{ base: "12px", md: "16px", lg: "18px" }}
          wrap={"wrap"}
        >
          <NavLink to="/realizacje">
            <Text
              position="relative"
              fontWeight={"400"}
              color="#00163E"
              _after={{
                content: '""',
                position: "absolute",
                bottom: "-2px",
                left: 0,
                width: "100%",
                height: "2px",
                background: isActive("/realizacje")
                  ? "linear-gradient(90deg, #6EBEFF, #3A8DFF)"
                  : "#cce7ff",
                opacity: isActive("/about") ? 1 : 0.4,
                transition: "all 0.3s ease",
              }}
              _hover={{
                _after: {
                  opacity: 1,
                },
              }}
            >
              Realizacje
            </Text>
          </NavLink>
          <NavLink to="/about">
            <Text
              position="relative"
              fontWeight={"400"}
              color="#00163E"
              _after={{
                content: '""',
                position: "absolute",
                bottom: "-2px",
                left: 0,
                width: "100%",
                height: "2px",
                background: isActive("/about")
                  ? "linear-gradient(90deg, #6EBEFF, #3A8DFF)"
                  : "#cce7ff",
                opacity: isActive("/about") ? 1 : 0.4,
                transition: "all 0.3s ease",
              }}
              _hover={{
                _after: {
                  opacity: 1,
                },
              }}
            >
              O nas
            </Text>
          </NavLink>

          <NavLink to="/kontakt">
            <Text
              position="relative"
              fontWeight={"400"}
              color="#00163E"
              _after={{
                content: '""',
                position: "absolute",
                bottom: "-2px",
                left: 0,
                width: "100%",
                height: "2px",
                background: isActive("/kontakt")
                  ? "linear-gradient(90deg, #6EBEFF, #3A8DFF)"
                  : "#cce7ff",
                opacity: isActive("/kontakt") ? 1 : 0.4,
                transition: "all 0.3s ease",
              }}
              _hover={{
                _after: {
                  opacity: 1,
                },
              }}
            >
              Kontakt
            </Text>
          </NavLink>
        </HStack>
      </HStack>
    </Box>
  );
};

export default NavigationBar;
