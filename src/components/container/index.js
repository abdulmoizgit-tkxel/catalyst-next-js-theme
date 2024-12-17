import { Box, Container } from "@mui/material";
import React from "react";

function CustomContainer() {
  return (
    <div>
      <h1>customContainer</h1>
      <Container maxWidth="xs">
        <Box sx={{ bgcolor: "#cfe8fc", height: "30vh" }} />
      </Container>
    </div>
  );
}

export default CustomContainer;
