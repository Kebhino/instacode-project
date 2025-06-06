import { Grid } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import projectList from "@/data/loga/projects";

const GridCard = () => {
  return (
    <>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
          xl: "repeat(2, 1fr)",
        }}
        gap={6}
        p={5}
        maxW="1200px"
        w="100%"
        mx="auto"
        bg={"white"}
      >
        {projectList.map((project, index) => (
          <ProjectCard urlImage={project.urlImage} key={index} id={project.id}>
            {project.description}
          </ProjectCard>
        ))}
      </Grid>
    </>
  );
};

export default GridCard;
