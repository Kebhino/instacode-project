import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionText = motion(Text);

const TextHeader = () => {
  return (
    <MotionText
      fontSize="4xl"
      fontWeight="bold"
      color="white"
      mt={4}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      Dedykowane systemy IT dla Twojej firmy
      <Text fontSize="xl" mt={4} color={"white.600"} mb={4}>
        Autmatyzuj. Optymalizuj. Zarządzaj.{" "}
      </Text>
    </MotionText>
  );
};

export default TextHeader;
