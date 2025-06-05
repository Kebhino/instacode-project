import { GridItem } from "@chakra-ui/react";
import Footer from "./FooterComp";
import MainSection from "./MainSection";
import NavigationBar from "./NavBar";
import Oferta from "./Oferta";
import Realizacje from "./Realizacje";
import Technologie from "./Technologie";
import UnderMain from "./UnderMain";

const MainPage = () => {
  return (
    <>
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
    </>
  );
};

export default MainPage;
