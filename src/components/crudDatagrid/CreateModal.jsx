import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import CrudDatagridSaveForm from "./CrudDatagridSaveForm";

const CreateModal = (props) => {
  const theme = useTheme();

  const onSubmit = (e) => {
    e.preventDefault();
    props
      .createQuery(props.createInput)
      .unwrap()
      .then(() => {
        props.setCreateStatus("success");
      })
      .catch((error) => {
        props.setCreateStatus("error");
      });
    props.handleClearInput();
    props.handleCloseCreateModal();
  };

  return (
    <Box>
      <Typography variant="h5" color={theme.palette.secondary[300]}>
        Create new {props.entityName}
      </Typography>
      <CrudDatagridSaveForm
        data={props.createInput}
        setData={props.setCreateInput}
        onSubmit={onSubmit}
        Form={props.Form}
      />
    </Box>
  );
};

export default CreateModal;
