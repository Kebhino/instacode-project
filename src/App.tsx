import MainPage from "./componentsWeb/MainPage";
import { Routes, Route } from "react-router-dom";

import Contact from "./pages/Contact";
import About from "./pages/About";
import RealizacjeGrid from "./pages/RealizacjeGrid";
import { Grid } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Grid>
        <Routes>
          {/* Strona główna */}
          <Route
            path="/"
            element={
              <>
                <Grid
                  templateRows="auto 1fr auto auto"
                  templateColumns={"1fr"}
                  minH="auto"
                  maxW={"1200px"}
                  mx={"auto"}
                  justifyContent={"center"}
                >
                  <MainPage />
                </Grid>
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
                >
                  <About />
                </Grid>
              </>
            }
          />
        </Routes>
      </Grid>
    </>
  );
}

export default App;
