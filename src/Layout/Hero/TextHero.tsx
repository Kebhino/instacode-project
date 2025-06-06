import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionText = motion(Text);

const TextHero = () => {
  return (
    <MotionText
      fontSize={{ base: "25px", md: "35px", lg: "40px" }}
      fontWeight="bold"
      color="white"
      mt={10}
      ml={10}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whiteSpace="pre-line"
    >
      Dedykowane systemy IT{"\n"} dla Twojej firmy
      <Text fontSize="xl" mt={4} color={"white"} mb={4}>
        Autmatyzuj. Optymalizuj. Zarządzaj.{" "}
      </Text>
    </MotionText>
  );
};

export default TextHero;
