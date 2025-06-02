import { Grid } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

import projectList from "@/data/loga/projects";

// interface ProjectCardProps {
//   title: string;
//   description: string;
//   urlImage: string;
//   git?: string;
//   urlSite: string;
//   id?: string;
// }

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
        maxW={{ base: "420px", md: "1200px", lg: "1200px" }}
        mx="auto"
        bg={"white"}
      >
        {projectList.map((project, index) => (
          <ProjectCard
            title={project.title}
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
