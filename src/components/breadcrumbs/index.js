import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import { Box, Stack } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function BreadcrumbsComponent() {
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  return (
    <Box mt={2}>
      <Typography variant="h6">Breadcrumbs</Typography>
      <Stack
        gap={2}
        direction="row"
        justifyContent="space-between"
        maxWidth={"50%"}
        mt={2}
      >
        <div role="presentation" onClick={handleClick}>
          <Breadcrumbs aria-label="breadcrumb">
            <Stack gap={0.5} direction="row" alignItems="center">
              <HomeIcon fontSize="inherit" />
              <Link underline="hover" color="text.primary" href="/">
                <Typography variant="body1">MUI</Typography>
              </Link>
            </Stack>
            <Stack gap={0.5} direction="row" alignItems="center">
              <WhatshotIcon fontSize="inherit" />
              <Link underline="hover" color="text.primary" href="/">
                <Typography variant="body1">Core</Typography>
              </Link>
            </Stack>
            <Stack gap={0.5} direction="row" alignItems="center">
              <GrainIcon fontSize="inherit" />
              <Typography color="text.primary">Breadcrumb</Typography>
            </Stack>
          </Breadcrumbs>
        </div>
        <CollapsedBreadcrumbs />
      </Stack>
    </Box>
  );
}

function CollapsedBreadcrumbs() {
  const handleClick = (event) => {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  };

  const breadcrumbsData = [
    { label: "Home", href: "#" },
    { label: "Catalog", href: "#" },
    { label: "Accessories", href: "#" },
    { label: "New Collection", href: "#" },
    { label: "Belts", isTypography: true },
  ];

  return (
    <>
      <div role="presentation" onClick={handleClick}>
        <Breadcrumbs maxItems={2} aria-label="breadcrumb">
          {breadcrumbsData.map((breadcrumb, index) =>
            breadcrumb.isTypography ? (
              <Typography color="text.primary" key={index}>
                {breadcrumb.label}
              </Typography>
            ) : (
              <Link
                key={index}
                underline="hover"
                color="text.primary"
                href={breadcrumb.href}
              >
                {breadcrumb.label}
              </Link>
            )
          )}
        </Breadcrumbs>
      </div>
      <div role="presentation" onClick={handleClick}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          maxItems={2}
          aria-label="breadcrumb"
        >
          {breadcrumbsData.map((breadcrumb, index) =>
            breadcrumb.isTypography ? (
              <Typography color="text.primary" key={index}>
                {breadcrumb.label}
              </Typography>
            ) : (
              <Link
                key={index}
                underline="hover"
                color="text.primary"
                href={breadcrumb.href}
              >
                {breadcrumb.label}
              </Link>
            )
          )}
        </Breadcrumbs>
      </div>
    </>
  );
}
