import * as React from "react";
import TextField from "@mui/material/TextField";
import { Stack, Box } from "@mui/material";

const TextFieldComponent = () => {
  return (
    <Stack mt={4}>
      <Stack flexDirection="row" gap={2}>
        <TextField label="Small" variant="outlined" size="small" />
        <TextField error label="Small" variant="outlined" size="small" />
        <TextField
          disabled
          defaultValue="Disabled"
          label="Small"
          variant="outlined"
          size="small"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
        <TextField label="Medium" variant="outlined" size="medium" />
      </Stack>
      <Stack flexDirection="row" gap={2}>
        <TextField label="Small" variant="standard" size="small" />
        <TextField error label="Small" variant="standard" size="small" />
        <TextField disabled label="Small" variant="standard" size="small" />
        <TextField label="Medium" variant="standard" size="medium" />
      </Stack>
      <Stack flexDirection="row" mt={4} gap={2}>
        <TextField label="Small" variant="filled" size="small" />
        <TextField error label="Small" variant="filled" size="small" />
        <TextField disabled label="Small" variant="filled" size="small" />
        <TextField label="Medium" variant="filled" size="medium" />
      </Stack>
    </Stack>
  );
};

export default TextFieldComponent;
