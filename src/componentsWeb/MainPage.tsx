import { Grid, GridItem } from "@chakra-ui/react";
import NavigationBar from "./NavBar";
import MainSection from "./MainSection";
import Footer from "./FooterComp";
import UnderMain from "./UnderMain";
import Oferta from "./Oferta";
import Realizacje from "./Realizacje";
import Technologie from "./Technologie";

const MainPage = () => {
  return (
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
        <UnderMain />
        <Oferta />
        <Realizacje />
      </GridItem>

      <GridItem bg={"white"}>
        <Technologie />
      </GridItem>
      <GridItem bg="#00163E">
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default MainPage;
