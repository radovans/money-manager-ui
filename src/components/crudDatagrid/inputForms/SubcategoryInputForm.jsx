import React from "react";
import { Box } from "@mui/material";
import Field from "components/Field";
import DropdownField from "components/DropdownField";
import { useGetCategoriesQuery } from "state/api";

const SubcategoryInputForm = (props) => {
  const { data: categories } = useGetCategoriesQuery({
    forceRefetch: true,
  });

  return (
    <Box marginBottom={"20px"}>
      <Field
        label="Name"
        value={props.data.name}
        onChange={(e) => props.setData({ ...props.data, name: e.target.value })}
      />
      <DropdownField
        label="Category"
        value={props.data.category}
        onChange={(e) =>
          props.setData({ ...props.data, category: e.target.value })
        }
        values={categories}
      />
    </Box>
  );
};

export default SubcategoryInputForm;
