import GridList from "./componentsWeb/GridList";
import { Routes, Route } from "react-router-dom";

import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <>
      <Routes>
        {/* Strona główna */}
        <Route
          path="/"
          element={
            <>
              <GridList />
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
