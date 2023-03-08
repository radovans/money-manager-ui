import React from "react";
import {
  Box,
  FormControlLabel,
  MenuItem,
  Switch,
  TextField,
} from "@mui/material";
import Field from "components/Field";
import DropdownField from "components/DropdownField";
import { useGetCategoriesQuery, useGetMainCategoriesQuery } from "state/api";

const RuleInputForm = (props) => {
  //  Skip switch
  const handleSkipChange = (event) => {
    props.setData({
      ...props.data,
      skipTransaction: event.target.checked,
      recipient: "",
      note: "",
      mainCategory: "",
      category: "",
      label: "",
    });
  };

  //   Fetch categories
  const { data: categories } = useGetCategoriesQuery({
    mainCategory: props.data.mainCategory,
    forceRefetch: true,
  });

  //   Fetch main categories
  const { data: mainCategories } = useGetMainCategoriesQuery({
    forceRefetch: true,
  });

  //   Define rule types
  const ruleTypes = [
    {
      value: "NOTE",
      label: "Note",
    },
    {
      value: "RECIPIENT",
      label: "Recipient",
    },
  ];

  return (
    <Box marginBottom={"20px"}>
      <TextField
        id="outlined-required-select"
        select
        label="Key type"
        value={props.data.type}
        onChange={(e) => props.setData({ ...props.data, type: e.target.value })}
      >
        {ruleTypes.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Field
        label="Key"
        value={props.data.key}
        onChange={(e) => props.setData({ ...props.data, key: e.target.value })}
      />
      <FormControlLabel
        sx={{ marginTop: "12px", marginLeft: "-5px" }}
        control={<Switch checked={props.data.skipTransaction} />}
        label="Skip transaction"
        onChange={handleSkipChange}
      />

      {props.data.skipTransaction === false && (
        <Box>
          <Field
            label="Note"
            value={props.data.note}
            onChange={(e) =>
              props.setData({ ...props.data, note: e.target.value })
            }
          />
          <Field
            label="Recipient"
            value={props.data.recipient}
            onChange={(e) =>
              props.setData({ ...props.data, recipient: e.target.value })
            }
          />
          <DropdownField
            label="Main Category"
            value={props.data.mainCategory}
            onChange={(e) =>
              props.setData({ ...props.data, mainCategory: e.target.value })
            }
            values={mainCategories}
          />
          <DropdownField
            label="Category"
            value={props.data.category}
            onChange={(e) =>
              props.setData({ ...props.data, category: e.target.value })
            }
            values={categories}
          />
          <Field
            label="Label"
            value={props.data.label}
            onChange={(e) =>
              props.setData({ ...props.data, label: e.target.value })
            }
          />
        </Box>
      )}
    </Box>
  );
};

export default RuleInputForm;
