import { Logo } from "@/assets/InstaCodeLogo";
import { Grid, GridItem, VStack } from "@chakra-ui/react";

const GridList = () => {
  return (
    <Grid
      templateRows="auto 1fr 1fr auto"
      templateColumns={{ base: "1fr", md: "1fr" }}
      minH="100vh"
    >
      <GridItem bg={"#1A202C"} colSpan={2}>
        <Logo boxSize={100} color="teal.400" />
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
