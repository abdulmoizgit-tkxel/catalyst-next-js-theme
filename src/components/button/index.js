import {
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import { LoadingButton } from "@mui/lab";

import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";

const ButtonComponent = () => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        display: "flex",
        gap: theme.spacing(2),
        mt: theme.spacing(4),
        flexDirection: { xs: "column", sm: "row" }, // Stack buttons on smaller screens
        alignItems: "center",
        justifyContent: { xs: "center", md: "flex-start" },
        flexWrap: "wrap",
      }}
    >
      <Button variant="contained" color="inherit" size="large">
        Primary Button
      </Button>
      <Button variant="outlined" color="secondary" disabled size="large">
        Secondary Button
      </Button>
      <Button variant="text" color="secondary" size="medium">
        Text Button
      </Button>
      <Button variant="outlined" color="primary" size="large">
        Outlined Button
      </Button>
      <Button variant="contained" color="info" size="large">
        Text Button
      </Button>
      <Button variant="outlined" color="success" size="medium">
        Success Button
      </Button>
      <Button variant="outlined" color="inherit" size="medium">
        Text Buttonnnn
      </Button>
      <Button variant="contained" color="success" disabled size="medium">
        Text Button
      </Button>
      <Button variant="contained" color="primary" size="large">
        Large Contained Button
      </Button>

      <IconButton size="medium" color="primary">
        <DeleteIcon />
      </IconButton>

      <LoadingButton
        loading
        size="large"
        variant="outlined"
        color="success"
        startIcon={<CircularProgress size={16} />}
        loadingPosition="start"
      >
        Loading...
      </LoadingButton>

      <ButtonGroup
        variant="outlined"
        color="primary"
        aria-label="Basic button group"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <ButtonGroup
        variant="contained"
        color="success"
        aria-label="Basic button group"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="Basic button group"
        orientation="vertical"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <ButtonGroup
        variant="text"
        color="inherit"
        aria-label="Basic button group"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <ButtonGroup variant="outlined" aria-label="Loading button group">
        <Button>Submit</Button>
        <LoadingButton>Fetch data</LoadingButton>
        <LoadingButton loading loadingPosition="start" startIcon={<SaveIcon />}>
          Save
        </LoadingButton>
      </ButtonGroup>

      <ButtonGroup variant="contained" color="info" aria-label="split button">
        <Button>Label</Button>
        <Button
          aria-controls={anchorEl ? "menu" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Option 1</MenuItem>
        <MenuItem onClick={handleClose}>Option 2</MenuItem>
        <MenuItem onClick={handleClose}>Option 3</MenuItem>
      </Menu>

      <ToggleButtons />
    </Box>
  );
};

function ToggleButtons() {
  const [alignment, setAlignment] = React.useState("center");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const sizes = ["small", "medium", "large"];
  const orientations = ["horizontal", "vertical"];

  return (
    <>
      {sizes.map((size) =>
        orientations.map((orientation) => (
          <ToggleButtonGroup
            key={`${size}-${orientation}`}
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            size={size}
            orientation={orientation}
          >
            <ToggleButton value="left" aria-label="left aligned">
              <FormatAlignLeftIcon />
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered">
              <FormatAlignCenterIcon />
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned">
              <FormatAlignRightIcon />
            </ToggleButton>
            <ToggleButton disabled value="justify" aria-label="justified">
              <FormatAlignJustifyIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        ))
      )}
    </>
  );
}

export default ButtonComponent;
