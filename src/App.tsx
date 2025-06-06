import MainPage from "./componentsWeb/MainPage";
import { Routes, Route } from "react-router-dom";

import Contact from "./pages/Contact";
import About from "./pages/About";
import RealizacjeGrid from "./pages/RealizacjeGrid";
import { Grid } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Routes>
        {/* Strona główna */}
        <Route
          path="/"
          element={
            <>
              <MainPage />
            </>
          }
        />

        {/* Podstrona Kontakt */}
        <Route
          path="/kontakt"
          element={
            <>
              <Grid
                templateRows="auto 1fr auto auto"
                templateColumns={"1fr"}
                minH="auto"
                maxW={"1200px"}
                mx={"auto"}
                justifyContent={"center"}
                w={"100%"}
              >
                <Contact />
              </Grid>
            </>
          }
        />
        <Route
          path="/realizacje"
          element={
            <>
              <Grid
                templateRows="auto 1fr auto auto"
                templateColumns={"1fr"}
                minH="auto"
                maxW={"1200px"}
                mx={"auto"}
                justifyContent={"center"}
                w={"100%"}
              >
                <RealizacjeGrid />
              </Grid>
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <Grid
                templateRows="auto 1fr auto auto"
                templateColumns={"1fr"}
                minH="auto"
                maxW={"1200px"}
                mx={"auto"}
                justifyContent={"center"}
                w={"100%"}
              >
                <About />
              </Grid>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
