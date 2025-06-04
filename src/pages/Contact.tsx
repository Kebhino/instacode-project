import Footer from "@/componentsWeb/FooterComp";
import NavBar from "@/componentsWeb/NavBar";
import MainSection from "@/componentsWeb/MainSection";
import ContacElement from "@/componentsWeb/ContacElement";
import { Grid, GridItem } from "@chakra-ui/react";
import NavigationBar from "@/componentsWeb/NavBar";
import ProjectGridList from "@/componentsWeb/Projects/ProjectGridList";

const Contact = () => {
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
          <GridItem >
            <MainSection />
      
          </GridItem>
    
          <GridItem bg={"white"}>
            <ContacElement/>
          </GridItem>
          <GridItem bg="#00163E">
            <Footer />
          </GridItem>
        </Grid>
    </>
  );
};

export default Contact;
