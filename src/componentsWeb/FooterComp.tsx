import { Text, Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="#00163E"
      color="blackAlpha.950"
      py={4}
      textAlign="center"
    >
      <Text fontSize="sm" color={"white"}>
        &copy; {new Date().getFullYear()} InstaCode. Wszystkie prawa
        zastrzeżone.
      </Text>
    </Box>
  );
};

export default Footer;
