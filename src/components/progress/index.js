import {
  Box,
  CircularProgress,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

export default function ProgressComponent() {
  return (
    <Stack gap={2} mt={2}>
      <Stack gap={2}>
        <Typography variant="h6">Linear Progress</Typography>
        <LinearProgress color="primary" />
        <LinearProgress color="secondary" />
        <LinearProgress color="inherit" />
      </Stack>
      <Stack direction="row" gap={2}>
        <Typography variant="h6">Circular Progress, 16px</Typography>
        <Stack gap={2}>
          <CircularProgress size={16} thickness={2} color="primary" />
          <CircularProgress size={16} thickness={2} color="secondary" />
          <CircularProgress size={16} thickness={2} color="inherit" />
        </Stack>
        <Typography variant="h6">Circular Progress, 32px</Typography>
        <Stack gap={2}>
          <CircularProgressWithLabel value={25} color="primary" />
          <CircularProgressWithLabel value={50} color="secondary" />
          <CircularProgressWithLabel value={75} color="inherit" />
        </Stack>
      </Stack>
    </Stack>
  );
}

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress thickness={4} size={32} {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography color="textSecondary" variant="caption">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
