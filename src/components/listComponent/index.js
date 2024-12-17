import React, { useState } from "react";
import { List, ListItem, ListItemText } from "@mui/material";

function ListComponent() {
  return (
    <List>
      <ListItem divider dense>
        item 1
      </ListItem>
      <ListItem disableGutters divider>
        <ListItemText secondary="secondary text">Item 2</ListItemText>
      </ListItem>
    </List>
  );
}

export default ListComponent;
