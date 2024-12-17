import { Typography, useTheme } from "@mui/material";

const TypographyComponent = () => {
  const theme = useTheme();

  return (
    <>
      <Typography variant="h1" color="primary.main">
        Heading 1
      </Typography>
      <Typography variant="h2" color="secondary.main">
        Heading 2
      </Typography>
      <Typography variant="h3" color="warning.main">
        Heading 3
      </Typography>
      <Typography variant="h4" color="success.main">
        Heading 4
      </Typography>
      <Typography variant="h5" color="error.main">
        Heading 5
      </Typography>
      <Typography variant="h6" color="text.primary">
        Heading 6
      </Typography>
    </>
  );
};

export default TypographyComponent;
