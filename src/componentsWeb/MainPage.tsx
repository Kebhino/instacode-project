import { Grid, GridItem } from "@chakra-ui/react";
import NavigationBar from "./NavBar";
import MainSection from "./MainSection";
import Footer from "./FooterComp";
import UnderMain from "./UnderMain";
import Oferta from "./Oferta";
import Realizacje from "./Realizacje";
import Technologie from "./Technologie";

const GridList = () => {
  return (
    <Grid
      templateRows="auto 1fr auto auto"
      templateColumns={{ base: "1fr", md: "1fr" }}
      minH="100vh"
      maxW={"1200px"}
      mx={"auto"}
      justifyContent={"center"}
    >
      <GridItem colSpan={2}>
        <NavigationBar />
      </GridItem>
      <GridItem color={"black"} colSpan={2}>
        <MainSection />
        <UnderMain />
        <Oferta />
        <Realizacje />
      </GridItem>

      <GridItem colSpan={2} bg={"white"}>
        <Technologie />
      </GridItem>
      <GridItem colSpan={2} bg="#00163E">
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default GridList;
