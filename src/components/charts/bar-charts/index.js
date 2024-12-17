import React from "react";
import { BarChartPro } from "@mui/x-charts-pro";

const data = [
  { category: "Group 1", value: 10 },
  { category: "Group 2", value: 40 },
  { category: "Group 3", value: 20 },
  { category: "Group 4", value: 90 },
  { category: "Group 5", value: 10 },
  { category: "Group 6", value: 60 },
];

function CustomBarChart() {
  return (
    <BarChartPro
      series={[
        {
          data: data.map((item) => item.value),
          label: "Series 1",
          color: "#ff00ff", // Custom vibrant magenta color
        },
      ]}
      xAxis={[
        {
          data: data.map((item) => item.category),
          scaleType: "band",
        },
      ]}
      legend={{ position: "top", visible: true }}
      grid={{
        x: { visible: true },
        y: { visible: true },
      }}
      width={800}
      height={400}
    />
  );
}

export default CustomBarChart;
