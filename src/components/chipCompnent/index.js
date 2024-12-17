import React from "react";
import Avatar from "@mui/material/Avatar";
import FaceIcon from "@mui/icons-material/Face";
import { Box, Chip, Stack, useTheme } from "@mui/material";

const ChipComponent = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{ display: "flex", gap: theme.spacing(2), mt: theme.spacing(4) }}
      >
        <Chip
          label="Chip Outlined"
          variant="filled"
          color="primary"
          size="medium"
        />

        <Chip
          label="Chip Outlined"
          variant="outlined"
          color="scondory"
          size="small"
        />

        <Chip
          label="Chip text"
          variant="filled"
          disabled
          color="error"
          size="large"
        />
      </Box>

      <Stack direction="row" spacing={1} mt={4}>
        <Chip avatar={<Avatar>M</Avatar>} label="Avatar" />
        <Chip
          avatar={<Avatar alt="Natacha" src="/asset/avatar.png" />}
          label="Avatar"
          variant="outlined"
        />
        <Chip
          // icon={<FaceIcon />}
          avatar={
            <Avatar>
              <FaceIcon />
            </Avatar>
          }
          label="With Icon"
          variant="filled"
          color="primary"
          size="medium"
        />
      </Stack>
    </>
  );
};

export default ChipComponent;
