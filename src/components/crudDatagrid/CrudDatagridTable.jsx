import React from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const CrudDatagridTable = (props) => {
  const theme = useTheme();

  return (
    <Box
      height="80vh"
      sx={{
        "& .MuiDataGrid-root": {
          border: "none",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none",
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: theme.palette.background.alt,
          color: theme.palette.secondary[100],
          borderBottom: "none",
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: theme.palette.primary.light,
        },
        "& .MuiDataGrid-footerContainer": {
          backgroundColor: theme.palette.background.alt,
          color: theme.palette.secondary[100],
          borderTop: "none",
        },
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
          color: `${theme.palette.secondary[200]} !important`,
        },
      }}
    >
      <DataGrid
        sx={{
          "& .MuiDataGrid-row.Mui-selected": {
            backgroundColor: theme.palette.primary[700],
          },
          "& .MuiDataGrid-row:hover": {
            backgroundColor: theme.palette.secondary[200],
            color: theme.palette.primary[500],
          },
        }}
        loading={props.isLoading || !props.data}
        getRowId={(row) => row.id}
        rows={props.data || []}
        columns={props.columns}
        hideFooter
        onSelectionModelChange={(ids) => props.onRowsSelectionHandler(ids)}
      />
    </Box>
  );
};

export default CrudDatagridTable;
