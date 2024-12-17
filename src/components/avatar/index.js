import React from "react";
import { Avatar, Box, Typography } from "@mui/material";

const AvatarComponent = () => {
  const variants = [
    { variant: "circular", label: "Circular" },
    { variant: "square", label: "Square" },
    { variant: "rounded", label: "Rounded" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
        mt: 4,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Avatar Variants Test
      </Typography>
    
      <Box sx={{ display: "flex", gap: 4 }}>
          <Box
            
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar variant="circular">A</Avatar>
            <Typography variant="caption">Circular</Typography>
          </Box>
          <Box
            
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar variant="rounded">A</Avatar>
            <Typography variant="caption">Rounded</Typography>
          </Box>
          <Box
            
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar variant="square">A</Avatar>
            <Typography variant="caption">Square</Typography>
          </Box>
      </Box>
    </Box>
  );
};

export default AvatarComponent;
