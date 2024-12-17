import { Paper, Stack } from "@mui/material";

export default function PaperComponent(props) {
  return (
    <Stack direction="row" spacing={2} mt={2}>
      <Paper sx={{ padding: 2 }} elevation={24}>
        elevation=24, square=false
      </Paper>
      <Paper sx={{ padding: 2 }} square elevation={24}>
        elevation=24, square=true
      </Paper>
      <Paper variant="outlined" sx={{ padding: 2 }}>
        variant="outlined"
      </Paper>
    </Stack>
  );
}
