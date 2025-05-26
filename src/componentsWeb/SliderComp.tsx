import { Box, HStack, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import logos from "@/data/loga/loga";

const ClientSlider = () => {
  const MotionBox = motion(Box);
  return (
    <Box overflow="hidden" w="100%" bg={"white"} py={4}>
      <MotionBox
        display="flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        <HStack gap={10}>
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <Image
              key={i}
              src={logo.logo}
              boxSize="120px"
              objectFit="contain"
            />
          ))}
        </HStack>
      </MotionBox>
    </Box>
  );
};

export default ClientSlider;
