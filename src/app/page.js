"use client";

import { AppBar, Box } from "@mui/material";

import React from "react";
import ButtonComponent from "@/components/button";
import ChipComponent from "@/components/chipCompnent";
import CheckboxComponent from "@/components/checkboxComponent";
import TypographyComponent from "@/components/typoGraphyComponent";
import RadioComponent from "@/components/radioComponent";
import SwitchComponent from "@/components/switchComponent/SwitchComponent";
import TooltipComponent from "@/components/tooltip/TooltipComponent";

import FormLabelComponent from "@/components/formLabel";
import HelperTextComponent from "@/components/helperText";
import DatePickerComponent from "@/components/datePicker";
import TextFieldComponent from "@/components/textFiled";
import TableComponent from "@/components/tabel";
import ListComponent from "@/components/listComponent";
import BottomNavigationActionComponent from "@/components/bottomNavigationAction";
import SpeedDialComponent from "@/components/speedDial";
import LinksComponent from "@/components/linkComponent";
import CustomDialog from "@/components/dialog";
import MenuComponent from "@/components/menuComponent";
import PaperComponent from "@/components/paper";
import PaginationComponent from "@/components/getPagination";
import AlertComponent from "@/components/alert";
import DividerComponent from "@/components/divider";
import AppbarCustom from "@/components/appbar";
import IconButtonCustomComponent from "@/components/iconButton";
import TabsComponent from "@/components/tabs";
import AvatarComponent from "@/components/avatar";
import SkeletonComponent from "@/components/skeleton";
import ProgressComponent from "@/components/progress";
import AccordionComponent from "@/components/accordion";
import DrawerComponent from "@/components/drawer";
import BadgeComponent from "@/components/badge";
import SliderComponent from "@/components/slider";
import ChartsComponent from "@/components/charts";
import BreadcrumbsComponent from "@/components/breadcrumbs";
import CardComponent from "@/components/card";
import StepperComponent from "@/components/stepper";
import CustomContainer from "@/components/container";
import BreakpointsComponent from "@/components/breakpoint";
import SpacingTest from "@/components/spacing";
import StackComponent from "@/components/stack";
import ImageListComponent from "@/components/imageList";
import SnackbarComponent from "@/components/snackbar";
import RatingComponent from "@/components/rating";
import BackdropComponent from "@/components/backdrop";
import IconsComponent from "@/components/icons";
import PopoverComponent from "@/components/popover";
import TreeViewComponent from "@/components/treeView";
import TransferListComponent from "@/components/transferList";
import FloatingActionButtonComponent from "@/components/fab";
import TimelineComponent from "@/components/timeline";
import DataGridComponent from "@/components/datagrid";

export default function Home() {
  return (
    <Box padding={{ xs: 2, sm: 4, md: 8 }}>
      {/* Typography component   */}
      <TypographyComponent />
      {/* Button component */}
      <ButtonComponent />
      {/* chip component */}
      <ChipComponent />
      {/* checkBox */}
      <CheckboxComponent />
      {/* radio component */}
      <RadioComponent />
      {/* switch component */}
      <SwitchComponent />
      {/* form label component */}
      <FormLabelComponent />
      {/* helper text component */}
      <HelperTextComponent />
      {/* tooltip component */}
      <TooltipComponent />
      {/* date picker component */}
      <DatePickerComponent />
      {/* table component */}
      <TableComponent />
      {/* List component */}
      <ListComponent />
      {/* bottom navigation action component */}
      <BottomNavigationActionComponent />
      {/* speed dial component */}
      <SpeedDialComponent />
      {/* link component */}
      <LinksComponent />
      {/* dialog component */}
      <CustomDialog />
      {/* menu component */}
      <MenuComponent />
      {/* paper component */}
      <PaperComponent />
      {/* get pagination component */}
      <PaginationComponent />
      {/* alert component */}
      <AlertComponent />
      {/* divider component */}
      <DividerComponent />
      {/* text field component */}
      <TextFieldComponent />
      {/*App bar */}
      <AppbarCustom />
      {/* IconButton component */}
      <IconButtonCustomComponent />
      {/* Tabs component */}
      <TabsComponent />
      {/* Avatar component */}
      <AvatarComponent />
      {/* Skeleton component */}
      <SkeletonComponent />
      {/* Linear progress component */}
      <ProgressComponent />
      {/* Accordion component */}
      <AccordionComponent />
      {/*Drawer component*/}
      <DrawerComponent />
      {/*badge component*/}
      <BadgeComponent />
      {/*Drawe component*/}
      <DrawerComponent />
      {/* Slider component */}
      <SliderComponent />
      {/* Charts component */}
      <ChartsComponent />
      {/* Breadcrumbs component */}
      <BreadcrumbsComponent />
      {/* Card component */}
      <CardComponent />
      {/* Stepper component */}
      <StepperComponent />
      {/* container component */}
      <CustomContainer />
      {/* breackpoint component */}
      <BreakpointsComponent />
      {/* spacing component */}
      <SpacingTest />
      {/* stack component */}
      <StackComponent />
      {/* imagelist component */}
      <ImageListComponent />
      {/* Snackbar component */}
      <SnackbarComponent />
      {/* Rating component */}
      <RatingComponent />
      {/* Backdrop component */}
      <BackdropComponent />
      {/* Icons component */}
      <IconsComponent />
      {/* Popover component */}
      <PopoverComponent />
      {/* Tree view component */}
      <TreeViewComponent />
      {/* Transfer List component */}
      <TransferListComponent />
      {/* Floating Action Button component */}
      <FloatingActionButtonComponent />
      {/* Timeline component */}
      <TimelineComponent />
      {/* Data grid component */}
      <DataGridComponent />
    </Box>
  );
}
