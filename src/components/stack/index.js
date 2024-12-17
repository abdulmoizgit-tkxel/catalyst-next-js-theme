import React from "react";
import { Stack, Box, Button } from "@mui/material";

const StackComponent = () => {
  return (
    <div>
      <Stack gap={2} direction="column" alignItems="center">
        <Box sx={{ width: 200, height: 100, backgroundColor: "lightblue" }}>
          Box 1
        </Box>
        <Box sx={{ width: 200, height: 100, backgroundColor: "lightgreen" }}>
          Box 2
        </Box>
        <Button variant="contained">Click Me</Button>
      </Stack>
      <Stack gap={2} direction="row" alignItems="center">
        <Box sx={{ width: 200, height: 100, backgroundColor: "lightblue" }}>
          Box 1
        </Box>
        <Box sx={{ width: 200, height: 100, backgroundColor: "lightgreen" }}>
          Box 2
        </Box>
        <Button variant="contained">Click Me</Button>
      </Stack>
    </div>
  );
};

export default StackComponent;
