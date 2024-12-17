import React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
import { MobileDateRangePicker } from "@mui/x-date-pickers-pro/MobileDateRangePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";

import {
  DateRangePicker,
  StaticDateRangePicker,
} from "@mui/x-date-pickers-pro";
import { Box } from "@mui/material";

const DatePickerComponent = () => {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateRangePicker
          localeText={{ start: "Check-in", end: "Check-out" }}
          onAccept={(value) => {
            console.log(value);
          }}
        />
        <Box mt={4}>
          <MobileDateRangePicker
            defaultValue={[dayjs("2022-04-17"), dayjs("2022-04-21")]}
          />
        </Box>
        <StaticDateRangePicker
          defaultValue={[dayjs("2022-04-17"), dayjs("2022-04-21")]}
        />

        <TimePicker label="Basic time picker" />

        <MobileTimePicker defaultValue={dayjs("2022-04-17T15:30")} />

        <MobileTimePicker label={'"minutes"'} openTo="minutes" />
        <MobileTimePicker
          label={'"seconds"'}
          openTo="seconds"
          views={["minutes", "seconds"]}
          format="mm:ss"
        />
      </LocalizationProvider>
    </div>
  );
};

export default DatePickerComponent;
