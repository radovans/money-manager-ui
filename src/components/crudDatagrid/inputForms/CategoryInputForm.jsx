import React from "react";
import { Box } from "@mui/material";
import Field from "components/Field";

const CategoryInputForm = (props) => {
  return (
    <Box marginBottom={"20px"}>
      <Field
        label="Name"
        value={props.data.name}
        onChange={(e) => props.setData({ ...props.data, name: e.target.value })}
      />
    </Box>
  );
};

export default CategoryInputForm;
