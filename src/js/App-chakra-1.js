import { useBoolean } from "@chakra-ui/react";
import React from "react";

function App() {
  const [flag, setFlag] = useBoolean();

  return (
    <>
      <p>Boolean state: {flag.toString()}</p>
      <button
        style={{ backgroundColor: "blue", color: "white" }}
        onClick={setFlag.toggle}
      >
        Click me to toggle the boolean value
      </button>
    </>
  );
}

export default App;
