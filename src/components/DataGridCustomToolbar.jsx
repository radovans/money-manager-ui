import React from "react";
import { Search } from "@mui/icons-material";
import { Button, IconButton, TextField, InputAdornment } from "@mui/material";
import {
  GridToolbarDensitySelector,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarColumnsButton,
} from "@mui/x-data-grid";
import FlexBetween from "./FlexBetween";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

const DataGridCustomToolbar = ({
  searchInput,
  setSearchInput,
  setSearch,
  setFrom,
  setTo,
  theme,
}) => {
  return (
    <GridToolbarContainer>
      <FlexBetween width="100%">
        <FlexBetween>
          <GridToolbarColumnsButton />
          <GridToolbarDensitySelector />
          <GridToolbarExport />
        </FlexBetween>
        <TextField
          label="Search..."
          sx={{ mb: "0.5rem", width: "20rem" }}
          onChange={(e) => {
            setSearchInput(e.target.value)
            setSearch(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              setSearch(searchInput);
              setSearchInput("");
            }
          }}
          value={searchInput}
          // variant="standard"
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
          style={{ marginTop: "-0.5rem", marginLeft: "-51.9rem" }}
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
            setSearch("");
          }}
        >
          <ClearOutlinedIcon sx={{ mr: "10px" }} />
          Clear filters
        </Button>
      </FlexBetween>
    </GridToolbarContainer>
  );
};

export default DataGridCustomToolbar;
