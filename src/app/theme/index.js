"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { palette } from "./palette";
import { useMemo } from "react";
const themeJson = require("./theme.json");

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const createResponsiveTheme = (isSmallScreen) => {
  const size = isSmallScreen ? "sm" : "md";
  const mapBreakpoints = (breakpoints) => {
    return Object.fromEntries(
      Object.entries(breakpoints).map(([key, value]) => [key, parseInt(value)])
    );
  };

  const mapSpacing = (spacing) => {
    const spacingArray = Object.values(spacing).map((val) => parseInt(val));
    return (factor) => spacingArray[factor - 1] || factor * 8;
  };

  return createTheme({
    cssVariables: true,
    palette: {
      mode: "light",
      ...palette, // Map the palette directly from JSON
    },
    typography: {
      ...themeJson.textStyles.typography,
    },
    breakpoints: { values: mapBreakpoints(themeJson.breakpoints) },
    spacing: mapSpacing(themeJson.spacing),
    components: {
      MuiButton: {
        ...themeJson.components.MuiButton,
      },
      MuiButtonGroup: {
        ...themeJson.components.MuiButtonGroup,
      },
      MuiChip: {
        ...themeJson.components.MuiChip,
      },
      MuiCheckbox: {
        ...themeJson.components.MuiCheckbox,
      },
      MuiRadio: {
        ...themeJson.components.MuiRadio,
      },
      MuiSwitch: {
        ...themeJson.components.MuiSwitch,
      },
      MuiFormLabel: {
        ...themeJson.components.MuiFormLabel,
      },
      MuiInputLabel: {
        ...themeJson.components.MuiInputLabel,
      },
      MuiFormHelperText: {
        ...themeJson.components.MuiFormHelperText,
      },
      MuiPopper: {
        ...themeJson.components.MuiPopper,
      },
      MuiTableCell: {
        ...themeJson.components.MuiTableCell,
      },
      MuiTableRow: {
        ...themeJson.components.MuiTableRow,
      },
      MuiListItem: {
        ...themeJson.components.MuiListItem,
      },
      MuiBottomNavigationAction: {
        ...themeJson.components.MuiBottomNavigationAction,
      },
      MuiSpeedDial: {
        ...themeJson.components.MuiSpeedDial,
      },
      MuiLink: {
        ...themeJson.components.MuiLink,
      },
      MuiDialogTitle: {
        ...themeJson.components.MuiDialogTitle,
      },
      MuiDialogContent: {
        ...themeJson.components.MuiDialogContent,
      },
      MuiDialogActions: {
        ...themeJson.components.MuiDialogActions,
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            ...themeJson.components.MuiMenuItem.styleOverrides.root[size],
          },
        },
      },
      MuiMenuList: {
        styleOverrides: {
          root: {
            ...themeJson.components.MuiMenuList.styleOverrides.root[size],
          },
        },
      },
      MuiPaper: {
        ...themeJson.components.MuiPaper,
      },
      MuiPaginationItem: {
        ...themeJson.components.MuiPaginationItem,
      },
      MuiPagination: {
        ...themeJson.components.MuiPagination,
      },
      MuiAlert: {
        ...themeJson.components.MuiAlert,
      },
      MuiDivider: {
        ...themeJson.components.MuiDivider,
      },
      MuiInputBase: {
        ...themeJson.components.MuiInputBase,
      },
      MuiAppBar: {
        ...themeJson.components.MuiAppBar,
      },
      MuiTextField: {
        ...themeJson.components.MuiTextField,
      },
      MuiToolbar: {
        ...themeJson.components.MuiToolbar,
      },
      MuiAppbar: {
        ...themeJson.components.MuiAppbar,
      },
      MuiIconButton: {
        ...themeJson.components.MuiIconButton,
      },
      MuiTabs: {
        ...themeJson.components.MuiTabs,
      },
      MuiAvatar: {
        ...themeJson.components.MuiAvatar,
      },
      MuiSkeleton: {
        ...themeJson.components.MuiSkeleton,
      },
      MuiAccordion: {
        ...themeJson.components.MuiAccordion,
      },
      MuiBadge: {
        ...themeJson.components.MuiBadge,
      },
      MuiToggleButton: {
        ...themeJson.components.MuiToggleButton,
      },
      MuiToggleButtonGroup: {
        ...themeJson.components.MuiToggleButtonGroup,
      },
      MuiSlider: {
        ...themeJson.components.MuiSlider,
      },
      MuiChartsAxis: {
        ...themeJson.components.MuiChartsAxis,
      },
      MuiChartsLegend: {
        ...themeJson.components.MuiChartsLegend,
      },
      MuiBreadcrumbs: {
        ...themeJson.components.MuiBreadcrumbs,
      },
      MuiStepper: {
        styleOverrides: {
          root: {
            ...themeJson.components.MuiStepper.styleOverrides.root[size],
          },
        },
      },
      MuiStep: {
        ...themeJson.components.MuiStep,
      },
      MuiMobileStepper: {
        ...themeJson.components.MuiMobileStepper,
      },
      MuiImageListItemBar: {
        ...themeJson.components.MuiImageListItemBar,
      },
      MuiSnackbar: {
        ...themeJson.components.MuiSnackbar,
      },
      MuiRating: {
        ...themeJson.components.MuiRating,
      },
      MuiBackdrop: {
        ...themeJson.components.MuiBackdrop,
      },
      MuiSvgIcon: {
        ...themeJson.components.MuiSvgIcon,
      },
      MuiIcon: {
        ...themeJson.components.MuiIcon,
      },
      MuiPopover: {
        ...themeJson.components.MuiPopover,
      },
      MuiTreeItem: {
        ...themeJson.components.MuiTreeItem,
      },
      MuiFab: {
        ...themeJson.components.MuiFab,
      },
      MuiTimelineDot: {
        ...themeJson.components.MuiTimelineDot,
      },
      MuiTimelineItem: {
        ...themeJson.components.MuiTimelineItem,
      },
      MuiTimeline: {
        ...themeJson.components.MuiTimeline,
      },
      MuiDataGrid: {
        ...themeJson.components.MuiDataGrid,
      },
      MuiCard: {
        ...themeJson.components.MuiCard,
      },
    },
  });
};

// Hook to get the responsive theme
const useResponsiveTheme = () => {
  const defaultTheme = useMemo(() => createTheme(), []);
  const isSmallScreen = useMediaQuery(defaultTheme.breakpoints.down("sm"));
  return createResponsiveTheme(isSmallScreen);
};

export default useResponsiveTheme;
