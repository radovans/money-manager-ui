import React from "react";
import { Search } from "@mui/icons-material";
import {
  Button,
  IconButton,
  TextField,
  InputAdornment,
  Box,
} from "@mui/material";
import {
  GridToolbarDensitySelector,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarColumnsButton,
} from "@mui/x-data-grid";
import FlexBetween from "./FlexBetween";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import DateRangePicker from "./DateRangePicker";

const DataGridCustomToolbar = ({
  searchInput,
  setSearchInput,
  setSearch,
  from,
  setFrom,
  to,
  setTo,
  theme,
}) => {
  const today = new Date();

  return (
    <GridToolbarContainer>
      <FlexBetween width="1">
        <FlexBetween>
          <GridToolbarColumnsButton />
          <GridToolbarDensitySelector />
          <GridToolbarExport />
        </FlexBetween>
        <Box
          flexDirection="row"
          display="flex"
        >
          <DateRangePicker
            from={from}
            setFrom={setFrom}
            to={to}
            setTo={setTo}
          />
          <TextField
            label="Search..."
            sx={{ mb: "0.5rem", ml: "2rem", width: "20rem" }}
            onChange={(e) => {
              setSearchInput(e.target.value);
              setSearch(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                setSearch(searchInput);
                setSearchInput("");
              }
            }}
            value={searchInput}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => {
                      setSearch(searchInput);
                      setSearchInput("");
                    }}
                  >
                    <Search />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            style={{ marginTop: "0.3rem", marginLeft: "0.5rem", marginBottom:"0.7rem" }}
            sx={{
              backgroundColor: theme.palette.primary[800],
              color: theme.palette.primary[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            onClick={(e) => {
              setFrom("2020-01-01T00:00:00.000z");
              setTo(today.toISOString());
              setSearch("");
            }}
          >
            <ClearOutlinedIcon sx={{ mr: "10px" }} />
            Clear
          </Button>
        </Box>
      </FlexBetween>
    </GridToolbarContainer>
  );
};

export default DataGridCustomToolbar;
