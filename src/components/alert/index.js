import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { AlertTitle } from "@mui/material";

export default function AlertComponent() {
  return (
    <Stack sx={{ width: "100%" }} spacing={2} mt={2}>
      <Alert variant="outlined" severity="success">
        This is a success Alert.
      </Alert>

      <Alert variant="filled" severity="success">
        This is a filled success Alert.
      </Alert>

      <Alert variant="filled" severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success Alert with an encouraging title.
      </Alert>
    </Stack>
  );
}
