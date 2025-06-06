import { Grid } from "@chakra-ui/react";
import NavigationBar from "./NavBar";
import Footer from "./Footer";
import Hero from "./Hero";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Grid
      templateRows="auto 1fr auto auto"
      templateColumns={"1fr"}
      minH="auto"
      maxW={"1200px"}
      mx={"auto"}
      justifyContent={"center"}
      w={"100%"}
    >
      <NavigationBar />
      <Hero />
      {children}

      <Footer />
    </Grid>
  );
};

export default Layout;
