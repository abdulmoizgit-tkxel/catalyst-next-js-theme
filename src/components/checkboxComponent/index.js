import { Checkbox, Stack } from "@mui/material";
import React from "react";

const CheckboxComponent = () => {
  return (
    <>
      <Stack direction="row" spacing={1} mt={4}>
        <Checkbox size="small" color="default" />
        <Checkbox color="success" size="medium" />
        <Checkbox color="primary" size="large" />
      </Stack>
    </>
  );
};

export default CheckboxComponent;
