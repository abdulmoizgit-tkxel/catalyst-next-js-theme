import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

export default function RatingComponent() {
  return (
    <Stack spacing={1}>
      <Typography mt={6} variant="h6">
        Rating
      </Typography>

      <Rating name="half-rating" precision={0.5} />
      <Typography mt={6} variant="h6">
        Rating - Read Only
      </Typography>
      <Rating
        name="half-rating-read"
        defaultValue={2.5}
        precision={0.5}
        readOnly
      />
    </Stack>
  );
}
