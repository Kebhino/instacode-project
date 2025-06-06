import { Route, Routes } from "react-router-dom";
import MainPage from "./componentsWeb/MainPage/MainPage";

import About from "./pages/About";
import Contact from "./pages/Contact";
import RealizacjeGrid from "./pages/RealizacjeGrid";

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
              <Contact />
            </>
          }
        />
        <Route
          path="/realizacje"
          element={
            <>
              <RealizacjeGrid />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <About />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
