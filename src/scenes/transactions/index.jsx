import React, { useState } from "react";
import { Button, Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useGetTransactionsQuery } from "state/api";
import Header from "components/Header";
import DataGridCustomToolbar from "components/DataGridCustomToolbar";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import EventBusyOutlinedIcon from "@mui/icons-material/EventBusyOutlined";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { SxProps } from "@mui/material";

const Transactions = () => {
  const theme = useTheme();

  // values to be sent to the backend
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(20);
  const [sort, setSort] = useState();
  const [search, setSearch] = useState();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();

  const [searchInput, setSearchInput] = useState("");
  const { data, isLoading } = useGetTransactionsQuery({
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

  const popperSx: SxProps = {
    "& .MuiCalendarPicker-root": {
      backgroundColor: theme.palette.primary[800],
    },
    "& .MuiPickersDay-root": {
      backgroundColor: theme.palette.primary[600],
    },
    "& .MuiPickersDay-today": {
      backgroundColor: theme.palette.primary[500],
    },
    "& .MuiPickersDay-dayOutsideMonth": {
      backgroundColor: theme.palette.primary[300],
    },
  };

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="TRANSACTIONS" subtitle="Entire list of transactions" />
      <Box
        style={{
          marginLeft: "41rem",
          marginBottom: "0.3rem",
          marginTop: "-2rem",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="From"
            inputFormat="DD.MM.YYYY"
            value={from}
            onChange={(newValue) => {
              try {
                setFrom(newValue.toISOString());
              } catch (e) {}
            }}
            views={["day", "month", "year"]}
            showDaysOutsideCurrentMonth
            clearable
            renderInput={(params) => <TextField {...params} />}
            PopperProps={{
              sx: popperSx,
            }}
          />
        </LocalizationProvider>
        &nbsp;&nbsp;&nbsp;
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="To"
            inputFormat="DD.MM.YYYY"
            value={to}
            onChange={(newValue) => {
              try {
                setTo(newValue.toISOString());
              } catch (e) {}
            }}
            views={["day", "month", "year"]}
            showDaysOutsideCurrentMonth
            clearable
            renderInput={(params) => <TextField {...params} />}
            PopperProps={{
              sx: popperSx,
            }}
          />
        </LocalizationProvider>
        <Button
          style={{ marginTop: ".25rem", marginLeft: ".5rem" }}
          sx={{
            backgroundColor: theme.palette.primary[800],
            color: theme.palette.primary[100],
            padding: "12px",
          }}
          onClick={() => {
            setFrom("2020-01-01T00:00:00.000z");
            setTo("2023-12-31T23:59:29.999z");
          }}
        >
          <EventBusyOutlinedIcon sx={{ mr: "0px" }} />
        </Button>
        <Button
          style={{ marginTop: ".25rem", marginLeft: ".5rem" }}
          sx={{
            backgroundColor: theme.palette.primary[800],
            color: theme.palette.primary[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
          onClick={(e) => {
            setFrom("2020-01-01T00:00:00.000z");
            setTo("2023-12-31T23:59:29.999z");
          }}
        >
          <CalendarMonthOutlinedIcon sx={{ mr: "10px" }} />
          All
        </Button>
        <Button
          style={{ marginTop: ".25rem", marginLeft: ".5rem" }}
          sx={{
            backgroundColor: theme.palette.primary[800],
            color: theme.palette.primary[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
          onClick={(e) => {
            setFrom("2023-01-01T00:00:00.000z");
            setTo("2023-12-31T23:59:29.999z");
          }}
        >
          <CalendarMonthOutlinedIcon sx={{ mr: "10px" }} />
          This year
        </Button>
        <Button
          style={{ marginTop: ".25rem", marginLeft: ".5rem" }}
          sx={{
            backgroundColor: theme.palette.primary[800],
            color: theme.palette.primary[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
          onClick={(e) => {
            setFrom("2022-01-01T00:00:00.000z");
            setTo("2022-12-31T23:59:29.999z");
          }}
        >
          <CalendarMonthOutlinedIcon sx={{ mr: "10px" }} />
          Last year
        </Button>
      </Box>
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
          getRowId={(row) => row.id}
          rows={(data && data.transactions) || []}
          columns={columns}
          rowCount={(data && data.total) || 0}
          rowsPerPageOptions={[20, 50, 100]}
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
              setFrom,
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
