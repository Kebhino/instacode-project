import { GridItem } from "@chakra-ui/react";
import Layout from "./Layout";
import Oferta from "./Oferta";
import Realizacje from "./Realizacje";
import Technologie from "./Technologie";
import UnderHero from "./UnderHero";

const MainPage = () => {
  return (
    <>
      <Layout>
        <UnderHero />
        <Oferta />
        <Realizacje />
        <Technologie />
      </Layout>
    </>
  );
};

export default MainPage;
