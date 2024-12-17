import React from "react";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const IconButtonCustomComponent = () => {
  const sizes = ["small", "medium", "large"];
  const states = ["enabled", "disabled"];

  return (
    <div style={{ gap: "20px" }}>
      <IconButton size="small">
        <FavoriteIcon />
      </IconButton>
      <IconButton size="medium">
        <FavoriteIcon />
      </IconButton>
      <IconButton size="large" disabled>
        <FavoriteIcon />
      </IconButton>
      <IconButton size="small" color="primary" focusRipple>
        <FavoriteIcon />
      </IconButton>
      <IconButton size="large" color="default">
        <FavoriteIcon />
      </IconButton>
      <IconButton size="large" color="secondary">
        <FavoriteIcon />
      </IconButton>
      <IconButton size="large" color="error">
        <FavoriteIcon />
      </IconButton>
      <IconButton size="large" color="warning">
        <FavoriteIcon />
      </IconButton>
      <IconButton size="large" color="info">
        <FavoriteIcon />
      </IconButton>
      <IconButton size="large" color="success">
        <FavoriteIcon />
      </IconButton>
      <IconButton size="large" color="inherit">
        <FavoriteIcon />
      </IconButton>
    </div>
  );
};

export default IconButtonCustomComponent;
