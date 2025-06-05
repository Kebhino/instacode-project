// src/pages/Contact.tsx

import Footer from "@/componentsWeb/FooterComp";
import NavBar from "@/componentsWeb/NavBar";
import MainSection from "@/componentsWeb/MainSection";
import ONasElemenent from "@/componentsWeb/oNas";
import { GridItem } from "@chakra-ui/react";

const About = () => {
  return (
    <>
      <GridItem>
        <NavBar />
      </GridItem>
      <GridItem>
        <MainSection />
      </GridItem>

      <GridItem>
        <ONasElemenent />
      </GridItem>
      <GridItem>
        <Footer />
      </GridItem>
    </>
  );
};

export default About;
