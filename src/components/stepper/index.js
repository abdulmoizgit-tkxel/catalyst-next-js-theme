import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import HorizontalLinearStepper from "./HorizontalLinearStepper";
import VerticalLinearStepper from "./VerticalLinearStepper";
import TextMobileStepper from "./TextMobileStepper";
import DotsMobileStepper from "./DotsMobileStepper";
import ProgressMobileStepper from "./ProgressMobileStepper";

export default function StepperComponent() {
  return (
    <Box mt={2}>
      <Typography variant="h6">Stepper - Horizontal & Vertical</Typography>
      <Stack gap={2}>
        <HorizontalLinearStepper />
        <VerticalLinearStepper />
        <TextMobileStepper />
        <DotsMobileStepper />
        <ProgressMobileStepper />
      </Stack>
    </Box>
  );
}
