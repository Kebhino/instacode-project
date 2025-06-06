// src/pages/Contact.tsx

import Footer from "@/componentsWeb/Footer";
import NavBar from "@/componentsWeb/NavBar";
import Hero from "@/componentsWeb/Hero";
import ONasElemenent from "@/componentsWeb/oNas";
import { GridItem } from "@chakra-ui/react";

const About = () => {
  return (
    <>
      <GridItem>
        <NavBar />
      </GridItem>
      <GridItem>
        <Hero />
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
