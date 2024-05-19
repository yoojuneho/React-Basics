import React, { useState } from "react";

import { Button, Stack, Alert, SnackbarContent } from "@mui/material";

export default function App() {
  const [msg, setMsg] = useState(`Welcome to Incheon`);
  const onClick1 = () => {
    setMsg(`Beutiful 송도`);
  };
  const onClick2 = () => {
    setMsg(`Dark 제물포`);
  };
  return (
    <>
      <Alert severity="success">Which one do you prefer?</Alert>
      <Stack align="center" direction="row" spacing={3}>
        <Button
          style={{ margin: "auto", display: "flex" }}
          variant="contained"
          onClick={onClick1}
        >
          송도
        </Button>
        <Button
          style={{ margin: "auto", display: "flex" }}
          variant="outlined"
          onClick={onClick2}
        >
          제물포
        </Button>
      </Stack>
      <br />
      <SnackbarContent message={msg} />
    </>
  );
}
