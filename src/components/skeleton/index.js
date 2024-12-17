import { LinearProgress, Skeleton, Stack } from "@mui/material";
import React from "react";

export default function SkeletonComponent() {
  return (
    <Stack gap={2} mt={2}>
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={60} />
    </Stack>
  );
}
