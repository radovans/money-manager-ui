import { TextField } from "@mui/material";
import React from "react";

const Field = ({ label, value, onChange }) => {
  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      value={value}
      onChange={onChange}
    />
  );
};

export default Field;
