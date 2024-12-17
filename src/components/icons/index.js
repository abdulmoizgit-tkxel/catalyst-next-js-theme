import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import Icon from "@mui/material/Icon";

// Custom SvgIcon
function HomeSvgIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

// Unified Icon Component
function UnifiedIcon({ type = "svg", fontSize = "medium", iconName = "home" }) {
  return (
    <>
      {type === "svg" ? (
        <HomeSvgIcon fontSize={fontSize} />
      ) : (
        <Icon fontSize={fontSize}>{iconName}</Icon>
      )}
    </>
  );
}

// Example Usage
export default function IconsComponent() {
  return (
    <div>
      <h3>SvgIcon (Default)</h3>
      <UnifiedIcon type="svg" fontSize="inherit" />
      <UnifiedIcon type="svg" fontSize="small" />
      <UnifiedIcon type="svg" fontSize="medium" />
      <UnifiedIcon type="svg" fontSize="large" />

      <h3>FontIcon</h3>
      <UnifiedIcon type="font" fontSize="inherit" iconName="home" />
      <UnifiedIcon type="font" fontSize="small" iconName="home" />
      <UnifiedIcon type="font" fontSize="medium" iconName="home" />
      <UnifiedIcon type="font" fontSize="large" iconName="home" />
    </div>
  );
}
