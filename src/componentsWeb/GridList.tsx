import { Grid, GridItem } from "@chakra-ui/react";
import NavigationBar from "./NavBar";

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
      <GridItem bg={"indigo.400"}></GridItem>

      <GridItem colSpan={2} bg={"blue.200"}>
        footer
      </GridItem>
      <GridItem colSpan={2} bg={"red"}>
        footer
      </GridItem>
    </Grid>
  );
};

export default GridList;
