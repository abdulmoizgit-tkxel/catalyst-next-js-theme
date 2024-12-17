import * as React from "react";
import Box from "@mui/material/Box";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import { Typography } from "@mui/material";

export default function TreeViewComponent() {
  return (
    <Box sx={{ display: "inline-block", mt: 3 }}>
      <Typography mb={1} variant="h6">
        Tree View
      </Typography>
      <SimpleTreeView>
        <TreeItem disabled itemId="grid" label="Data Grid">
          <TreeItem itemId="grid-community" label="@mui/x-data-grid" />
          <TreeItem itemId="grid-pro" label="@mui/x-data-grid-pro" />
          <TreeItem itemId="grid-premium" label="@mui/x-data-grid-premium" />
        </TreeItem>
        <TreeItem itemId="pickers" label="Date and Time Pickers">
          <TreeItem itemId="pickers-community" label="@mui/x-date-pickers" />
          <TreeItem itemId="pickers-pro" label="@mui/x-date-pickers-pro" />
        </TreeItem>
        <TreeItem itemId="charts" label="Charts">
          <TreeItem itemId="charts-community" label="@mui/x-charts" />
        </TreeItem>
        <TreeItem itemId="Empty" label="Empty"></TreeItem>
        <TreeItem itemId="tree-view" label="Tree View" disabled></TreeItem>
      </SimpleTreeView>
    </Box>
  );
}
