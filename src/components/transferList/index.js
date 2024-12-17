import { Box, Typography } from "@mui/material";
import React from "react";
import SimpleTransferList from "./simple";
import EnhancedTransferList from "./enhanced";

export default function TransferListComponent() {
  return (
    <Box mt={3}>
      <Typography variant="h6">Transfer List</Typography>
      <SimpleTransferList />
      <EnhancedTransferList />
    </Box>
  );
}
