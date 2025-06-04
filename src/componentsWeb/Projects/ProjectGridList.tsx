import { Grid } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import projectList from "@/data/loga/projects";


const ProjectGridList = () => {
  return (
    <>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap={6}
        p={5}
        maxW={{ base: "auto", md: "1200px", lg: "1200px" }}
        mx="auto"
        bg={"white"}
      >
        {projectList.map((project, index) => (
          <ProjectCard
            
            description={project.description}
            urlImage={project.urlImage}
            key={index}
            id={project.id}
          />
        ))}
      </Grid>
    </>
  );
};

export default ProjectGridList;
