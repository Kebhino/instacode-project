import {
  Box,
  Card,
  GridItem,
  HStack,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";

interface ProjectCardProps {
  title: string;
  description: string;
  urlImage: string;
  url?: string;
  git?: string;
  id?: string;
}

const ProjectCard = ({ title, description, urlImage }: ProjectCardProps) => {
  return (
    <GridItem marginBottom={5}>
      <Box
        transition="all 0.3s ease"
        borderRadius="3xl"
        _hover={{
          transform: "scale(1.01)",
          transition: "all 0.1s ease",
        }}
      >
        <Card.Root
          borderRadius="2xl"
          boxShadow="0 8px 20px rgba(0, 0, 0, 0.1)"
          size="lg"
          zIndex="tooltip"
          backgroundColor="#F4F6FA"
          border="1px solid rgba(144, 205, 244, 0.3)"
          h="400px"
          transition="all 0.3s ease" // płynna zmiana
          _hover={{
            backgroundColor: "#E0F4FF", // tło karty po hooverze
            transform: "scale(1.01)", // delikatne uniesienie
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)", // mocniejszy cień na hover
          }}
        >
          <Card.Header>
            <Image
              maxW="200px"
              maxH="60px"
              mx="auto"
              src={urlImage}
              alt={title}
              padding={3}
            />
          </Card.Header>
          <Card.Body>
            <HStack
              justifyContent={"space-between"}
              marginBottom={2}
              alignItems={"center"}
            >
              <Text
                marginY={2}
                fontSize="lg"
                fontWeight="bold"
                textAlign={"center"}
                marginBottom={2}
                color={"black"}
              >
                {/* {title} */} JAKIŚ TYTUŁ PROJEKTU?
              </Text>
              <Spacer />
            </HStack>

            <Text fontSize="sm" color="gray.500">
              {description}
            </Text>
          </Card.Body>
          <Card.Footer
            justifyContent={"space-between"}
            position="relative"
            overflow="visible"
          >
            <Spacer />
          </Card.Footer>
        </Card.Root>
      </Box>
    </GridItem>
  );
};

export default ProjectCard;
