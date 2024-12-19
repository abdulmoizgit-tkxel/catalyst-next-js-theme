import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { Typography } from "@mui/material";

const TooltipComponent = () => {
  const [openTooltip, setOpenTooltip] = useState("top-start");

  const handleTooltipOpen = (placement) => {
    setOpenTooltip(placement);
  };

  return (
    <Box sx={{ width: 500 }} mt={4}>
      <Typography variant="h4" gutterBottom>
        Tooltip
      </Typography>
      <Grid container sx={{ justifyContent: "center" }}>
        <Grid item>
          <Tooltip
            title="Add"
            placement="top-start"
            arrow
            open={openTooltip === "top-start"}
          >
            <Button onClick={() => handleTooltipOpen("top-start")}>
              top-start
            </Button>
          </Tooltip>
          <Tooltip
            title="Add"
            placement="top"
            disableInteractive
            arrow
            open={openTooltip === "top"}
          >
            <Button onClick={() => handleTooltipOpen("top")}>top</Button>
          </Tooltip>
          <Tooltip
            title="Add"
            placement="top-end"
            arrow
            open={openTooltip === "top-end"}
          >
            <Button onClick={() => handleTooltipOpen("top-end")}>
              top-end
            </Button>
          </Tooltip>
        </Grid>
      </Grid>
      <Grid container sx={{ justifyContent: "center" }}>
        <Grid item xs={6}>
          <Tooltip
            title="Add"
            placement="left-start"
            arrow
            open={openTooltip === "left-start"}
          >
            <Button onClick={() => handleTooltipOpen("left-start")}>
              left-start
            </Button>
          </Tooltip>
          <br />
          <Tooltip
            title="Add"
            placement="left"
            arrow
            open={openTooltip === "left"}
          >
            <Button onClick={() => handleTooltipOpen("left")}>left</Button>
          </Tooltip>
          <br />
          <Tooltip
            title="Add"
            placement="left-end"
            arrow
            open={openTooltip === "left-end"}
          >
            <Button onClick={() => handleTooltipOpen("left-end")}>
              left-end
            </Button>
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
            <Tooltip
              title="Add"
              placement="right-start"
              arrow
              open={openTooltip === "right-start"}
            >
              <Button onClick={() => handleTooltipOpen("right-start")}>
                right-start
              </Button>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip
              title="Add"
              placement="right"
              arrow
              open={openTooltip === "right"}
            >
              <Button onClick={() => handleTooltipOpen("right")}>right</Button>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip
              title="Add"
              placement="right-end"
              arrow
              open={openTooltip === "right-end"}
            >
              <Button onClick={() => handleTooltipOpen("right-end")}>
                right-end
              </Button>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
      <Grid container sx={{ justifyContent: "center" }}>
        <Grid item>
          <Tooltip
            title="Add"
            placement="bottom-start"
            arrow
            open={openTooltip === "bottom-start"}
          >
            <Button onClick={() => handleTooltipOpen("bottom-start")}>
              bottom-start
            </Button>
          </Tooltip>
          <Tooltip
            title="Add"
            placement="bottom"
            arrow
            open={openTooltip === "bottom"}
          >
            <Button onClick={() => handleTooltipOpen("bottom")}>bottom</Button>
          </Tooltip>
          <Tooltip
            title="Add"
            placement="bottom-end"
            arrow
            open={openTooltip === "bottom-end"}
          >
            <Button onClick={() => handleTooltipOpen("bottom-end")}>
              bottom-end
            </Button>
          </Tooltip>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TooltipComponent;
