import { Grid, GridItem, Text } from "@chakra-ui/react";
import NavigationBar from "./NavBar";
import MainSection from "./MainSection";
import SliderComp from "./SliderComp";
import Footer from "./FooterComp";
import UnderMain from "./UnderMain";
import Oferta from "./Oferta";
import BottomGrid from "./BottomGrid";
import MainFooter from "./MainFooter";

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
        <BottomGrid />
        <MainFooter />
      </GridItem>

      <GridItem colSpan={2} bg={"white"}>
        <Text fontSize="lg" color="#00163E" textAlign="center" mb={4}>
          <b>Tworzyliśmy systemy dla takich firm jak:</b>
        </Text>
        <SliderComp />
      </GridItem>
      <GridItem colSpan={2} bg={"white"}>
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default GridList;
