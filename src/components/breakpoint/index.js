import React from "react";
import { Box, Typography } from "@mui/material";

const BreakpointsComponent = () => {
  return (
    <Box
      sx={{
        p: { xs: 1, sm: 2, md: 3, lg: 4 }, // Dynamic padding based on breakpoints
      }}
      bgcolor="blue"
    >
      <Typography variant="h6">breakpoint Test</Typography>
    </Box>
  );
};

export default BreakpointsComponent;
