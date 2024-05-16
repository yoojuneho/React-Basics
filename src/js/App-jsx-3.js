import React from "react";

function App() {
  const lecture = `Web`;
  return (
    <>
      {lecture === `Web` ? (
        <h2 style={{ backgroundColor: "green", color: "white" }}>
          Web Programming
        </h2>
      ) : (
        <h2 style={{ backgroundColor: "blue", color: "white" }}>
          Server-side Programming
        </h2>
      )}
    </>
  );
}

export default App;
