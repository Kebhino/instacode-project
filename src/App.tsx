import { useState } from "react";

import { Logo } from "./assets/InstaCodeLogo";
import { VStack } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <VStack align={"center"} justify="center" h="100vh">
        <Logo boxSize={100} color="blue.400" />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </VStack>
    </>
  );
}

export default App;
