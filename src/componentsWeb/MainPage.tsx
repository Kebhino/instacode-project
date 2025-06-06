import { GridItem } from "@chakra-ui/react";
import Footer from "./Footer";
import Hero from "./Hero";
import NavigationBar from "./NavBar";
import Oferta from "./Oferta";
import Realizacje from "./Realizacje";
import Technologie from "./Technologie";
import UnderHero from "./UnderHero";

const MainPage = () => {
  return (
    <>
      <GridItem>
        <NavigationBar />
      </GridItem>
      <GridItem color={"black"}>
        <Hero />

        <UnderHero />
        <Oferta />
        <Realizacje />
      </GridItem>

      <GridItem bg={"white"}>
        <Technologie />
      </GridItem>
      <GridItem bg="#00163E">
        <Footer />
      </GridItem>
    </>
  );
};

export default MainPage;
