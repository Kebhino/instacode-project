// src/pages/Contact.tsx

import Footer from "@/componentsWeb/FooterComp";
import NavBar from "@/componentsWeb/NavBar";
import MainSection from "@/componentsWeb/MainSection";
import ONasElemenent from "@/componentsWeb/oNas";
import { Grid, GridItem } from "@chakra-ui/react";

const About = () => {
  return (
    <>
      <Grid
        templateRows="auto auto 1fr auto"
        templateColumns={"1fr"}
        minH="100vh"
        maxW={"1200px"}
        mx={"auto"}
        justifyContent={"center"}
      >
        <GridItem>
          <NavBar />
        </GridItem>
        <GridItem>
          <MainSection />
        </GridItem>
        {/* Opis na większej szerokośći niż tablet jest na tyle niski, że pokazuje 
        się pod spodem Grid. Żeby skalowania nie popsuć dodałem tutaj białe tło i ukrywa się to.  */}
        <GridItem bg={"white"}>
          <ONasElemenent />
        </GridItem>
        <GridItem>
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
};

export default About;
