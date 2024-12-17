import React from "react";
import { Switch } from "@mui/material";

const SwitchComponent = () => {
  const label = { inputProps: { "aria-label": "Color switch demo" } };
  return (
    <div>
      <Switch size="small" defaultChecked />
      <Switch size="medium" defaultChecked color="secondary" />
      <Switch defaultChecked color="default" />
      <Switch size="medium" color="primary" />
    </div>
  );
};

export default SwitchComponent;
