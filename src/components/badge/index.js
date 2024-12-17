import { Avatar, Badge, Box } from "@mui/material";
import React from "react";
import MailIcon from "@mui/icons-material/Mail";

const BadgeComponent = () => {
  return (
    <Box mt={4} display="flex" gap={2}>
      <Badge color="secondary" badgeContent={5}>
        <MailIcon />
      </Badge>
      <Badge color="primary" variant="dot">
        <Avatar variant="circular">A</Avatar>
      </Badge>
    </Box>
  );
};

export default BadgeComponent;
