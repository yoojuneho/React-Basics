import React, { useState } from "react";
import { Button } from "@mui/material";

function App() {
  const [obj, setObj] = useState([`인천대`, `컴공`, `너무좋아🐥`]);

  const OnChange = () => {
    obj[2] = `그냥 좋아 😊`;
    setObj(obj);
    console.log(obj);
  };
  return (
    <div>
      <h2>
        {obj[0]} 💕 {obj[1]} 💕 {obj[2]}
      </h2>
      <Button variant="contained" onClick={OnChange}>
        click me
      </Button>
    </div>
  );
}

export default App;
