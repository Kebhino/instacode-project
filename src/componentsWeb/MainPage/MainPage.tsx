import Layout from "../../Layout/Layout";
import Oferta from "./Oferta";
import Realizacje from "./Realizacje";
import Technologie from "./Technologie";
import UnderHero from "../../Layout/Hero/UnderHero";

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
