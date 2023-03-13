import React, { useState } from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useGetTransactionsQuery } from "state/api";

const DashboardTransactions = () => {
  const theme = useTheme();

  // values to be sent to the backend
  const [page] = useState(0);
  const [size] = useState();
  const [sort] = useState('{"field":"id","sort":"desc"}');
  const [search] = useState();
  const [from] = useState();
  const [to] = useState();

  const { data, isLoading } = useGetTransactionsQuery({
    page,
    size: size,
    sort: sort,
    search,
    from,
    to,
  });

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.15,
      sortable: false,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 0.35,
      sortable: false,
    },
    {
      field: "recipient",
      headerName: "Recipient",
      flex: 0.5,
      sortable: false,
    },
    {
      field: "note",
      headerName: "Note",
      flex: 1,
      sortable: false,
    },
    {
      field: "formattedAmountInCzk",
      headerName: "Amount",
      flex: 0.45,
      // renderCell: (params) => `${Number(params.value).toFixed(2)} CZK`,
      sortable: false,
    },
    {
      field: "account",
      headerName: "Account",
      flex: 0.5,
      sortable: false,
    },
    {
      field: "category",
      headerName: "Category",
      flex: 0.5,
      sortable: false,
    },
    {
      field: "subcategory",
      headerName: "Subcategory",
      flex: 0.5,
      sortable: false,
    },
  ];

  return (
    <Box
      height="100%"
      sx={{
        "& .MuiDataGrid-root": {
          border: "none",
          borderRadius: "5rem",
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
          backgroundColor: theme.palette.background.alt,
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
        autoPageSize
        loading={isLoading || !data}
        getRowId={(row) => row.id}
        rows={(data && data.transactions) || []}
        columns={columns}
        hideFooter
      />
    </Box>
  );
};

export default DashboardTransactions;
