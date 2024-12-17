import React from 'react';
import { Box, Typography } from '@mui/material';

const SpacingTest = () => {
  return (
    <div>
      <Box sx={{ p: 1, mb: 2, backgroundColor: '#e0e0e0' }}>
        <Typography align="center">Spacing Test - Padding: 8px, Margin: 16px</Typography>
      </Box>
      <Box sx={{ p: 2, mb: 3, backgroundColor: '#d0d0d0' }}>
        <Typography align="center">Spacing Test - Padding: 16px, Margin: 24px</Typography>
      </Box>
      <Box sx={{ p: 3, mb: 4, backgroundColor: '#b0b0b0' }}>
        <Typography align="center">Spacing Test - Padding: 24px, Margin: 32px</Typography>
      </Box>
      <Box sx={{ p: 4, mb: 5, backgroundColor: '#a0a0a0' }}>
        <Typography align="center">Spacing Test - Padding: 32px, Margin: 40px</Typography>
      </Box>
    </div>
  );
};

export default SpacingTest;
