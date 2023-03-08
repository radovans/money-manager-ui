import React, { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { useAddNewRuleMutation } from "state/api";
import RuleForm from "./RuleForm";

const AddRule = ({ handleClose, setAddStatus }) => {
  const theme = useTheme();

  const [data, setData] = useState({
    key: "",
    type: "NOTE",
    skipTransaction: false,
    recipient: "",
    note: "",
    mainCategory: "",
    category: "",
    label: "",
  });

  const [addNewRule] = useAddNewRuleMutation();
  const onSubmit = (e) => {
    e.preventDefault();
    addNewRule(data)
      .unwrap()
      .then(() => {
        setAddStatus("success");
      })
      .catech((error) => {
        setAddStatus("error");
      });
    handleClose();
  };

  return (
    <Box>
      <Typography variant="h5" color={theme.palette.secondary[300]}>
        Create new rule
      </Typography>
      <RuleForm data={data} setData={setData} onSubmit={onSubmit} />
    </Box>
  );
};

export default AddRule;
