import GridList from "./componentsWeb/GridList";
import { Routes, Route } from "react-router-dom";

import Contact from "./pages/Contact";

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

        {/* Podstrona SnakeGame */}
        <Route
          path="/kontakt"
          element={
            <>
              <Contact />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
