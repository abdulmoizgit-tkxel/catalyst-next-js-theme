import React from "react";
import { Box, Fab, Typography, Stack, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import NavigationIcon from "@mui/icons-material/Navigation";

const fabVariants = [
  { color: "primary", icon: <AddIcon />, label: "add" },
  { color: "secondary", icon: <EditIcon />, label: "edit" },
  {
    color: "primary",
    icon: <NavigationIcon />,
    label: "navigate",
    extended: true,
  },
  { color: "default", icon: <AddIcon />, label: "add" },
  { color: "default", icon: <AddIcon />, label: "add", disabled: true },
  { color: "inherit", icon: <AddIcon />, label: "add" },
];

const fabSizes = ["small", "medium", "large"];

export default function FloatingActionButtonComponent() {
  return (
    <Stack mt={3} spacing={2}>
      <Typography variant="h6">Floating Action Buttons</Typography>
      {fabSizes.map((size) => (
        <Box key={size}>
          <Typography variant="h6">{`Size: ${size}`}</Typography>
          <Grid container spacing={2}>
            {fabVariants.map(
              ({ color, icon, label, extended, disabled }, index) => (
                <Grid item xs={3} key={index}>
                  <Typography variant="subtitle1">
                    Color: {color}, Variant: {extended ? "extended" : "round"}
                  </Typography>
                  <Fab
                    size={size}
                    color={color}
                    aria-label={label}
                    variant={extended ? "extended" : "round"}
                    disabled={disabled}
                  >
                    {icon}
                    {extended && "Navigate"}
                  </Fab>
                </Grid>
              )
            )}
          </Grid>
        </Box>
      ))}
    </Stack>
  );
}
