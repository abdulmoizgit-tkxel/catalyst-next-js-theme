import * as React from "react";
import { DataGridPro } from "@mui/x-data-grid-pro";
import {
  randomCreatedDate,
  randomTraderName,
  randomEmail,
  randomUpdatedDate,
} from "@mui/x-data-grid-generator";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbarQuickFilter } from "@mui/x-data-grid";
import { Typography } from "@mui/material";
import DataGridPremiumTable from "./datagrid-premium";

function QuickSearchToolbar() {
  return (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
      }}
    >
      <GridToolbarQuickFilter />
    </Box>
  );
}

export default function ControlPinnedColumns() {
  const [pinnedColumns, setPinnedColumns] = React.useState({
    left: ["name"],
  });

  const handlePinnedColumnsChange = React.useCallback(
    (updatedPinnedColumns) => {
      setPinnedColumns(updatedPinnedColumns);
    },
    []
  );

  return (
    <Box sx={{ width: "35%" }}>
      <Typography variant="h6">Data Grid</Typography>
      <Typography mb={2} variant="body2">
        Pinned Columns
      </Typography>

      <Alert severity="info">
        <code>pinnedColumns: {JSON.stringify(pinnedColumns)}</code>
      </Alert>
      <Box sx={{ height: 400, mt: 1 }}>
        <DataGridPro
          rows={rows}
          columns={columns}
          pinnedColumns={pinnedColumns}
          onPinnedColumnsChange={handlePinnedColumnsChange}
          slots={{ toolbar: QuickSearchToolbar }}
        />
      </Box>
      <DataGridWithCheckbox />
      <DataGridPremiumTable />
    </Box>
  );
}

const columns = [
  { field: "name", headerName: "Name", width: 180, editable: true },
  { field: "email", headerName: "Email", width: 200, editable: true },
  { field: "age", headerName: "Age", type: "number", editable: true },
  {
    field: "dateCreated",
    headerName: "Date Created",
    type: "date",
    width: 180,
    editable: true,
  },
  {
    field: "lastLogin",
    headerName: "Last Login",
    type: "dateTime",
    width: 220,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    name: randomTraderName(),
    email: randomEmail(),
    age: 25,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 2,
    name: randomTraderName(),
    email: randomEmail(),
    age: 36,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 3,
    name: randomTraderName(),
    email: randomEmail(),
    age: 19,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 4,
    name: randomTraderName(),
    email: randomEmail(),
    age: 28,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    name: randomTraderName(),
    email: randomEmail(),
    age: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
];

const DataGridWithCheckbox = () => {
  const [selectedRows, setSelectedRows] = React.useState([]);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "age", headerName: "Age", type: "number", width: 110 },
    { field: "email", headerName: "Email", width: 200 },
  ];

  const rows = [
    { id: 1, name: "John Doe", age: 25, email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", age: 30, email: "jane.smith@example.com" },
    {
      id: 3,
      name: "Michael Brown",
      age: 35,
      email: "michael.brown@example.com",
    },
  ];

  const handleSelectionModelChange = (ids) => {
    setSelectedRows(ids);
  };

  return (
    <Box style={{ width: "100%", mt: 3 }}>
      <Typography my={2} variant="body2">
        Data Grid with Checkbox
      </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        onRowSelectionModelChange={(selectionModel) =>
          handleSelectionModelChange(selectionModel)
        }
      />
    </Box>
  );
};
