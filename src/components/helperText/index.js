import React from "react";
import { Button, FormHelperText, Stack } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

const HelperTextComponent = () => {
  return (
    <Stack spacing={2} direction="column" mt={2}>
      <FormHelperText enabled>Default Form Helper Text</FormHelperText>
      <FormHelperText error>Error Form Helper Text</FormHelperText>
      <FormHelperText disabled>Disabled Form Helper Text</FormHelperText>
    </Stack>
  );
};

export default HelperTextComponent;
