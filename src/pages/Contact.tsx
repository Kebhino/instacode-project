import ContacElement from "@/componentsWeb/ContacElement";
import Footer from "@/componentsWeb/FooterComp";
import MainSection from "@/componentsWeb/MainSection";
import NavigationBar from "@/componentsWeb/NavBar";
import { GridItem } from "@chakra-ui/react";

const Contact = () => {
  return (
    <>
      <GridItem>
        <NavigationBar />
      </GridItem>
      <GridItem>
        <MainSection />
      </GridItem>

      <ContacElement />

      <GridItem>
        <Footer />
      </GridItem>
    </>
  );
};

export default Contact;
