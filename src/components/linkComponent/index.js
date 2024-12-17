import { Link, Stack, Typography } from "@mui/material";
import React from "react";

const LinkComponent = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Link href="#" underline="always" color="primary">
        Always, Primary
      </Link>
      <Link href="#" underline="always" color="inherit">
        Always, Inherit
      </Link>
      <Link href="#" underline="hover" color="primary">
        Hover, Primary
      </Link>
      <Link href="#" underline="hover" color="inherit">
        Hover, Inherit
      </Link>
      <Link href="#" underline="none" color="primary">
        None, Primary
      </Link>
      <Link href="#" underline="none" color="inherit">
        None, Inherit
      </Link>
    </Stack>
  );
};

export default LinkComponent;
