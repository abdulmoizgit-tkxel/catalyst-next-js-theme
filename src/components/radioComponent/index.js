import { Radio, Stack, Typography } from "@mui/material";
import React from "react";
import { RadioGroup } from "@mui/material";

const RadioComponent = () => {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <Stack flexDirection="row" my={4} gap={8}>
      <Typography variant="h6">Radio</Typography>
      <Stack direction="row" spacing={1}>
        <Radio size="small" color="default" />
        <Radio color="primary" />
        <Radio size="large" color="success" />
      </Stack>
      <Typography variant="h6">RadioGroup</Typography>
      <Stack direction="row" spacing={1}>
        <RadioGroup row value={selectedValue} onChange={handleChange}>
          <Radio value="a" size="small" color="default" />
          <Radio value="b" color="primary" />
          <Radio value="c" size="large" color="success" />
        </RadioGroup>
      </Stack>
    </Stack>
  );
};

export default RadioComponent;
