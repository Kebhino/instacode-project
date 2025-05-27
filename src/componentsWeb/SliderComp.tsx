import { Box, HStack, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import logos from "@/data/loga/loga";

const ClientSlider = () => {
  const MotionBox = motion(Box);
  return (
    <Box
      overflow="hidden"
      w="100%"
      bg={"white"}
      py={4}
      backgroundColor="#ffffff"
      backgroundImage={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%2386ddfb' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`}
      backgroundRepeat="repeat"
    >
      <MotionBox
        display="flex"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
      >
        <HStack gap={10}>
          {[...logos, ...logos, ...logos, ...logos, ...logos, ...logos].map(
            (logo, i) => (
              <Image
                key={i}
                src={logo.logo}
                boxSize="120px"
                objectFit="contain"
              />
            )
          )}
        </HStack>
      </MotionBox>
    </Box>
  );
};

export default ClientSlider;
