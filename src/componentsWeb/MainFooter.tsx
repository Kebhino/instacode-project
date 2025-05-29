import { HStack, SimpleGrid, Text, Image } from "@chakra-ui/react";
import logoReact from "@/assets/techonologieLoga/react.webp";
import logoPython from "@/assets/techonologieLoga/python-logo.webp";
import logoNode from "@/assets/techonologieLoga/nodejs.webp";
import logoAws from "@/assets/techonologieLoga/amazon-logo.webp";
import logoDoTNet from "@/assets/techonologieLoga/dotnet-logo.webp";

const MainFooter = () => {
  return (
    <SimpleGrid
      columns={1}
      gap={3}
      bg="#F6FCFE"
      padding={{ base: 4, md: 10 }}
      textAlign="left"
      maxW="1200px"
      mx="auto"
    >
      <HStack>
        <Text fontSize={30} fontWeight={"bold"} textAlign="left">
          Technologie
        </Text>
      </HStack>
      <HStack
        justifyContent={{ base: "space-between", md: "space-between" }}
        flexWrap="wrap"
        gap={{ base: 2, md: 4 }}
      >
        <Image
          height={{ base: "50px", md: "60px", lg: "80px" }}
          src={logoReact}
        />
        <Image
          height={{ base: "50px", md: "80px", lg: "100px" }}
          src={logoDoTNet}
        />
        <Image
          height={{ base: "17px", md: "50px", lg: "60px" }}
          src={logoNode}
        />
        <Image
          height={{ base: "25px", md: "60px", lg: "80px" }}
          src={logoPython}
        />
        <Image
          height={{ base: "20px", md: "60px", lg: "80px" }}
          src={logoAws}
        />
      </HStack>
    </SimpleGrid>
  );
};

export default MainFooter;
