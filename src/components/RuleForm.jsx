import { AddOutlined } from "@mui/icons-material";
import {
  Box,
  FormControlLabel,
  MenuItem,
  Switch,
  TextField,
} from "@mui/material";
import React from "react";
import { useGetCategoriesQuery, useGetMainCategoriesQuery } from "state/api";
import ContainedButton from "./ContainedButton";
import DropdownField from "./DropdownField";
import Field from "./Field";

const RuleForm = ({ data, setData, onSubmit }) => {
  const icons = { save: <AddOutlined sx={{ mr: "10px" }} /> };

//   Fetch categories
  const { data: categories } = useGetCategoriesQuery({
    mainCategory: data.mainCategory,
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

//  Skip switch
  const handleSkipChange = (event) => {
    setData({
      ...data,
      skipTransaction: event.target.checked,
      recipient: "",
      note: "",
      mainCategory: "",
      category: "",
      label: "",
    });
  };

  return (
    <Box
      component="form"
      marginTop={"20px"}
      sx={{
        "& .MuiTextField-root": { marginTop: "15px", width: "100%" },
      }}
      noValidate
      autoComplete="off"
    >
      <Box marginBottom={"20px"}>
        <TextField
          id="outlined-required-select"
          select
          label="Key type"
          value={data.type}
          onChange={(e) => setData({ ...data, type: e.target.value })}
        >
          {ruleTypes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Field
          label="Key"
          value={data.key}
          onChange={(e) => setData({ ...data, key: e.target.value })}
        />
        <FormControlLabel
          sx={{ marginTop: "12px", marginLeft: "-5px" }}
          control={<Switch checked={data.skipTransaction} />}
          label="Skip transaction"
          onChange={handleSkipChange}
        />

        {data.skipTransaction === false && (
          <Box>
            <Field
              label="Note"
              value={data.note}
              onChange={(e) => setData({ ...data, note: e.target.value })}
            />
            <Field
              label="Recipient"
              value={data.recipient}
              onChange={(e) => setData({ ...data, recipient: e.target.value })}
            />
            <DropdownField
              label="Main Category"
              value={data.mainCategory}
              onChange={(e) =>
                setData({ ...data, mainCategory: e.target.value })
              }
              values={mainCategories}
            />
            <DropdownField
              label="Category"
              value={data.category}
              onChange={(e) => setData({ ...data, category: e.target.value })}
              values={categories}
            />
            <Field
              label="Label"
              value={data.label}
              onChange={(e) => setData({ ...data, label: e.target.value })}
            />
          </Box>
        )}
      </Box>
      <Box textAlign="center">
        <ContainedButton text="Save" icon={icons.save} onClick={onSubmit} />
      </Box>
    </Box>
  );
};

export default RuleForm;
