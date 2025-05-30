import { HStack, SimpleGrid, Text, Image } from "@chakra-ui/react";
import logoReact from "@/assets/techonologieLoga/react.webp";
import logoPython from "@/assets/techonologieLoga/python-logo.webp";
import logoNode from "@/assets/techonologieLoga/nodejs.webp";
import logoAws from "@/assets/techonologieLoga/amazon-logo.webp";
import logoPhp from "@/assets/logaSlider/php-logo-blue.webp";

const MainFooter = () => {
  return (
    <SimpleGrid
      columns={1}
      gap={3}
      bg="white"
      padding={{ base: 4, md: 10 }}
      textAlign="left"
      maxW="1200px"
      mx="auto"
    >
      <HStack>
        <Text
          color={"#00163E"}
          fontSize={{ base: "20px", md: "30px", lg: "40px" }}
          fontWeight={"bold"}
          textAlign="left"
        >
          Technologie
        </Text>
      </HStack>
      <HStack
        justifyContent={{ base: "space-between", md: "space-between" }}
        flexWrap="wrap"
        gap={{ base: 2, md: 4 }}
        marginRight={{ base: 2, md: 10, lg: 10 }}
      >
        <Image
          height={{ base: "50px", md: "110px", lg: "150px" }}
          src={logoReact}
        />
        <Image
          height={{ base: "20px", md: "30px", lg: "50px" }}
          src={logoPhp}
        />
        <Image
          height={{ base: "17px", md: "30px", lg: "40px" }}
          src={logoNode}
        />
        <Image
          height={{ base: "25px", md: "45px", lg: "60px" }}
          src={logoPython}
        />
        <Image
          height={{ base: "20px", md: "30px", lg: "50px" }}
          src={logoAws}
        />
      </HStack>
    </SimpleGrid>
  );
};

export default MainFooter;
