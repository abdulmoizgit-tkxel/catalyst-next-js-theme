import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
} from "@mui/material";

function CustomDialog({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Title</DialogTitle>

      <DialogContent dividers>
        <Typography variant="body2">Instance Slot</Typography>
      </DialogContent>

      <DialogActions>
        <Button variant="text" color="primary">
          ACTION
        </Button>
        <Button variant="text" color="primary">
          ACTION
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default function App() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open Dialog
      </Button>
      <CustomDialog open={open} onClose={handleClose} />
    </div>
  );
}
