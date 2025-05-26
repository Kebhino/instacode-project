import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionText = motion(Text);

const TextHeader = () => {
  return (
    <MotionText
      fontSize="4xl"
      fontWeight="bold"
      color="black"
      mt={4}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      Technologia, która wspiera Twój biznes.
    </MotionText>
  );
};

export default TextHeader;
