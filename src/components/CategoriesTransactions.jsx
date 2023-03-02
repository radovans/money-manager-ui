import React, { useState } from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useGetTransactionsQuery } from "state/api";

const CategoriesTransactions = ({ from, to, category }) => {
  const theme = useTheme();

  // values to be sent to the backend
  const [page] = useState(0);
  const [size] = useState();
  const [sort] = useState('{"field":"amountInCzk","sort":"asc"}');
  const [search] = useState();

  const { data, isLoading } = useGetTransactionsQuery({
    page,
    size: size,
    sort: sort,
    search,
    from,
    to,
    category,
  });

  const columns = [
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
      flex: 0.5,
      // renderCell: (params) => `${Number(params.value).toFixed(2)} CZK`,
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

export default CategoriesTransactions;
