import MainPage from "./componentsWeb/MainPage";
import { Routes, Route } from "react-router-dom";

import Contact from "./pages/Contact";
import About from "./pages/About";
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
