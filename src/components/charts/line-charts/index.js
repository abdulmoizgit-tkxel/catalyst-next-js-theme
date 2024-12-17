import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

export default function BasicArea() {
  return (
    <LineChart
      xAxis={[{ data: [0, 20, 40, 60, 80, 90, 100] }]}
      yAxis={[{ data: [0, 20, 40, 60, 80, 90, 100] }]}
      series={[
        {
          data: [10, 23, 40, 60, 83, 93, 100],
          color: "#ff00ff", // Custom vibrant magenta color
        },
      ]}
      width={500}
      height={300}
    />
  );
}
