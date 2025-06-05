import Footer from "@/componentsWeb/FooterComp";
import MainSection from "@/componentsWeb/MainSection";
import NavigationBar from "@/componentsWeb/NavBar";
import GridCard from "@/componentsWeb/Projects/GridCard";

import { Grid, GridItem } from "@chakra-ui/react";

const RealizacjeGrid = () => {
  return (
    <>
      <Grid
        templateRows="auto 1fr auto auto"
        templateColumns={"1fr"}
        minH="100vh"
        maxW={"1200px"}
        mx={"auto"}
        justifyContent={"center"}
      >
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
      </Grid>
    </>
  );
};

export default RealizacjeGrid;
