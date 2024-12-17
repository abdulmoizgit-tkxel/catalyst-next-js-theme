import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Stack, Grid } from "@mui/material";

function SliderComponent() {
  const sliderConfigs = [
    {
      size: "small",
      step: undefined,
      orientation: "horizontal",
      label: "Small Continuous (Horizontal)",
      color: "primary",
    },
    {
      size: "medium",
      step: 10,
      orientation: "horizontal",
      label: "Medium Discrete (Horizontal)",
      color: "secondary",
      marks: true,
    },
    {
      size: "small",
      step: undefined,
      orientation: "vertical",
      label: "Small Continuous (Vertical)",
      color: "primary",
    },
    {
      size: "medium",
      step: 10,
      orientation: "vertical",
      label: "Medium Discrete (Vertical)",
      color: "secondary",
      marks: true,
    },
    {
      size: "small",
      step: undefined,
      orientation: "horizontal",
      label: "Small Continuous (Horizontal)",
      disabled: true,
    },
    {
      size: "medium",
      step: 10,
      orientation: "vertical",
      label: "Medium Discrete (Vertical)",
      disabled: true,
    },
  ];

  const [sliderValues, setSliderValues] = useState(sliderConfigs.map(() => 50));

  const handleSliderChange = (index) => (event, newValue) => {
    const updatedValues = [...sliderValues];
    updatedValues[index] = newValue;
    setSliderValues(updatedValues);
  };

  return (
    <Box sx={{ mt: 2, p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Sliders
      </Typography>

      <Grid container spacing={2}>
        {sliderConfigs.map((config, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1" mb={1}>
                {config.label} - Value: {sliderValues[index]}
                {config.disabled && " (Disabled)"}
              </Typography>
              <Box
                sx={{
                  height: config.orientation === "vertical" ? 150 : "auto",
                  display: "flex",
                  flexDirection:
                    config.orientation === "vertical" ? "row" : "column",
                }}
              >
                <Slider
                  value={sliderValues[index]}
                  onChange={handleSliderChange(index)}
                  min={0}
                  max={100}
                  step={config.step}
                  orientation={config.orientation}
                  size={config.size}
                  valueLabelDisplay="auto"
                  color={config.color}
                  disabled={Boolean(config.disabled)}
                  marks={config.marks}
                />
                <Stack
                  direction={
                    config.orientation === "horizontal" ? "row" : "column"
                  }
                  justifyContent="space-between"
                >
                  <Typography variant="caption" color="text.secondary">
                    0
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    100
                  </Typography>
                </Stack>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <RangeSliderComponent />
    </Box>
  );
}

function RangeSliderComponent() {
  const sliderConfigs = [
    {
      size: "small",
      step: undefined,
      orientation: "horizontal",
      label: "Small Continuous Range (Horizontal)",
      color: "primary",
    },
    {
      size: "medium",
      step: 10,
      orientation: "horizontal",
      label: "Medium Discrete Range (Horizontal)",
      color: "secondary",
      marks: true,
    },
    {
      size: "small",
      step: undefined,
      orientation: "vertical",
      label: "Small Continuous Range (Vertical)",
      color: "primary",
    },
    {
      size: "medium",
      step: 10,
      orientation: "vertical",
      label: "Medium Discrete Range (Vertical)",
      color: "secondary",
      marks: true,
    },
    {
      size: "small",
      step: undefined,
      orientation: "horizontal",
      label: "Small Continuous Range (Horizontal) Disabled",
      disabled: true,
    },
    {
      size: "medium",
      step: 10,
      orientation: "vertical",
      label: "Medium Discrete Range (Vertical) Disabled",
      disabled: true,
    },
  ];

  const [sliderValues, setSliderValues] = useState(
    sliderConfigs.map(() => [20, 80])
  );

  const handleSliderChange = (index) => (event, newValue) => {
    const updatedValues = [...sliderValues];
    updatedValues[index] = newValue;
    setSliderValues(updatedValues);
  };

  return (
    <Box sx={{ mt: 2, p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Range Sliders
      </Typography>

      <Grid container spacing={2}>
        {sliderConfigs.map((config, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1" mb={1}>
                {config.label} - Value: {sliderValues[index][0]} to{" "}
                {sliderValues[index][1]}
                {config.disabled && " (Disabled)"}
              </Typography>
              <Box
                sx={{
                  height: config.orientation === "vertical" ? 150 : "auto",
                  display: "flex",
                  flexDirection:
                    config.orientation === "vertical" ? "row" : "column",
                }}
              >
                <Slider
                  value={sliderValues[index]}
                  onChange={handleSliderChange(index)}
                  min={0}
                  max={100}
                  step={config.step}
                  orientation={config.orientation}
                  size={config.size}
                  valueLabelDisplay="auto"
                  color={config.color}
                  disabled={Boolean(config.disabled)}
                  marks={config.marks}
                />
                <Stack
                  direction={
                    config.orientation === "horizontal" ? "row" : "column"
                  }
                  justifyContent="space-between"
                >
                  <Typography variant="caption" color="text.secondary">
                    0
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    100
                  </Typography>
                </Stack>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default SliderComponent;
