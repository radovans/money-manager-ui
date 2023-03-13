import React, { useState } from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useGetTransactionsQuery } from "state/api";
import Header from "components/Header";
import DataGridCustomToolbar from "components/DataGridCustomToolbar";
import FlexBetween from "components/FlexBetween";
import TotalBox from "components/TotalBox";

const Transactions = () => {
  const theme = useTheme();

  // values to be sent to the backend
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(20);
  const [sort, setSort] = useState();
  const [search, setSearch] = useState();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();

  console.log(from);
  console.log(to);

  const [searchInput, setSearchInput] = useState("");
  const { data, isLoading, isError } = useGetTransactionsQuery({
    page,
    size: size,
    sort: JSON.stringify(sort),
    search,
    from,
    to,
  });

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.15,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 0.25,
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
      field: "amount",
      type: "number",
    },
    {
      field: "formattedAmountInCzk",
      headerName: "Amount",
      flex: 0.35,
      // renderCell: (params) => `${Number(params.value).toFixed(2)} CZK`,
    },
    {
      field: "currency",
      headerName: "Currency",
      flex: 0.2,
      sortable: false,
    },
    {
      field: "account",
      headerName: "Account",
      flex: 0.5,
      sortable: false,
    },
    {
      field: "mainCategory",
      headerName: "Main category",
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
      field: "label",
      headerName: "Label",
      flex: 0.5,
      sortable: false,
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="TRANSACTIONS" subtitle="Entire list of transactions" />
        <TotalBox title="Total Amount" value={data?.totalAmountFormatted} />
      </FlexBetween>
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
          loading={isLoading || !data}
          error={isError}
          getRowId={(row) => row.id}
          rows={(data && data.transactions) || []}
          columns={columns}
          rowCount={(data && data.total) || 0}
          rowsPerPageOptions={[20, 50, 100, {label: "All", value: -1}]}
          pagination
          page={page}
          pageSize={size}
          paginationMode="server"
          sortingMode="server"
          onPageChange={(newPage) => setPage(newPage)}
          onPageSizeChange={(newSize) => setSize(newSize)}
          onSortModelChange={(newSortModel) => setSort(...newSortModel)}
          components={{ Toolbar: DataGridCustomToolbar }}
          componentsProps={{
            toolbar: {
              searchInput,
              setSearchInput,
              setSearch,
              from,
              setFrom,
              to,
              setTo,
              theme,
            },
          }}
          initialState={{
            columns: {
              columnVisibilityModel: {
                amount: false,
              },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Transactions;
