import Footer from "@/componentsWeb/Footer";
import Hero from "@/componentsWeb/Hero";
import NavigationBar from "@/componentsWeb/NavBar";
import RealizacjeMain from "@/componentsWeb/RealizacjeMain";

import { GridItem } from "@chakra-ui/react";

const RealizacjeGrid = () => {
  return (
    <>
      <GridItem>
        <NavigationBar />
      </GridItem>
      <GridItem>
        <Hero />
      </GridItem>

      <GridItem>
        <RealizacjeMain />
      </GridItem>
      <GridItem>
        <Footer />
      </GridItem>
    </>
  );
};

export default RealizacjeGrid;
