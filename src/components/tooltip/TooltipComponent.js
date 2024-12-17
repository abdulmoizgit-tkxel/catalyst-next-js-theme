import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { Typography } from "@mui/material";

const TooltipComponent = () => {
  return (
    <Box sx={{ width: 500 }} mt={4}>
      <Typography variant="h4" gutterBottom>
        Tooltip
      </Typography>
      <Grid container sx={{ justifyContent: "center" }}>
        <Grid item>
          <Tooltip title="Add" placement="top-start" arrow>
            <Button>top-start</Button>
          </Tooltip>
          <Tooltip title="Add" placement="top" disableInteractive arrow>
            <Button>top</Button>
          </Tooltip>
          <Tooltip title="Add" placement="top-end" arrow>
            <Button>top-end</Button>
          </Tooltip>
        </Grid>
      </Grid>
      <Grid container sx={{ justifyContent: "center" }} arrow>
        <Grid item xs={6}>
          <Tooltip title="Add" placement="left-start" arrow>
            <Button>left-start</Button>
          </Tooltip>
          <br />
          <Tooltip title="Add" placement="left" arrow>
            <Button>left</Button>
          </Tooltip>
          <br />
          <Tooltip title="Add" placement="left-end" arrow>
            <Button>left-end</Button>
          </Tooltip>
        </Grid>
        <Grid
          item
          container
          xs={6}
          direction="column"
          sx={{ alignItems: "flex-end" }}
        >
          <Grid item>
            <Tooltip title="Add" placement="right-start" arrow>
              <Button>right-start</Button>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="Add" placement="right" arrow>
              <Button>right</Button>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="Add" placement="right-end" arrow>
              <Button>right-end</Button>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
      <Grid container sx={{ justifyContent: "center" }} arrow>
        <Grid item>
          <Tooltip title="Add" placement="bottom-start" arrow>
            <Button>bottom-start</Button>
          </Tooltip>
          <Tooltip title="Add" placement="bottom" arrow>
            <Button>bottom</Button>
          </Tooltip>
          <Tooltip title="Add" placement="bottom-end" arrow>
            <Button>bottom-end</Button>
          </Tooltip>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TooltipComponent;
