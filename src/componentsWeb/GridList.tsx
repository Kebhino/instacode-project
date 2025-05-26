import { Grid, GridItem, Slider } from "@chakra-ui/react";
import NavigationBar from "./NavBar";
import MainSection from "./MainSection";
import SliderComp from "./SliderComp";

const GridList = () => {
  return (
    <Grid
      templateRows="auto 1fr 1fr auto"
      templateColumns={{ base: "1fr", md: "1fr" }}
      minH="100vh"
      maxW={"1200px"}
      mx={"auto"}
      justifyContent={"center"}
      bg={"white"}
    >
      <GridItem bg={"#1A202C"} colSpan={2}>
        <NavigationBar />
      </GridItem>
      <GridItem color={"black"} colSpan={2}>
        <MainSection />
      </GridItem>

      <GridItem
        colSpan={2}
        background="linear-gradient(0deg,rgba(255, 255, 255, 0.38) 0%, rgba(0, 153, 255, 0.16) 100%)"
      >
        <SliderComp />
      </GridItem>
      <GridItem colSpan={2} bg={"red"}>
        footer
      </GridItem>
    </Grid>
  );
};

export default GridList;
