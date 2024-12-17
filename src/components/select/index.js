"use client";

import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box, Stack, Typography } from "@mui/material";

export default function SelectComponent() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const variantStandard = [
    {
      id: "primary-small",
      label: "Small, Primary",
      color: "primary",
      variant: "standard",
      error: false,
      disabled: false,
      size: "small",
    },
    {
      id: "error-small",
      label: "Small, Error",
      color: "error",
      variant: "standard",
      error: true,
      disabled: false,
      size: "small",
    },
    {
      id: "disabled-small",
      label: "Small, Disabled",
      color: "disabled",
      variant: "standard",
      error: false,
      disabled: true,
      size: "small",
    },
    {
      id: "primary-medium",
      label: "Medium, Primary",
      color: "primary",
      variant: "standard",
      error: false,
      disabled: false,
      size: "medium",
    },
    {
      id: "error-medium",
      label: "Medium, Error",
      color: "error",
      variant: "standard",
      error: true,
      disabled: false,
      size: "medium",
    },
    {
      id: "disabled-medium",
      label: "Medium, Disabled",
      color: "disabled",
      variant: "standard",
      error: false,
      disabled: true,
      size: "medium",
    },
  ];
  const variantOutlined = [
    {
      id: "primary-small",
      label: "Small, Primary",
      color: "primary",
      error: false,
      disabled: false,
      size: "small",
    },
    {
      id: "error-small",
      label: "Small, Error",
      color: "error",
      error: true,
      disabled: false,
      size: "small",
    },
    {
      id: "disabled-small",
      label: "Small, Disabled",
      color: "disabled",
      error: false,
      disabled: true,
      size: "small",
    },
    {
      id: "primary-medium",
      label: "Medium, Primary",
      color: "primary",
      error: false,
      disabled: false,
      size: "medium",
    },
    {
      id: "error-medium",
      label: "Medium, Error",
      color: "error",
      error: true,
      disabled: false,
      size: "medium",
    },
    {
      id: "disabled-medium",
      label: "Medium, Disabled",
      color: "disabled",
      error: false,
      disabled: true,
      size: "medium",
    },
  ];
  const variantFilled = [
    {
      id: "primary-small",
      label: "Small, Primary",
      color: "primary",
      error: false,
      disabled: false,
      size: "small",
      variant: "filled",
    },
    {
      id: "error-small",
      label: "Small, Error",
      color: "error",
      error: true,
      disabled: false,
      size: "small",
      variant: "filled",
    },
    {
      id: "disabled-small",
      label: "Small, Disabled",
      color: "disabled",
      error: false,
      disabled: true,
      size: "small",
      variant: "filled",
    },
    {
      id: "primary-medium",
      label: "Medium, Primary",
      color: "primary",
      error: false,
      disabled: false,
      size: "medium",
      variant: "filled",
    },
    {
      id: "error-medium",
      label: "Medium, Error",
      color: "error",
      error: true,
      disabled: false,
      size: "medium",
      variant: "filled",
    },
    {
      id: "disabled-medium",
      label: "Medium, Disabled",
      color: "disabled",
      error: false,
      disabled: true,
      size: "medium",
      variant: "filled",
    },
  ];

  return (
    <Box mt={3}>
      <Typography sx={{ mb: 2 }} variant="h6">
        Select - Standard
      </Typography>
      <Stack flexDirection="row" gap={2} flexWrap="wrap">
        {variantStandard.map((config) => (
          <FormControl key={config.id} sx={{ width: "10%" }}>
            <InputLabel id={`select-label-${config.id}`} color={config.color}>
              {config.label}
            </InputLabel>
            <Select
              labelId={`select-label-${config.id}`}
              id={`select-${config.id}`}
              value={age}
              onChange={handleChange}
              autoWidth
              label={config.label}
              variant={config.variant}
              error={config.error}
              disabled={config.disabled}
              size={config.size} // Dynamically applies size
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={21}>Twenty one</MenuItem>
              <MenuItem value={22}>Twenty one and a half</MenuItem>
            </Select>
          </FormControl>
        ))}
      </Stack>
      <Typography sx={{ my: 2 }} variant="h6">
        Select - Outlined
      </Typography>
      <Stack mt={3} flexDirection="row" gap={2} flexWrap="wrap">
        {variantOutlined.map((config) => (
          <FormControl key={config.id} sx={{ width: "10%" }}>
            <InputLabel id={`select-label-${config.id}`} color={config.color}>
              {config.label}
            </InputLabel>
            <Select
              labelId={`select-label-${config.id}`}
              id={`select-${config.id}`}
              value={age}
              onChange={handleChange}
              autoWidth
              label={config.label}
              variant={config.variant}
              error={config.error}
              disabled={config.disabled}
              size={config.size} // Dynamically applies size
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={21}>Twenty one</MenuItem>
              <MenuItem value={22}>Twenty one and a half</MenuItem>
            </Select>
          </FormControl>
        ))}
      </Stack>
      <Typography sx={{ mb: 2 }} variant="h6">
        Select - Filled
      </Typography>
      <Stack mt={3} flexDirection="row" gap={2} flexWrap="wrap">
        {variantFilled.map((config) => (
          <FormControl key={config.id} sx={{ width: "10%" }}>
            <InputLabel id={`select-label-${config.id}`} color={config.color}>
              {config.label}
            </InputLabel>
            <Select
              labelId={`select-label-${config.id}`}
              id={`select-${config.id}`}
              value={age}
              onChange={handleChange}
              autoWidth
              label={config.label}
              variant={config.variant}
              error={config.error}
              disabled={config.disabled}
              size={config.size} // Dynamically applies size
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={21}>Twenty one</MenuItem>
              <MenuItem value={22}>Twenty one and a half</MenuItem>
            </Select>
          </FormControl>
        ))}
      </Stack>
    </Box>
  );
}
