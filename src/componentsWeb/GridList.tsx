import { Grid, GridItem, Text } from "@chakra-ui/react";
import NavigationBar from "./NavBar";
import MainSection from "./MainSection";
import SliderComp from "./SliderComp";
import Footer from "./FooterComp";
import UnderMain from "./UnderMain";

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
      </GridItem>

      <GridItem colSpan={2}>
        <Text fontSize="lg" color="gray.700" textAlign="center" mb={4}>
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
