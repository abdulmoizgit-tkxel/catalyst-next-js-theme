import * as React from "react";
import Box from "@mui/material/Box";
import {
  DataGridPremium,
  GridToolbar,
  useGridApiRef,
  useKeepGroupedColumnsHidden,
} from "@mui/x-data-grid-premium";
import { useDemoData } from "@mui/x-data-grid-generator";
import { Typography } from "@mui/material";

export default function DataGridPremiumTable() {
  const { data, loading } = useDemoData({
    dataSet: "Commodity",
    rowLength: 100,
    editable: true,
    visibleFields: [
      "commodity",
      "quantity",
      "filledQuantity",
      "status",
      "isFilled",
      "unitPrice",
      "unitPriceCurrency",
      "subTotal",
      "feeRate",
      "feeAmount",
      "incoTerm",
    ],
  });

  console.log(data);
  const apiRef = useGridApiRef();

  const initialState = useKeepGroupedColumnsHidden({
    apiRef,
    initialState: {
      ...data.initialState,
      rowGrouping: {
        ...data.initialState?.rowGrouping,
        model: ["commodity"],
      },
      sorting: {
        sortModel: [{ field: "__row_group_by_columns_group__", sort: "asc" }],
      },
      aggregation: {
        model: {
          quantity: "sum",
        },
      },
    },
  });

  return (
    <Box sx={{ width: "100%" }}>
      <Typography my={2} variant="body2">
        Data Grid Premium
      </Typography>
      <DataGridPremium
        {...data}
        apiRef={apiRef}
        loading={loading}
        checkboxSelection
        initialState={initialState}
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
}