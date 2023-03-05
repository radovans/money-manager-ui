import React, { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { useEditRuleMutation } from "state/api";
import RuleForm from "./RuleForm";

const EditRule = ({ handleClose, editData }) => {
  const theme = useTheme();

  const [data, setData] = useState({
    id: editData.id,
    key: editData.key,
    type: editData.type,
    skipTransaction: editData.skipTransaction,
    recipient: editData.recipient,
    note: editData.note,
    mainCategory: editData.mainCategory,
    category: editData.category,
    label: editData.label,
  });

  const [editRule] = useEditRuleMutation();
  const onSubmit = (e) => {
    let id = editData.id;
    e.preventDefault();
    editRule({ id: id, payload: data });
    handleClose();
  };

  return (
    <Box>
      <Typography variant="h5" color={theme.palette.secondary[300]}>
        Edit rule
      </Typography>
      <RuleForm data={data} setData={setData} onSubmit={onSubmit} />
    </Box>
  );
};

export default EditRule;
