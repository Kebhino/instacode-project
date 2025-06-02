import FooterComp from "@/componentsWeb/FooterComp";
import MainSection from "@/componentsWeb/MainSection";
import NavBar from "@/componentsWeb/NavBar";

import ProjectGridList from "@/componentsWeb/Projects/ProjectGridList";

const RealizacjeGrid = () => {
  return (
    <>
      <NavBar />
      <MainSection />
      <ProjectGridList />
      <FooterComp />
    </>
  );
};

export default RealizacjeGrid;
