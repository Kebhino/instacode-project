import Footer from "@/componentsWeb/FooterComp";
import MainSection from "@/componentsWeb/MainSection";
import NavigationBar from "@/componentsWeb/NavBar";
import ProjectGridList from "@/componentsWeb/Projects/ProjectGridList";

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
          <GridItem color={"black"}>
            <MainSection />
       <ProjectGridList/>
          </GridItem>
    
          <GridItem bg={"white"}>
      
          </GridItem>
          <GridItem bg="#00163E">
            <Footer />
          
          </GridItem>
        </Grid>
     
    </>
  );
};

export default RealizacjeGrid;
