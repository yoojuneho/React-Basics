import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch(`http://localhost:3003/web`)
      .then((response) => {
        return response.json();
      })
      .then((profile) => {
        console.log(profile);
      })
      .catch((e) => {
        console.log(e);
      });
  });
  return <div>App</div>;
}

export default App;
