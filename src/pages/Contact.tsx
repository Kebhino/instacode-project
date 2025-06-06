import ContactMain from "@/componentsWeb/ContactMain";
import Footer from "@/componentsWeb/Footer";
import Hero from "@/componentsWeb/Hero";
import NavigationBar from "@/componentsWeb/NavBar";
import { GridItem } from "@chakra-ui/react";

const Contact = () => {
  return (
    <>
      <GridItem>
        <NavigationBar />
      </GridItem>
      <GridItem>
        <Hero />
      </GridItem>
      <GridItem>
        <ContactMain />
      </GridItem>
      <GridItem>
        <Footer />
      </GridItem>
    </>
  );
};

export default Contact;
