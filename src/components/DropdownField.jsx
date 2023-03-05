import { MenuItem, TextField } from "@mui/material";
import React from "react";

const DropdownField = ({ label, value, onChange, values }) => {
  return (
    <TextField
      id="outlined-required-select"
      select
      label={label}
      value={value}
      onChange={onChange}
    >
      {values?.map((option) => (
        <MenuItem key={option.name} value={option.name}>
          {option.name}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default DropdownField;
