import ContacElement from "@/componentsWeb/ContacElement";
import Footer from "@/componentsWeb/FooterComp";
import MainSection from "@/componentsWeb/MainSection";
import NavigationBar from "@/componentsWeb/NavBar";
import { Grid, GridItem } from "@chakra-ui/react";

const Contact = () => {
  return (
    <>
      <Grid
        templateRows="auto auto 1fr auto"
        templateColumns={"1fr"}
        minH="auto"
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
          <ContacElement />
        </GridItem>
        <GridItem>
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
};

export default Contact;
