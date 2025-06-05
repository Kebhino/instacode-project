import { Outlet } from "react-router-dom";
import { Grid } from "@chakra-ui/react";
import NavigationBar from "./NavBar";
import Footer from "./FooterComp";

const Layout = () => {
  return (
    <Grid
      templateRows="auto 1fr auto"
      templateColumns="1fr"
      minH="100vh"
      maxW="1200px"
      mx="auto"
      justifyContent="center"
    >
      <NavigationBar />
      <Outlet />
      <Footer />
    </Grid>
  );
};

export default Layout;
