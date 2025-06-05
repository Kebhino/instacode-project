import Footer from "@/componentsWeb/FooterComp";
import MainSection from "@/componentsWeb/MainSection";
import NavigationBar from "@/componentsWeb/NavBar";
import GridCard from "@/componentsWeb/Projects/GridCard";

import { GridItem } from "@chakra-ui/react";

const RealizacjeGrid = () => {
  return (
    <>
      <GridItem>
        <NavigationBar />
      </GridItem>
      <GridItem>
        <MainSection />
      </GridItem>

      <GridItem>
        <GridCard />
      </GridItem>
      <GridItem>
        <Footer />
      </GridItem>
    </>
  );
};

export default RealizacjeGrid;
