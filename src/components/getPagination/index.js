import * as React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Typography } from "@mui/material";

export default function PaginationComponent() {
  return (
    <Stack spacing={2} sx={{ mt: 3 }}>
      <Typography variant="h6">
        Pagination - Size Small - Color Primary
      </Typography>
      <Pagination
        size="small"
        count={10}
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
      <Typography variant="h6">
        Pagination - Size Medium - Color Primary
      </Typography>

      <Pagination
        color="primary"
        size="medium"
        count={10}
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
      <Stack flexDirection="row" gap={2}>
        <Box>
          <Typography variant="h6">
            Pagination - Size Large - Color Secondary
          </Typography>

          <Pagination
            color="secondary"
            size="large"
            shape="rounded"
            count={10}
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
          />
        </Box>

        <Box>
          <Typography variant="h6">
            Pagination - Size Large - Color Secondary - Outlined
          </Typography>

          <Pagination
            color="secondary"
            size="large"
            shape="rounded"
            variant="outlined"
            count={10}
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
          />
        </Box>
      </Stack>
    </Stack>
  );
}
